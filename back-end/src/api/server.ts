import 'dotenv/config';
import App from '../api/App';

const PORT: number = Number(process.env.PORT) || 3001;

const server: App = new App(PORT);
server.startServer();
