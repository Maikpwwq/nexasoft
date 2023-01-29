"use strict";

import { MongoClient, ServerApiVersion } from "mongodb";

// Variables de entorno
const DB_USER = import.meta.env.VITE_DB_USER;

const MONGO_HOST = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}?retryWrites=true&w=majority`;

export const mongoClient = new MongoClient(MONGO_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const clientPromise = mongoClient.connect();


const connectDB = async () => {
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
};

export default connectDB;
