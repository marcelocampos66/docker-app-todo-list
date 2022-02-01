import App from './App';
import controllers from '../controllers';

const PORT = process.env.PORT || 3002;

const server: App = new App(Number(PORT), controllers);

server.startServer();
