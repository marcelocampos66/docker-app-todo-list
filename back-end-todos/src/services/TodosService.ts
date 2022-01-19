import models, { IModels } from '../models';

export class TodosService {
  private models: IModels;

  constructor(models: IModels) {
    this.models = models;
  }

  public async register(newTodo: INewTodo) {
    const todoId = await this.models.todos.register(newTodo);
    return this.models.todos.getById(todoId.toString(), newTodo.userId);
  }

  public async getAll(userId: string) {
    return this.models.todos.getAll(userId);
  }

  public async getById(id: string, userId: string) {
    const todo = await this.models.todos.getById(id, userId);
    if (!todo) {
      return ({ message: 'No tasks found with this id' });
    }
    return todo;
  }

  public async update(id: string, newInfos: IUpdateTodo) {
    await this.models.todos.update(id, newInfos);
    return this.models.todos.getById(id, newInfos.userId);
  }

  public async delete(id: string, userId: string) {
    const response: IDeleteReponse =
      await this.models.todos.delete(id, userId);
    if (response.deletedCount === 0) {
      return ({ message: 'No tasks were deleted' });
    }
    return ({ message: 'Task has been deleted' });
  }
  
}

export default new TodosService(models);
