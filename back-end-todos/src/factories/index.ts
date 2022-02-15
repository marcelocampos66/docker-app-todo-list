import 'dotenv/config';
import App from '../api/App';
import TodosController from '../controllers/TodosController';
import TodosService from '../services/TodosService';
import TodosModel from '../models/TodosModel';

const PORT: number = Number(process.env.PORT) || 3001;

export interface IControllers {
  todos: TodosController;
}

export interface IModels {
  todos: TodosModel;
}

export interface ITodosService {
  service: TodosService;
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
