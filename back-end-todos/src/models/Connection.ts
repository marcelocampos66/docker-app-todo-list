import 'dotenv/config';
import { Db, MongoClient } from 'mongodb';

const { MONGO_DB_URL, MONGO_DB } = process.env;

export default class Connection {
  protected MONGO_DB: string;
  protected MONGO_DB_URL: string;

  constructor() {
    this.MONGO_DB = MONGO_DB || 'todos';
    this.MONGO_DB_URL = MONGO_DB_URL || 'mongodb://127.0.0.1:27017';
  }

  public connection(): Promise<Db> {
    return MongoClient.connect(this.MONGO_DB_URL)
      .then((conn) => conn.db(this.MONGO_DB))
      .catch((err) => {
        console.error(err);
        process.exit();
      });
  }
};
