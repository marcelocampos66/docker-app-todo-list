import models from '../models';
import Helpers from "../helpers/Helpers";
import { IModels } from "../models";
import { ObjectId } from 'mongodb';

export class UsersService {
  private models: IModels;
  private helpers: Helpers;

  constructor(helpers: Helpers, models: IModels) {
    this.models = models;
    this.helpers = helpers;
  }

  public async register(user: IUser) {
    const formatedUser: IUser = {
      ...user,
      password: this.helpers.hashPassword(user.password),
      birthDate: this.helpers.formatBirthDate(user.birthDate),
    };
    const userId: ObjectId = await this.models.users.register(formatedUser);
    return this.models.users.getById(userId.toString());
  }

  public async getAll() {
    return this.models.users.getAll();
  }

  public async getById(id: string) {
    return this.models.users.getById(id);
  }

  public async update(id: string, newDate: IUser) {
    await this.models.users.update(id, newDate);
    return this.models.users.getById(id);
  }

  public async delete(id: string) {
    await this.models.users.delete(id);
    return { message: 'User deleted successfully' };
  }

  public async login(email: string, password: string) {
    const hashedPassword = this.helpers.hashPassword(password);
    const user = await this.models.users.login(
      email,
      hashedPassword,
    );
    if (!user) return;
    const userData = user as IRegisteredUser;
    const formatedData = this.helpers.getUserNecessaryData(userData);
    return ({
      token: this.helpers.generateToken(formatedData),
    });
  }

}

export default new UsersService(new Helpers(), models);
