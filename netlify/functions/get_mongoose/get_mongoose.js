/* eslint-disable @typescript-eslint/no-var-requires */
// import type { Handler } from "@netlify/functions"; // , HandlerEvent, HandlerContext
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
    // useCreateIndex: true, No suported
    useUnifiedTopology: true,
  },
  function (err) {
    if (err) {
      console.log("Connection error", err);
    }
  },
);

const Contactos = clientPromise.model(MONGODB_COLLECTION, schema);

export const handler = async () => {
  // exports.handler = async () => {
  console.log("get_mongoose");
  try {
    await Contactos.find()
      // .exec()
      // Await its fulfillment inside another async function, or chain onto it using .then blocks.
      .then((docs) => {
        console.log("mongoDocs", docs);
        if (docs.length > 0) {
          return {
            statusCode: 200,
            body: JSON.stringify(docs) || docs,
          };
        }
      }); // .toArray(); .exec() .clone()
    // You don't need callbacks in Mongoose, because Mongoose supports promises and async/await.
    // , function (err, docs) { if (err) console.log("Error getting the data", err);
  } catch (err) {
    console.error("[db] Error", MONGO_HOST, err);
    return { statusCode: 500, body: err.toString() };
  }
};

// export { clientPromise, handler };
