import 'dotenv/config';
import { MongoClient } from 'mongodb';

class Connection {
  private URL: string;
  protected DB_NAME : string;

  constructor() {
    this.URL = process.env.MONGO_DB_URL || 'mongodb://127.0.0.1:27017';
    this.DB_NAME = process.env.MONGO_DB || 'users';
  }

  protected async connection() {
    return MongoClient.connect(this.URL)
      .then((connection) => connection.db(this.DB_NAME))
      .catch((error) => {
        console.error(error);
        process.exit();
      });
  }

}

export default Connection;
