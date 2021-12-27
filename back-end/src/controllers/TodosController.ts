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
  }

  private register = async (
    req: Request,
    res: Response,
    _next: NextFunction,
  ) => {
    const { body: { todo, isDone } } = req;
    const result = await this.service.register({ todo, isDone });
    return res.status(200).json({ id: result.toString() });
  }

};

export default TodosController;
