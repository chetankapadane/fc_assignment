import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const { DB_HOST, DB_PORT, DB_NAME } = process.env;

class MongoClient {
  constructor() {
    this._isConnected = false;
  }

  async connect() {
    const url = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
    try {
      await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true });
      this._isConnected = true;
      console.log(`connected to database context : - ${url}`);
    } catch (err) {
      console.log(`error connecting database ${err}`);
    }
  }

  get isConnected() {
    return this._isConnected;
  }

  set isConnected(status) {
    this._isConnected = status;
  }

}

export default MongoClient;