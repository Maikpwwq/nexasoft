/* eslint-disable @typescript-eslint/no-var-requires */
import mongoose from "mongoose"; // ,

export { Contactos };

// Variables de entorno
const DB_USER = `${process.env.VITE_DB_USER}`;
// const DB_PASSWORD = `${process.env.VITE_DB_PASSWORD}`;
const DB_PASSWORD2 = `${process.env.VITE_DB_PASSWORD2}`;
const DB_NAME = `${process.env.VITE_DB_NAME}`;
const MONGODB_COLLECTION = `${process.env.VITE_MONGODB_COLLECTION}`;
// const DB_HOST = `${process.env.VITE_DB_HOST}`;
// const MONGO_HOST = `mongodb+srv://${DB_USER}:${DB_PASSWORD2}@${DB_HOST}/?retryWrites=true&w=majority`;
const MONGO_HOST = `${process.env.VITE_MONGO_HOST}`;
// console.log("MONGO_HOST:", MONGO_HOST);

const schema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  issue: String,
  message: String,
});

const options = {
  dbName: DB_NAME,
  user: DB_USER,
  pass: DB_PASSWORD2,
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
};

const clientPromise = mongoose.createConnection(MONGO_HOST, options);

const Contactos = clientPromise.model(MONGODB_COLLECTION, schema);
