import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import errorMiddleware from '../middlewares/errorMiddleware';
import UsersController from "../controllers/UsersController";
import { IAppParams } from "../factories";

class App {
  private app: express.Application;
  private port: number;
  private usersController: UsersController;

  constructor({
    port,
    usersController,
  }: IAppParams) {
    this.app = express();
    this.port = port;
    this.usersController = usersController;
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
    this.app.use('/users', this.usersController.router);
  }

  private handleErrors(): void {
    this.app.use(errorMiddleware);
  }

  public startServer(): void {
    this.app.listen(this.port, () => {
      console.log(`🔥 Users API online on port: ${this.port} 🔥`);
    });
  }

}

export default App;
