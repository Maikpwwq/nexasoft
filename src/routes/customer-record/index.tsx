/* eslint-disable @typescript-eslint/no-var-requires */
import mongoose from "mongoose"; // ,
import * as dotenv from "dotenv";
import { type RequestHandler } from "@builder.io/qwik-city";

// import { component$ } from "@builder.io/qwik";
// import { sharingInformationService } from "~/services/sharing-information";
dotenv.config();

// Variables de entorno
const DB_USER = `${process.env.VITE_DB_USER}`;
// const DB_PASSWORD = `${process.env.VITE_DB_PASSWORD}`;
const DB_PASSWORD2 = `${process.env.VITE_DB_PASSWORD2}`;
const DB_NAME = `${process.env.VITE_DB_NAME}`;
const MONGODB_COLLECTION = `${process.env.VITE_MONGODB_COLLECTION}`;
// const DB_HOST = `${process.env.VITE_DB_HOST}`;
// const MONGO_HOST = `mongodb+srv://${DB_USER}:${DB_PASSWORD2}@${DB_HOST}/?retryWrites=true&w=majority`; 
const MONGO_HOST = `${process.env.VITE_MONGO_HOST}`;
// console.log("MONGO_HOST:", MONGO_HOST);

interface RegistroContacto {
  name: String;
  email: String;
  phone: String;
  issue: String;
  message: String;
}

const schema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  issue: String,
  message: String,
});

const options = {
  dbName: DB_NAME,
  user: DB_USER,
  pass: DB_PASSWORD2,
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
};

const clientPromise = mongoose.createConnection(MONGO_HOST, options);

const Contactos = clientPromise.model(MONGODB_COLLECTION, schema);


// Called when this HTTP method is POST 
// onRequest, onGet, onPost, onPut, onDelete, onPatch, onHead
export const onPost: RequestHandler = async (requestEvent) => {
  // console.log("requestEvent", requestEvent);
  const { parseBody, json, text } = requestEvent; // method, url, redirect
    
  try {
    const body = await parseBody();
    // console.log("bodyParsed", body);
    const bodyParsed = body as RegistroContacto;
    // console.log("bodyParsed", bodyParsed);
    // Check if bodyParsed is defined and has the expected properties
    // if (!bodyParsed && typeof bodyParsed !== "object") {
    //   json(200, { error: "Invalid request body" });
    // }
    if (bodyParsed && typeof bodyParsed === "object") {
      const contactData = {
        name: bodyParsed?.name,
        email: bodyParsed?.email,
        phone: bodyParsed?.phone,
        issue: bodyParsed?.issue,
        message: bodyParsed?.message,
      };
      // console.log("Parsed body:", parsedBody, typeof parsedBody);
      const res: any = await Contactos.create(contactData);
      const user = JSON.stringify(res);
      // console.log("mongoRes", res._id, user);
      // sharingInformationService.setSubject({ user });
      // const response = new Response(res, {
      //   status: 200,
      //   headers: {
      //     // "Content-Type": "application/json",
      //     "Location": `${url.origin}/`
      //   },
      // });
      // requestEvent.headers.set('Location', `${url.origin}`);
      text(303, user);
      // json(200, res);
      // const redirectUrl = `${url.origin}`;
      // console.log("redirectUrl", redirectUrl);
      // redirect(303, redirectUrl);
    }
  } catch (err: any) {
    console.error(
      "[Error when trying to create new customer record]",
      MONGO_HOST,
      err
    );
    // if (err === "MongoNotConnectedError: Client must be connected before running operations")
    // MongoServerSelectionError: connection <monitor> to 18.210.148.249:27017 closed
    json(500, {
      error: "Error al intentar crear nuevo registro de contacto",
    });
  } 
  // finally {
  //   // Ensures that the client will close when you finish/error
  //   await clientPromise.close();
  // }
};

// export default component$(() => {
//   return (
//     <div>
//       <h1>Alive!</h1>
//     </div>
//   );
// });
