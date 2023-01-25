"use strict";

import { MongoClient } from "mongodb";

// Variables de entorno
const DB_USER = import.meta.env.VITE_DB_USER;
const DB_PASSWORD = import.meta.env.VITE_DB_PASSWORD;
const DB_HOST = import.meta.env.VITE_DB_HOST;
// const DB_NAME = import.meta.env.VITE_DB_NAME;

const MONGO_HOST = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}?retryWrites=true&w=majority`;

// console.log("MONGO_HOST", MONGO_HOST); Funciona

export const client = new MongoClient(MONGO_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let connection = null;

const connectDB = async () => {
  if (connection) return connection;
  //   const mongo = await client.connect(); // genera error
  //   mongo.then((response) => {
  //     console.log(response);
  //   });
  try {
    await client.connect();
    // connection = client.db(DB_NAME);
    // console.log("[db] Conectada con éxito", connection);
    // return connection;
  } catch (err) {
    console.error("[db] Error", MONGO_HOST, err);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};

export default connectDB;
