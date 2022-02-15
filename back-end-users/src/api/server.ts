import App from './App';
import factory from '../factories';

const server: App = factory.getApp();

server.startServer();
