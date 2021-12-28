import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import errorMiddleware from "../middlewares/errorMiddleware";
import { IControllers } from "../controllers";

class App {
  public app: express.Application;
  private port: number;
  private controllers: IControllers;

  constructor(port: number, controllers: IControllers) {
    this.app = express();
    this.port = port;
    this.controllers = controllers;
    this.initializeMiddlewares();
    this.callRoutes();
    this.handleErrors();
  }

  private initializeMiddlewares(): void {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private callRoutes(): void {
    this.app.use('/todos', this.controllers.todos.router);
  }

  private handleErrors(): void {
    this.app.use(errorMiddleware);
  }

  public startServer(): void {
    this.app.listen(this.port, () => {
      console.log(`🔥 API online on port: ${this.port} 🔥`);
    });
  }
}

export default App;
