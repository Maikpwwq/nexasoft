"use strict";

import { MongoClient, ServerApiVersion } from "mongodb";

// Variables de entorno
const DB_USER = import.meta.env.VITE_DB_USER;
const DB_PASSWORD = import.meta.env.VITE_DB_PASSWORD;
const DB_HOST = import.meta.env.VITE_DB_HOST;
const DB_NAME = import.meta.env.VITE_DB_NAME;
const MONGODB_COLLECTION = import.meta.env.VITE_MONGODB_COLLECTION;

const MONGO_HOST = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}?retryWrites=true&w=majority`;

console.log("MONGO_HOST", MONGO_HOST); // Funciona

export const mongoClient = new MongoClient(MONGO_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const clientPromise = mongoClient.connect();

// let connection = null;

const connectDB = async () => {
  //   if (connection) return connection;

  try {
    const database = (await clientPromise).db(DB_NAME);
    console.log("[db] Conectada con éxito", database);
    const collection = database.collection(MONGODB_COLLECTION);
    const results = await collection.find({}).toArray();
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
  } catch (err) {
    console.error("[db] Error", MONGO_HOST, err);
    return { statusCode: 500, body: err.toString() };
  }
  //   finally {
  //     // Ensures that the client will close when you finish/error
  //     await mongoClient.close();
  //   }
};

export default connectDB;


