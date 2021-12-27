import express, { Request, Response, NextFunction } from 'express';

class TodosController {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.initializeRouters();
  }

  private initializeRouters(): void {
    this.router.post('/', [
      this.registerTodo,
    ]);
  }

  private registerTodo = async (
    req: Request,
    res: Response,
    _next: NextFunction,
  ) => {
    return res.status(200).json({ message: 'Pong!' });
  }

};

export default TodosController;
