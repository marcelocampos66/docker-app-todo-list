import 'dotenv/config';
import { Request, Response, NextFunction } from 'express';
import HandleToken from '../utils/HandleToken';
import HandleRefreshToken from '../utils/HandleRefreshToken';

interface IParams {
  handleToken: HandleToken;
  handleRefreshToken: HandleRefreshToken;
}

class Middlewares {
  private handleToken: HandleToken;
  private handleRefreshToken: HandleRefreshToken;

  constructor({ handleToken, handleRefreshToken }: IParams) {
    this.handleToken = handleToken;
    this.handleRefreshToken = handleRefreshToken;
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
  
    const tokenIsValid: boolean | IPayload =
      await this.handleToken.execute(authorization);

    if (typeof tokenIsValid !== 'boolean') {
      req.payload = tokenIsValid;
      return next();
    }
    if (!tokenIsValid) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    const refreshToken: IPayload | null =
      await this.handleRefreshToken.execute(authorization);
    
    if (!refreshToken) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }

    req.payload = refreshToken;
    return next();
  };

}

export default Middlewares;
