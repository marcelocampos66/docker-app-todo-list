import models, { IModels } from '../models';

export class TodosService {
  private models: IModels;

  constructor(models: IModels) {
    this.models = models;
  }

  public async register(newTodo: INewTodo) {
    const todoId = await this.models.todos.register(newTodo);
    return this.models.todos.getById(todoId.toString());
  }

  public async getAll() {
    return this.models.todos.getAll();
  }

  public async getById(id: string) {
    const todo = await this.models.todos.getById(id);
    if (!todo) {
      return ({ message: 'No tasks found with this id' });
    }
    return todo;
  }

  public async update(id: string, newInfos: IUpdateTodo) {
    await this.models.todos.update(id, newInfos);
    return this.models.todos.getById(id);
  }

  public async delete(id: string) {
    const response: IDeleteReponse = await this.models.todos.delete(id);
    if (response.deletedCount === 0) {
      return ({ message: 'No tasks were deleted' });
    }
    return ({ message: 'Task has been deleted' });
  }
  
}

export default new TodosService(models);
