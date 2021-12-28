import 'dotenv/config';
import { Db, MongoClient } from 'mongodb';

const { MONGO_DB_URL, MONGO_DB } = process.env;

export default class Connection {
  public mongoDbUrl: string;

  constructor() {
    this.mongoDbUrl = MONGO_DB_URL || 'mongodb://127.0.0.1:27017';
  }

  public connection(): Promise<Db> {
    return MongoClient.connect(this.mongoDbUrl)
      .then((conn) => conn.db(MONGO_DB))
      .catch((err) => {
        console.error(err);
        process.exit();
      });
  }
};
