import 'dotenv/config';
import App from '../api/App';
import TodosController from '../controllers/TodosController';
import TodosService from '../services/TodosService';
import TodosModel from '../models/TodosModel';
import HandleToken from '../utils/HandleToken';
import HandleRefreshToken from '../utils/HandleRefreshToken';

const PORT: number = Number(process.env.PORT) || 3001;

export interface IControllers {
  todos: TodosController;
}

export interface IModels {
  todos: TodosModel;
}

export interface ITodosService {
  service: TodosService;
  handleToken: HandleToken;
  handleRefreshToken: HandleRefreshToken;
}

const getTodosModel = (): TodosModel => {
  return new TodosModel();
};

const getTodosService = (): TodosService => {
  return new TodosService({
    todos: getTodosModel(),
  });
};

const getTodosController = (): TodosController => {
  return new TodosController({
    service: getTodosService(),
    handleToken: new HandleToken(),
    handleRefreshToken: new HandleRefreshToken(),
  });
};

const getApp = (): App => {
  return new App(PORT, {
    todos: getTodosController(),
  });
};

export default {
  getApp,
};
