import 'dotenv/config';
import jwt from 'jsonwebtoken';

class HandleToken {
  private secret: jwt.Secret;
  public isExpired: boolean;
  private tokenPayload?: IPayload;

  constructor() {
    this.secret = process.env.JWT_SECRET || 'secret';
    this.isExpired = false;
  }

  private decodeToken(token: string): IPayload | jwt.JsonWebTokenError {
    try {
      return jwt.verify(token, this.secret) as IPayload;
    } catch (error: any) {
      return error;
    }
  }

  public isValid(token: string): boolean {
    const payload: IPayload | jwt.JsonWebTokenError =
      this.decodeToken(token);
    if (!(payload instanceof jwt.JsonWebTokenError)) {
      this.tokenPayload = payload;
      return true;
    }
    if (payload instanceof jwt.TokenExpiredError) {
      this.isExpired = true;
      return true;
    }
    return false;
  }

  public getPayload(): IPayload {
    return this.tokenPayload!;
  }
}

export default HandleToken;
