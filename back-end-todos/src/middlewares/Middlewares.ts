import 'dotenv/config';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

class Middlewares {
  private secret: jwt.Secret

  constructor() {
    this.secret = process.env.JWT_SECRET || 'secret';
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
    try {
      const payload = jwt.verify(authorization, this.secret);
      if (!payload) {
        return res.status(401).json({ message: 'Expired or invalid token' });
      }
      req.payload = payload;
      return next();
    } catch (e) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
  };

}

export default Middlewares;
