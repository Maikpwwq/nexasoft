"use strict";

import connectDB, { client } from "./db"; //
// import { ObjectID } from "mongodb";

const DB_NAME = import.meta.env.VITE_DB_NAME;
const db = client.db(DB_NAME);
const collection = db.collection("DataPersonas")

export const getContacts = async () => {
  let contacts = [];
  try {
    await connectDB().catch(console.dir);
    //   .then((cliente) => {
    //     console.log("client", cliente);
    console.log("[db] Conectada con éxito", db);
    // return connection;
    // db = await connectDB();
    // console.log("db", client.db, db);
    //
    // if (db == !undefined) {
     // await PersonasDb find({});
    // Store the results in an array
    contacts = collection.find().toArray();
    console.log("contacts", contacts);
    return contacts;
    //   })
    // }
  } catch (err) {
    console.log("[db] Error getting collection DataPersonas", err);
  }
};
