import { ObjectId, WithId } from "mongodb";
import Connection from "./Connection";

class UsersModel extends Connection {
  constructor() {
    super();
  }

  public async register(user: IUser) {
    return this.connection()
      .then((db) => db.collection(this.DB_NAME).insertOne(user))
      .then(({ insertedId }) => insertedId)
  }

  public async getAll() {
    return this.connection()
      .then((db) => db.collection(this.DB_NAME).find().toArray());
  }

  public async getById(id: string) {
    return this.connection()
      .then((db) => db.collection(this.DB_NAME)
      .findOne({ _id: new ObjectId(id) }));
  }

  public async update(id: string, newInfos: IUser) {
    return this.connection()
      .then((db) => db.collection(this.DB_NAME)
      .updateOne({ _id: new ObjectId(id) }, { $set: newInfos }));
  }

  public async delete(id: string) {
    return this.connection()
      .then((db) => db.collection(this.DB_NAME)
      .deleteOne({ _id: new ObjectId(id) }))
  }

  public async getByEmail(email: string) {
    return this.connection()
      .then((db) => db.collection(this.DB_NAME).findOne({ email }));
  }

  public async login(email: string, password: string) {
    return this.connection()
      .then((db) => db.collection(this.DB_NAME)
      .findOne({ email, password }));
  }

}

export default UsersModel;
