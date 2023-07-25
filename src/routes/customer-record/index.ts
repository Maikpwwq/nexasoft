/* eslint-disable @typescript-eslint/no-var-requires */
// import { routeLoader$ } from "@builder.io/qwik-city";
import { type RequestHandler } from "@builder.io/qwik-city";
// import { component$ } from "@builder.io/qwik";
import { connectionDB } from "~/services/mongo-init";

interface RegistroContacto {
  name: String;
  email: String;
  phone: String;
  issue: String;
  message: String;
}

// Called when this HTTP method is POST
// onRequest, onGet, onPost, onPut, onDelete, onPatch, onHead
// export const useFormDetails = routeLoader$(async (requestEvent) => {
// export const onRequest: RequestHandler = async (requestEvent) => {  // To use in jsx file with component$ as page + Endpoint
export const onPost: RequestHandler = async (requestEvent) => { // Endpoint post /customer-record/
  // console.log("requestEvent", requestEvent);
  const { parseBody, text  } = requestEvent; // , json , method, url, redirect

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
      console.log("Parsed body:", contactData);
      const res = await connectionDB(contactData);
      // res.then((data) =>{
      if (res) {
        console.log("Promise message", res);
        const user = JSON.stringify(res);
        console.log("mongoRes", user);
        text(303, user);
        // return user
      }
      // })
      // const redirectUrl = `${url.origin}`;
      // console.log("redirectUrl", redirectUrl);
      // redirect(303, redirectUrl);
      // throw redirect(
      //   308, // 303
      //   new URL("/", url).toString()
      // );
    }
  } catch (err: any) {
    console.error("[Error when trying to create new customer record]", err);
    // return '{}'
    // if (err === "MongoNotConnectedError: Client must be connected before running operations")
    // MongoServerSelectionError: connection <monitor> to 18.210.148.249:27017 closed
    // throw error(500, 'ERROR: Demonstration of an error response.');
    // json(500, {
    //   error: "Error al intentar crear nuevo registro de contacto",
    // });
  }
};

// export default component$(() => {
//   const signal = useFormDetails();  // Readonly<Signal<MessageForm>>
//   const messageStr : string = signal.value ? signal.value : '{}'
//   const messageObj = JSON.parse(messageStr);
//   return (
//     <div>
//       <h1>Se registro su mensaje</h1>
//       <p>
//         {signal.value}
//         {messageObj}
//         {/* {signal.value?.user}
//         {signal.value?.email}
//         {signal.value?.issue}
//         {signal.value?.message} */}
//       </p>
//     </div>
//   );
// });

// const response = new Response(res, {
//   status: 200,
//   headers: {
//     // "Content-Type": "application/json",
//     "Location": `${url.origin}/`
//   },
// });
// requestEvent.headers.set('Location', `${url.origin}`);
// json(200, res);
