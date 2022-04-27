import 'dotenv/config';
import { createClient } from 'redis';

const REDIS_DB_NUMBER = Number(process.env.REDIS_DB_NUMBER) || 15;
const REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379';

const redisClient = createClient({
  url: REDIS_URL,
  database: REDIS_DB_NUMBER,
});

export default redisClient;
