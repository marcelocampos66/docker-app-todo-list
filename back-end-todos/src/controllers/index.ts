import TodosController from '../controllers/TodosController';
import TodosService from '../services/TodosService';

export interface IControllers {
  todos: TodosController;
}

export default {
  todos: new TodosController(TodosService),
};
