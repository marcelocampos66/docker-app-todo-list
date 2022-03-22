import 'dotenv/config';
import jwt from 'jsonwebtoken';

class HandleToken {
  private secret: jwt.Secret;

  constructor() {
    this.secret = process.env.JWT_SECRET || 'secret';
  }

  private decodeToken(token: string): IPayload | jwt.JsonWebTokenError {
    try {
      return jwt.verify(token, this.secret) as IPayload;
    } catch (error: any) {
      return error;
    }
  }

  public async execute(token: string): Promise<IPayload | boolean> {
    const payload: IPayload | jwt.JsonWebTokenError =
      this.decodeToken(token);
    if (!(payload instanceof jwt.JsonWebTokenError)) {
      return payload;
    }
    if (payload instanceof jwt.TokenExpiredError) {
      return true;
    }
    return false;
  }
}

export default HandleToken;
