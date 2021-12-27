import { InsertOneResult, ObjectId } from "mongodb";
import Connection from "./Connection";

class TodosModel extends Connection {
  constructor() {
    super();
  }

  public async register(newTodo: INewTodo):
    Promise<InsertOneResult<Document> | ObjectId> {
    return this.connection()
      .then((db) => db.collection('todos').insertOne(newTodo))
      .then(({ insertedId }) => insertedId);
  }

}

export default TodosModel;
