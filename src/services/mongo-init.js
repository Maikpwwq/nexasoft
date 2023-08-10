/* eslint-disable @typescript-eslint/no-var-requires */
import mongoose from "mongoose"; // ,
import dbPromise from "./clientPromise"
// import * as dotenv from "dotenv";
// dotenv.config();

// Variables de entorno
const MONGODB_COLLECTION = `${import.meta.env.VITE_MONGODB_COLLECTION}`; // `${process.env.VITE_MONGODB_COLLECTION}`;
// const DB_HOST = `${process.env.VITE_DB_HOST}`;
// const MONGO_HOST = `mongodb+srv://${DB_USER}:${DB_PASSWORD2}@${DB_HOST}/?retryWrites=true&w=majority`;
const MONGO_HOST = `${import.meta.env.VITE_MONGO_HOST}`; // `${process.env.VITE_MONGO_HOST}`;
// console.log("MONGO_HOST:", MONGO_HOST);

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  issue: String,
  message: String,
});

// module.exports = connectionDB  // import * as connectionDB from ...
// The alternative to the export model pattern is the export schema pattern.
// module.exports = userSchema;

export const connectionDB = async (contactData) => {
  console.log("connectionDB", contactData, MONGO_HOST, MONGODB_COLLECTION);
  // const dbPromise = mongoose.createConnection(MONGO_HOST, options);
  try {
    const userModel = dbPromise.model(MONGODB_COLLECTION, messageSchema);
    // dbPromise.on("error", console.error.bind(console, "DB connection error: "));
    // (( ) => dbPromise.once("open", function () {
    //   console.log("Connected successfully to your DB");
    // }))();
    // const message = new userModel({contactData});
    // // Insert the message in our MongoDB database
    // await message.save();
    const res = await userModel.create(contactData);
    const _id = res._id;
    const customerId = JSON.stringify(_id);
    console.log("create userModel", customerId);
    // Ensures that the client will close when you finish/error
    // await dbPromise.close();
    return customerId;
  } catch (error) {
    return error;
  }
};
