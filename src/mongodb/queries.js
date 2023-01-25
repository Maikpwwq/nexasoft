"use strict";

import connectDB, { client } from "./db"; //
// import { ObjectID } from "mongodb";

const DB_NAME = import.meta.env.VITE_DB_NAME;

export const getContacts = async () => {
  let db = null;
  let contacts = [];
  try {
    await connectDB().then((res) => {
      console.log("res", res);
      db = client.db(DB_NAME);
      console.log("[db] Conectada con éxito", db);
      // return connection;
      // db = await connectDB();
      // console.log("db", client.db, db);
      //
      // if (db == !undefined) {
      contacts = db.collection("DataPersonas").find({}); // await PersonasDb
      // Store the results in an array
      const results = contacts.toArray();
      console.log("contacts", results);
      return results;
    });
    
    // }
  } catch (err) {
    console.log("[db] Error getting collection DataPersonas", err);
  }
};
