import UsersController from "./UsersController";
import UsersService from "../services/UsersService";
import models from '../models';
import Helpers from '../helpers/Helpers';

export interface IControllers {
  users: UsersController;
}

export default {
  users: new UsersController(UsersService, models, new Helpers()),
}
