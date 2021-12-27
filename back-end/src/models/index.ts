import TodosModel from "./TodosModel";

export interface IModels {
  todos: TodosModel;
}

export default {
  todos: new TodosModel(),
};
