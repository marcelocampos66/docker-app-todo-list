import Helpers from "../helpers/Helpers";
import { ObjectId } from 'mongodb';
import { IUsersModelParams } from "../factories";
import UsersModel from "../models/UsersModel";

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
    return ({
      token: this.helpers.generateToken(formatedData),
    });
  }

}

export default UsersService;
