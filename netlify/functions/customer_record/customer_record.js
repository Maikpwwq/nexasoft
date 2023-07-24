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

const clientPromise = mongoose.createConnection(MONGO_HOST, {
  dbName: DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Contactos = clientPromise.model(MONGODB_COLLECTION, schema);

export const handler = async (event) => {
  const { body } = event;

  // Input data validation
  if (!body || typeof body !== "string") {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid request body" }),
    };
  }

  const parsedBody = JSON.parse(body);

  const contactData = {
    name: parsedBody.name,
    email: parsedBody.email,
    phone: parsedBody.phone,
    issue: parsedBody.issue,
    message: parsedBody.message,
  };

  try {
    // console.log("Parsed body:", parsedBody, typeof parsedBody);
    const res = await Contactos.create(contactData);
    // console.log("mongoRes", res);
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
    // }); // .toArray(); .exec() .clone()
  } catch (err) {
    console.error("[mongodb create new customer record]", MONGO_HOST, err);
    return { statusCode: 500, body: err.toString() };
  }
  // finally {
  //   // Ensures that the client will close when you finish/error
  //   await clientPromise.close();
  // }
};
