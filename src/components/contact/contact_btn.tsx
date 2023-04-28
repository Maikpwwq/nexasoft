import {
  component$,
  useStylesScoped$,
  // useSignal,
  useClientEffect$,
  // useResource$,
} from "@builder.io/qwik";
import styles from "./contact.css?inline";

import { MUIButton } from "~/integrations/react/mui";

export const mongo = async () => {
  // use the correct URL to connect serverless functions
  // dev  http://localhost:8888/.netlify/functions/get_contacts/
  // prod  https://nexasoft.netlify.app/.netlify/functions/get_contacts/
  // await fetch("https://nexasoft.netlify.app/.netlify/functions/customer_record", {
  // method: "POST", headers: { "Content-Type": "application/json", }, body: JSON.stringify(data),
  // })
  await fetch("https://nexasoft.netlify.app/.netlify/functions/get_mongoose")
    .then((res) => { 
      console.log("MongoRes", res);
      res.json();
    })
    .then((docs) => {
      console.log("My-docs", docs);
    });
};

export default component$((props: any) => {
  const { store } = props;
  useStylesScoped$(styles);
  // const mongo_data = useSignal(mongo);
  // const response = useResource$(mongo);

  useClientEffect$(() => {
    // console.log("finalData", response.promise, response.loading, response.value, mongo_data); //.value
    console.log("store", store);
  });

  // ValueOrPromise<void>
  // const handleClick = () => {
  //   console.log(store);
  // };

  return <MUIButton>Enviar</MUIButton>; // onClick$={() => handleClick}
});
