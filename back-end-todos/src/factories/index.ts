import 'dotenv/config';
import App from '../api/App';

const PORT: number = Number(process.env.PORT) || 3001;

const getApp = (): App => {
  return new App(PORT);
};

export default {
  getApp,
};
