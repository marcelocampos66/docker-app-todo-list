import { ObjectId } from "mongodb";
import Connection from "./Connection";

class TodosModel extends Connection {
  constructor() {
    super();
  }

  public async register(newTodo: INewTodo) {
    return this.connection()
      .then((db) => db.collection('todos').insertOne(newTodo))
      .then(({ insertedId }) => insertedId);
  }

  public async getAll() {
    return this.connection()
      .then((db) => db.collection('todos').find().toArray());
  }

  public async getById(id: string) {
    return this.connection()
      .then((db) => db.collection('todos').findOne({ _id: new ObjectId(id) }));
  }

  public async update(id: string, newInfos: IUpdateTodo) {
    return this.connection()
      .then((db) => db.collection('todos')
      .updateOne(
        { _id: new ObjectId(id) }, { $set: newInfos }
      ));
  }

  public async delete(id: string) {
    return this.connection()
      .then((db) => db.collection('todos')
      .deleteOne({ _id: new ObjectId(id) }));
  }

}

export default TodosModel;
