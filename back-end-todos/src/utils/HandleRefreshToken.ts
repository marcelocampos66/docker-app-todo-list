import 'dotenv/config';
import jwt from 'jsonwebtoken';
import redisClient from '../common/redisClient';

class HandleRefreshToken {
  private REDIS_URL: string;

  constructor() {
    this.REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379';
  }

  private async getRefreshToken(id: string): Promise<string | null> {
    await redisClient.connect();
    const refreshToken = await redisClient.get(id);
    await redisClient.quit();
    return refreshToken;
  }

  private decodeToken(token: string): IPayload {
    return jwt.decode(token) as IPayload;
  }

  public async execute(token: string): Promise<IPayload | null> {
    const payload: IPayload = this.decodeToken(token);
    const refreshToken = await this.getRefreshToken(payload.id);
    if (!refreshToken) {
      return null;
    }
    const refreshTokenPayload: IPayload = this.decodeToken(refreshToken);
    return refreshTokenPayload;
  }
}

export default HandleRefreshToken;
