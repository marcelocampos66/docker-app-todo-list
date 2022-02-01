import 'dotenv/config';
import { Request, Response, NextFunction } from 'express';
import { ObjectId } from 'mongodb';
import Helpers from '../helpers/Helpers';
import { IModels } from '../models';

class Middlewares {
  protected models: IModels;
  protected helpers: Helpers;

  constructor(models: IModels, helpers: Helpers) {
    this.models = models;
    this.helpers = helpers;
  }

  public validateUserInfos = async (
    req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    const { body: { name, email, password, birthDate } } = req;
    const userData = { name, email, password, birthDate };
    const isValid = this.helpers.verifyUserInfos(userData);
    if (!isValid) {
      return next({ status: 422, message: 'invalid data' });
    }
    return next();
  }

  public validateLoginCredentials = async (
    req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    const { body: { email, password } } = req;
    const userCredentials = { email, password };
    const isValid = this.helpers.verifyLoginCredentials(userCredentials);
    if (!isValid) {
      return next({ status: 422, message: 'invalid data' });
    }
    return next();
  }

  public verifyUserId = async (
    req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    const { params: { id } } = req;
    if (!ObjectId.isValid(id)) {
      return next({
        status: 400,
        message: 'Invalid Id',
      });
    }
    const userExists = await this.models.users.getById(id);
    if (!userExists) {
      return next({
        status: 404,
        message: 'Dont exists a user with the specified id',
      });
    }
    return next();
  }

  public verifyUserExists = async (
    req: Request,
    _res: Response,
    next: NextFunction,
  ) => {
    const { body: { email } } = req;
    const userExists = await this.models.users.getByEmail(email);
    if (userExists) {
      return next({ status: 409, message: 'User already exists' });
    }
    return next();
  }

}

export default Middlewares;
