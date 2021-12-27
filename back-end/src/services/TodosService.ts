import models, { IModels } from '../models';

export class TodosService {
  private models: IModels;

  constructor(models: IModels) {
    this.models = models;
  }

  public async register(newTodo: INewTodo) {
    return this.models.todos.register(newTodo);
  }

}

export default new TodosService(models);
