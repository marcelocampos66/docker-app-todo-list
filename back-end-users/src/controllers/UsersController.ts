import express, { Request, Response, NextFunction } from 'express';
import Middlewares from '../middlewares/Middlewares';
import { UsersService } from '../services/UsersService';
import { IUsersControllerParams } from '../factories';

class UsersController extends Middlewares {
  public router: express.Router;
  private service: UsersService;
  
  constructor({
    service,
    usersModel,
    helpers,
  }: IUsersControllerParams) {
    super(usersModel, helpers);
    this.router = express.Router();
    this.service = service;
    this.initializeRouters();
  }

  private initializeRouters(): void {
    this.router.post('/', [
      this.validateUserInfos,
      this.verifyUserExists,
      this.register,
    ]);
    this.router.get('/', [
      this.getAll,
    ]);
    this.router.get('/:id', [
      this.verifyUserId,
      this.getById,
    ]);
    this.router.put('/:id', [
      this.verifyUserId,
      this.update,
    ]);
    this.router.delete('/:id', [
      this.verifyUserId,
      this.delete,
    ]);
    this.router.post('/login', [
      this.validateLoginCredentials,
      this.login,
    ]);
  }

  private register = async (
    req: Request,
    res: Response,
    _next: NextFunction,
  ) => {
    const { body: { name, email, password, birthDate } } = req;
    const result = await this.service.register({
      name,
      email,
      password,
      birthDate,
    });
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
    _next: NextFunction,
  ) => {
    const { params: { id } } = req;
    const result = await this.service.getById(id);
    return res.status(200).json(result);
  }

  private update = async (
    req: Request,
    res: Response,
    _next: NextFunction,
  ) => {
    const {
      params: { id },
      body: { name, email, password, birthDate },
    } = req;
    const newData = { name, email, password, birthDate };
    const result = await this.service.update(id, newData);
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

  private login = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { body: { email, password } } = req;
    const result = await this.service.login(email, password);
    if (!result) {
      return next({
        status: 400,
        message: 'Invalid email or password',
      })
    }
    return res.status(200).json(result);
  }

}

export default UsersController;
