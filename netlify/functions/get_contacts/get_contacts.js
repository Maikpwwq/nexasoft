/* eslint-disable @typescript-eslint/no-var-requires */
// import type { Handler } from "@netlify/functions"; // , HandlerEvent, HandlerContext
import { MongoClient, ServerApiVersion } from "mongodb"; // ,
import * as dotenv from "dotenv";
// const { Handler } = require("@netlify/functions");
//const { MongoClient } = require("mongodb");
// require("dotenv").config();

dotenv.config();

// Variables de entorno
const DB_USER = process.env.VITE_DB_USER;
const DB_PASSWORD = process.env.VITE_DB_PASSWORD;
const DB_HOST = process.env.VITE_DB_HOST;
const DB_NAME = process.env.VITE_DB_NAME;
// const MONGODB_COLLECTION = process.env.VITE_MONGODB_COLLECTION
//   ? process.env.VITE_MONGODB_COLLECTION
//   : "";
const MONGODB_COLLECTION = `${process.env.VITE_MONGODB_COLLECTION}`;

const MONGO_HOST = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}?retryWrites=true&w=majority`;

console.log("MONGO_HOST", MONGO_HOST); // Funciona

// exports.mongoClient = new MongoClient(MONGO_HOST);
const mongoClient = new MongoClient(MONGO_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const clientPromise = mongoClient.connect();

// let connection = null;

// export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
const handler = async () => {
  // exports.handler = async () => {
  // const { name = 'stranger' } = event.queryStringParameters
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     message: `Hello, ${name}!`,
  //   }),
  // }
  //   if (connection) return connection;
  console.log("hi");
  try {
    //await
    //mongoClient.connect( async (err) => {
    const database = (await clientPromise)
      .db(DB_NAME)
    const collection = database.collection(MONGODB_COLLECTION);
    console.log("[db] Conectada con éxito", collection, MONGODB_COLLECTION);
    const results = await collection.find({}).toArray();
    console.log("mongoClient", results);
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
    //});
    // const database = (await clientPromise).db(DB_NAME);
    // console.log("[db] Conectada con éxito", database);
    // const collection = database.collection(MONGODB_COLLECTION);
    // const results = await collection.find({}).toArray();
    // return {
    //   statusCode: 200,
    //   body: JSON.stringify(results),
    // };
  } catch (err) {
    console.error("[db] Error", MONGO_HOST, err);
    return { statusCode: 500, body: err.toString() }; // new Response ()
  }
  //   finally {
  //     // Ensures that the client will close when you finish/error
  //     await mongoClient.close();
  //   }
};

export { mongoClient, handler };
// handler().catch(console.dir);
