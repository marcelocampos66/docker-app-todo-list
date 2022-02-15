import 'dotenv/config';
import factory from '../factories';
import App from './App';

const server: App = factory.getApp();

server.startServer();
