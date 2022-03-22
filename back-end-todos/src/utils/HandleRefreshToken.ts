import { createClient } from 'redis';
import 'dotenv/config';
import jwt from 'jsonwebtoken';

class HandleRefreshToken {
  private REDIS_URL: string;

  constructor() {
    this.REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379';
  }

  private async getRefreshToken(id: string): Promise<string | null> {
    const client = createClient({
      url: this.REDIS_URL
    });
    await client.connect();
    return client.get(id);
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
