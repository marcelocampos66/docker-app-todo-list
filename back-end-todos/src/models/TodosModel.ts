import { ObjectId } from "mongodb";
import Connection from "./Connection";

class TodosModel extends Connection {
  constructor() {
    super();
  }

  public async register(newTodo: INewTodo) {
    return this.connection()
      .then((db) => db.collection(this.MONGO_DB).insertOne(newTodo))
      .then(({ insertedId }) => insertedId);
  }

  public async getAll(userId: string) {
    return this.connection()
      .then((db) => db.collection(this.MONGO_DB)
      .find({ userId }).toArray());
  }

  public async getById(id: string, userId: string) {
    return this.connection()
      .then((db) => db.collection(this.MONGO_DB)
      .findOne({ _id: new ObjectId(id), userId }));
  }

  public async update(id: string, newInfos: IUpdateTodo) {
    return this.connection()
      .then((db) => db.collection(this.MONGO_DB)
      .updateOne(
        { _id: new ObjectId(id) }, { $set: newInfos }
      ));
  }

  public async delete(id: string, userId: string) {
    return this.connection()
      .then((db) => db.collection(this.MONGO_DB)
      .deleteOne({ _id: new ObjectId(id), userId }));
  }

}

export default TodosModel;
