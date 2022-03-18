import 'dotenv/config';
import Helpers from "../helpers/Helpers";
import { ObjectId } from 'mongodb';
import { IUsersModelParams } from "../factories";
import UsersModel from "../models/UsersModel";
import { createClient } from 'redis';

export class UsersService {
  private usersModel: UsersModel;
  private helpers: Helpers;

  constructor({
    helpers,
    usersModel,
  }: IUsersModelParams) {
    this.usersModel = usersModel;
    this.helpers = helpers;
  }

  public async register(user: IUser) {
    const formatedUser: IUser = {
      ...user,
      password: this.helpers.hashPassword(user.password),
      birthDate: this.helpers.formatBirthDate(user.birthDate),
    };
    const userId: ObjectId = await this.usersModel.register(formatedUser);
    return this.usersModel.getById(userId.toString());
  }

  public async getAll() {
    return this.usersModel.getAll();
  }

  public async getById(id: string) {
    return this.usersModel.getById(id);
  }

  public async update(id: string, newDate: IUser) {
    await this.usersModel.update(id, newDate);
    return this.usersModel.getById(id);
  }

  public async delete(id: string) {
    await this.usersModel.delete(id);
    return { message: 'User deleted successfully' };
  }

  public async login(email: string, password: string) {
    const hashedPassword = this.helpers.hashPassword(password);
    const user = await this.usersModel.login(
      email,
      hashedPassword,
    );
    if (!user) return;
    const userData = user as IRegisteredUser;
    const formatedData = this.helpers.getUserNecessaryData(userData);

    const refreshToken = this.helpers.generateRefreshToken(formatedData);
    const url = process.env.REDIS_URL || 'redis://127.0.0.1:6379';
    const client = createClient({
      url
    });
    await client.connect();
    await client.set(userData._id.toString(), refreshToken, {
      EX: 60 * 60 * 24,
    });

    return ({
      token: this.helpers.generateToken(formatedData),
    });
  }

}

export default UsersService;
