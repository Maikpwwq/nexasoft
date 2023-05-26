/* eslint-disable @typescript-eslint/no-var-requires */
import mongoose from "mongoose"; // ,
import * as dotenv from "dotenv";
dotenv.config();

// Variables de entorno
const DB_USER = `${process.env.VITE_DB_USER}`;
const DB_PASSWORD = `${process.env.VITE_DB_PASSWORD}`;
const DB_HOST = `${process.env.VITE_DB_HOST}`;
const DB_NAME = `${process.env.VITE_DB_NAME}`;
const MONGODB_COLLECTION = `${process.env.VITE_MONGODB_COLLECTION}`;

const MONGO_HOST = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`;

const schema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  issue: String,
  message: String,
});

console.log("MONGOOSE_HOST", MONGO_HOST);
const clientPromise = mongoose.createConnection(
  MONGO_HOST,
  {
    dbName: DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  // , function (err) {
  //   if (err) {
  //     console.log("Connection error", err);
  //   }
  // }
);

const Contactos = clientPromise.model(MONGODB_COLLECTION, schema);

export const handler = async (event) => {
  // console.log("customer_record", event, context);
  const { body } = event;
  console.log("customer_record", body);
  try {
    const res = await Contactos.create(body);
    // .exec()
    // .then((res) => {
    console.log("mongoRes", res);
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
    // }); // .toArray(); .exec() .clone()
  } catch (err) {
    console.error("[db] Error", MONGO_HOST, err);
    return { statusCode: 500, body: err.toString() };
  }
};
