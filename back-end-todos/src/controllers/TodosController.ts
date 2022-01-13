import express, { Request, Response, NextFunction } from 'express';
import { TodosService } from '../services/TodosService';

class TodosController {
  public router: express.Router;
  private service: TodosService;

  constructor(service: TodosService) {
    this.router = express.Router();
    this.service = service;
    this.initializeRouters();
  }

  private initializeRouters(): void {
    this.router.post('/', [
      this.register,
    ]);
    this.router.get('/', [
      this.getAll,
    ]);
    this.router.get('/:id', [
      this.getById,
    ]);
    this.router.put('/:id', [
      this.update,
    ]);
    this.router.delete('/:id', [
      this.delete,
    ]);
  }

  private register = async (
    req: Request,
    res: Response,
    _next: NextFunction,
  ) => {
    const { body: { order, todo, priority, isDone } } = req;
    const result = await this.service.register({ order, todo, priority, isDone });
    return res.status(201).json(result);
  }

  private getAll = async (
    _req: Request,
    res: Response,
    _next: NextFunction,
  ) => {
    const result = await this.service.getAll();
    return res.status(200).json(result);
  }

  private getById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { params: { id } } = req;
    const result = await this.service.getById(id);
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
      body: { order, todo, priority, isDone },
    } = req;
    const result = await this.service.update(
      id,
      { order, todo, priority, isDone },
    );
    return res.status(200).json(result);
  }

  private delete = async (
    req: Request,
    res: Response,
    _next: NextFunction,
  ) => {
    const { params: { id } } = req;
    const result = await this.service.delete(id);
    return res.status(200).json(result);
  }

};

export default TodosController;
