import express, { Request, Response, NextFunction } from 'express';
import Middlewares from '../middlewares/Middlewares';
import { TodosService } from '../services/TodosService';

class TodosController extends Middlewares {
  public router: express.Router;
  private service: TodosService;

  constructor(service: TodosService) {
    super();
    this.router = express.Router();
    this.service = service;
    this.initializeRouters();
  }

  private initializeRouters(): void {
    this.router.post('/', [
      this.validateJWT,
      this.register,
    ]);
    this.router.get('/', [
      this.validateJWT,
      this.getAll,
    ]);
    this.router.get('/:id', [
      this.validateJWT,
      this.getById,
    ]);
    this.router.put('/:id', [
      this.update,
    ]);
    this.router.delete('/:id', [
      this.validateJWT,
      this.delete,
    ]);
  }

  private register = async (
    req: Request,
    res: Response,
    _next: NextFunction,
  ) => {
    const {
      body: { order, todo, priority, isDone },
      payload: { id },
    } = req;
    const todoData = { order, todo, priority, isDone, userId: id };
    const result = await this.service.register(todoData);
    return res.status(201).json(result);
  }

  private getAll = async (
    req: Request,
    res: Response,
    _next: NextFunction,
  ) => {
    const { payload } = req;
    const result = await this.service.getAll(payload.id);
    return res.status(200).json({ name: payload.name, todos: result });
  }

  private getById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { params: { id }, payload: { id: userId } } = req;
    const result = await this.service.getById(id, userId);
    if (result.message) {
      return next({ status: 404, message: result.message });
    }
    return res.status(200).json(result);
  }

  private update = async (
    req: Request,
    res: Response,
    _next: NextFunction,
  ) => {
    const {
      params: { id },
      body: { order, todo, priority, isDone, userId },
    } = req;
    const result = await this.service.update(
      id,
      { order, todo, priority, isDone, userId },
    );
    return res.status(200).json(result);
  }

  private delete = async (
    req: Request,
    res: Response,
    _next: NextFunction,
  ) => {
    const { params: { id }, payload: { id: userId } } = req;
    const result = await this.service.delete(id, userId);
    return res.status(200).json(result);
  }

};

export default TodosController;
