import UsersModel from './UsersModel';

export interface IModels {
  users: UsersModel;
}

export default {
  users: new UsersModel(),
};
