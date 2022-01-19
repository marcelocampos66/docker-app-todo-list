import 'dotenv/config';
import App from '../api/App';
import controllers from '../controllers';

const PORT: number = Number(process.env.PORT) || 3001;

const server: App = new App(PORT, controllers);

server.startServer();
