import 'dotenv/config';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { createClient } from 'redis';

interface ITokenData {
  id: string;
  name: string;
  email: string;
  birthDate: string;
}

class Middlewares {
  private secret: jwt.Secret
  private jwtConfig: jwt.SignOptions;

  constructor() {
    this.secret = process.env.JWT_SECRET || 'secret';
    this.jwtConfig = { expiresIn: '1d', algorithm: 'HS256' };
  }

  public generateToken(data: ITokenData): string {
    return jwt.sign(data, this.secret, this.jwtConfig);
  }

  private verifyToken(token: string): jwt.JwtPayload | null | string {
    const JWT_ERROR_MESSAGE = 'jwt expired';
    try {
      return jwt.verify(token, this.secret) as jwt.JwtPayload;
    } catch (error: any) {
      if (error.message === JWT_ERROR_MESSAGE) {
        return JWT_ERROR_MESSAGE;
      }
      return null;
    }
  }

  private decodeOldToken(token: string): string | jwt.JwtPayload | null {
    try {
      return jwt.decode(token);
    } catch (error) {
      return null;
    }
  }

  private async handleRefreshToken(token: string): Promise<string | jwt.JwtPayload | null> {
    const payload = this.decodeOldToken(token) as any;
    if (!payload) {
      return null;
    }
    const url = process.env.REDIS_URL || 'redis://127.0.0.1:6379';
    const client = createClient({
      url
    });
    await client.connect();
    const refreshToken = await client.get(payload.id);
    return refreshToken ? payload : null;
  }

  public validateJWT = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { headers: { authorization } } = req;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const payload: jwt.JwtPayload | null | string =
      this.verifyToken(authorization);
    if (!payload) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    if (typeof payload === 'string') {
      const refreshTokenPayload: string | jwt.JwtPayload | null =
        await this.handleRefreshToken(authorization);
      if (!refreshTokenPayload) {
        return res.status(401).json({ message: 'Expired or invalid token' });
      }
      req.payload = refreshTokenPayload as jwt.JwtPayload;
      return next();
    }
    req.payload = payload as jwt.JwtPayload;
    return next();
  };

}

export default Middlewares;
