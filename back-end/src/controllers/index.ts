import TodosController from '../controllers/TodosController';

export interface IControllers {
  todos: TodosController;
}

export default {
  todos: new TodosController(),
};
