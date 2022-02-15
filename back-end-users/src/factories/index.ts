import 'dotenv/config';
import App from "../api/App";
import UsersController from "../controllers/UsersController";
import UsersService from "../services/UsersService";
import UsersModel from '../models/UsersModel';
import Helpers from '../helpers/Helpers';

const PORT = process.env.PORT || 3002;

export interface IAppParams {
  port: number;
  usersController: UsersController;
}

export interface IUsersControllerParams {
  service: UsersService;
  usersModel: UsersModel;
  helpers: Helpers;
}

export interface IUsersModelParams {
  helpers: Helpers;
  usersModel: UsersModel;
}

const getHelpers = (): Helpers => {
  return new Helpers();
}

const getUsersModel = (): UsersModel => {
  return new UsersModel();
}

const getUsersService = (): UsersService => {
  return new UsersService({
    helpers: getHelpers(),
    usersModel: getUsersModel(),
  });
}

const getUsersController = (): UsersController => {
  return new UsersController({
    service: getUsersService(),
    usersModel: getUsersModel(),
    helpers: getHelpers(),
  });
}

const getApp = (): App => {
  return new App({
    port: Number(PORT),
    usersController: getUsersController(),
  });
}

export default {
  getApp,
};
