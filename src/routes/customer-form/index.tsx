import { component$, $, useTask$ } from "@builder.io/qwik"; // , useSignal
import type { QRL } from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik/build";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";
// import { connectionDB } from "~/services/mongo-init";
import clsx from "clsx";
import {
  // server$,
  // routeAction$,
  // type DocumentHead,
  // useNavigate,
  routeLoader$,
  z,
} from "@builder.io/qwik-city";
import type { InitialValues, SubmitHandler } from "@modular-forms/qwik"; //
import {
  // email,
  // minLength,
  // required,
  useForm,
  formAction$,
  zodForm$,
  reset,
  setResponse,
  // valiForm$,
} from "@modular-forms/qwik";
import styles from "~/components/modular-forms/modularForm.module.css";
import { MUITypography, MUIPaper } from "~/integrations/react/mui";
import { TextInput } from "~/components/modular-forms/TextInput";

// $(async () => {});

import mongoose from "mongoose";
const DB_USER = `${import.meta.env.VITE_DB_USER}`;
const DB_PASSWORD2 = `${import.meta.env.VITE_DB_PASSWORD2}`;
const DB_NAME = `${import.meta.env.VITE_DB_NAME}`;
const MONGODB_COLLECTION = `${import.meta.env.VITE_MONGODB_COLLECTION}`;
const MONGO_HOST = `${import.meta.env.VITE_MONGO_HOST}`;

const SUPABASE_URL = `${import.meta.env.VITE_SUPABASE_URL}`; // "/signed" ;
const SUPABASE_KEY = `${import.meta.env.VITE_SUPABASE_KEY}`;

const messageSchema = new mongoose.Schema({
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
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
};

// export const dbPromise = $(async () => {
//   await mongoose.connect(MONGO_HOST, options).catch(error => handleError(error));
// });

export const connectionDB = $(async (contactData: LoginForm) => {
  console.log("connectionDB", contactData, MONGO_HOST, MONGODB_COLLECTION);
  try {
    // connection is hanging use to see if you haven't opened a connection properly
    // mongoose.set('bufferCommands', false);
    // await userModel.createCollection();
    await mongoose.connect(MONGO_HOST, options);
    // .catch((error) => {
    //   console.log("mongoose connection error", error);
    // });
    // console.log('mongoose.connection', mongoose.connection.mongo.DB)
    const userModel = mongoose.model(MONGODB_COLLECTION, messageSchema);

    return await userModel
      .create(contactData)
      .then((data) => {
        const _id = data._id.toString();
        // const responseObject = data.toJSON();
        // const _id = responseObject._id;
        // if (typeof _id === "string") {
        // const customerId = JSON.stringify(_id);
        console.log("create userModel", _id, typeof _id);
        return _id;
        // }
      })
      .catch((err) => {
        console.error("err", err);
        // return `${err}`;
        throw new Error("Error mientras se retorno _id de registro.");
      });
  } catch (error) {
    // return `${error}`;
    console.error("error", error);
    throw new Error("Error mientras se accedio a crear un nuevo registro.");
  }
});

type LoginForm = {
  name: string;
  email: string;
  phone: string;
  issue: string;
  message: string;
};

const loginSchema = z.object({
  name: z.string().min(1, "Por favor introduzca su nombre."),
  email: z
    .string()
    .min(1, "Por favor introduzca su email.")
    .email("La dirección de correo electrónico está mal formateada."),
  phone: z
    .string()
    .min(1, "Por favor introduzca su teléfono.")
    .min(10, "Tu teléfono debe tener 10 caracteres o más."),
  issue: z.string().min(1, "Por favor introduzca su asunto."),
  message: z
    .string()
    .min(1, "Por favor introduzca su mensaje.")
    .min(8, "Tu mensaje debe tener 8 caracteres o más."),
});

// Also posible infer typos
// type LoginForm = z.infer<typeof loginSchema>;

// can only be declared in `layout.tsx`, `index.tsx` and `plugin.tsx` inside the src/routes directory
export const useFormLoader = routeLoader$<InitialValues<LoginForm>>(() => ({
  name: "",
  email: "",
  phone: "",
  issue: "",
  message: "",
}));

type ResponseData = {
  customerId: string | bigint; //   number
};

export const useFormAction = formAction$<LoginForm, ResponseData>(
  async (values) => {
    // Runs on SERVER
    console.log("useFormAction", values);
    try {
      // Mongo Atlas Example
      // const resume : string  = await connectionDB(values);
      // await mongoose.connect(MONGO_HOST, options).catch((error) => {
      //   console.log("mongoose connection error", error);
      //   throw new Error("Error mientras se accedio a crear un nuevo registro.");
      // });
      // console.log("mongoose.connection", mongoose.connection.mongo.DB);
      // const userModel = mongoose.model(MONGODB_COLLECTION, messageSchema);
      // const res =
      // await userModel.create(values);
      // const _id = res._id;
      // const customerId = _id.toString(); // JSON.stringify(_id);
      // console.log("Promise message", res, customerId);
      // console.log("Promise message", typeof resume, resume);
      // if (typeof resume === "string") {
      // const record = JSON.parse(resume);
      //, record
      // setResponse(loginForm, response); // , options
      // }

      // Create a single supabase client for interacting with your database
      const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
      const { name, email, phone, issue, message } = values;
      const recordID: string = uuidv4();
      // const hexNumber: string = '0x' + (recordID.replace(/-/g, ''));
      // const decimalNumber : bigint = BigInt(hexNumber)
      const decimalNumber: number = parseInt(recordID.replace(/-/g, ""));
      console.log(decimalNumber, recordID);
      const { data: customer_form, error } = await supabase
        .from("customer_form")
        .insert([
          {
            id: decimalNumber.toString(),
            created_at: new Date(),
            name,
            email,
            phone,
            issue,
            message,
          },
        ])
        .select("*");

      console.log("supabase contact form", customer_form, error);
      if (customer_form) {
        console.log("Success supabase contact form", customer_form[0].id);
      }

      if (error) {
        console.log("Error supabase contact form", error);
      }

      return {
        status: "success",
        message: `Gracias, su mensaje ha sido recibido. ${decimalNumber}`,
        data: { customerId: decimalNumber.toString() },
      };
    } catch (error) {
      console.error(error);
      return {
        status: "error",
        message: `No se ha podido enviar su mensaje. ${error}`,
        data: { customerId: "" },
      };
    }
  },
  zodForm$(loginSchema),
); // valiForm$(LoginSchema)

// https://modularforms.dev/qwik/guides/handle-submission
export default component$(() => {
  // const nav = useNavigate();

  // , FieldArray
  const [loginForm, { Form, Field }] = useForm<LoginForm, ResponseData>({
    loader: useFormLoader(),
    action: useFormAction(),
    validate: zodForm$(loginSchema),
  });

  const handleSubmit: QRL<SubmitHandler<LoginForm>> = $(
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    async (values: any, event: any) => {
      // Runs on CLIENT
      console.log("handleSubmit", values, event);
      // try {
      //   // const resume = await connectionDB(values);

      //   await mongoose.connect(MONGO_HOST, options).catch((error) => {
      //     console.log("mongoose connection error", error);
      //   });
      //   // console.log('mongoose.connection', mongoose.connection.mongo.DB)
      //   const userModel = mongoose.model(MONGODB_COLLECTION, messageSchema);
      //   const res = await userModel.create(values);
      //   const _id = res._id;
      //   const customerId = JSON.stringify(_id);

      //   if (customerId) {
      //     // const record = JSON.parse(resume);
      //     console.log("Promise message", customerId); //, record
      //     // setResponse(loginForm, response); // , options
      //     return {
      //       status: "success",
      //       message: "Gracias, su mensaje ha sido recibido.",
      //       data: { customerId: "record" },
      //     };
      //   }
      // } catch (error) {
      //   console.log(error);
      //   return {
      //     status: "error",
      //     message: "No se ha podido enviar su mensaje.",
      //     data: { customerId: "" },
      //   };
      // }

      // This does not work in form action above
      try {
        // Create a single supabase client for interacting with your database
        const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
        const { name, email, phone, issue, message } = values;
        // const recordID: string = uuidv4();
        // const hexNumber: string = '0x' + (recordID.replace(/-/g, ''));
        // const decimalNumber : bigint = BigInt(hexNumber)
        // const decimalNumber : number = parseInt(recordID.replace(/-/g, ''))
        // console.log(decimalNumber, recordID)
        const { data: customer_form, error } = await supabase
          .from("customer_form")
          .insert([
            {
              // id: decimalNumber, // Automatic set an id
              created_at: new Date(),
              name,
              email,
              phone,
              issue,
              message,
            },
          ])
          .select("*");

        console.log("supabase contact form", customer_form, error);
        if (customer_form) {
          console.log(
            "Success your supabase contact form ID",
            customer_form[0].id,
          );
          setResponse(loginForm, {
            status: "success",
            message: `Gracias ${name} su mensaje ha sido recibido, nos pondremos en contacto pronto.`,
            data: { customerId: customer_form[0].id },
          });
          console.log(
            "Success form information",
            loginForm.submitted,
            loginForm.submitting,
            loginForm.response.status,
          );
        }

        if (error) {
          console.log("Error supabase contact form", error);
        }
      } catch (error) {
        console.error(error);
        setResponse(loginForm, {
          status: "error",
          message: `No se ha podido enviar su mensaje. ${error}`,
          data: { customerId: "" },
        });
        console.error(
          "Error form information",
          loginForm.submitted,
          loginForm.submitting,
          loginForm.response.status,
        );
      }
    },
  );

  const successData = $(async () => {
    console.log(
      "handleSubmitSuccess",
      loginForm.submitted,
      loginForm.submitting, // display a loading animation and disable the submit button.
      loginForm.response,
    );
    alert(loginForm.response.message);
    reset(loginForm); // , useFormLoader
    // clearResponse(loginForm);
    // const value = getValue(form, name, options);
    // await nav("/");
  });

  const errorData = $(async () => {
    console.log(
      "handleSubmitError",
      loginForm.submitted,
      loginForm.submitting, // display a loading animation and disable the submit button.
      loginForm.response,
    );
    alert(loginForm.response.message);
  });

  useTask$(({ track }) => {
    // console.log("form information here", loginForm.submitted,  loginForm.submitting, loginForm.response.status )
    track(() => loginForm.response.status);
    if (isServer) {
      return; // Server guard
    }
    if (
      loginForm.submitted &&
      loginForm.submitting === false &&
      loginForm.response.status === "success"
    ) {
      successData();
    } else if (
      loginForm.submitted &&
      loginForm.submitting === false &&
      loginForm.response.status === "error"
    ) {
      errorData();
    }
  });

  return (
    <div
      class="container container-center flex justify-center"
      // style={{
      //   paddingLeft: {sm: "0 !important" },
      //   paddingRight: {sm: "0 !important" },
      // }}
    >
      <MUIPaper className={styles.cardContactForm} elevation={16}>
        <div class={styles.sheetFormStyle}>
          <MUITypography
            variant="h4"
            color={"var(--qwik-dark-blue)"}
            align="center"
          >
            Formulario de contacto
          </MUITypography>
          <MUITypography
            variant="body1"
            className="py-6 w-80 mx-auto text-lg"
            align="center"
          >
            Solicita información adicional o una presentación de nuestros
            servicios.
          </MUITypography>
          <Form
            data-netlify={true}
            name="customer-form"
            // data-netlify-recaptcha="true"
            // netlify-honeypot="bot-field"
            // action={action}
            class={styles.formFlex}
            onSubmit$={handleSubmit}
            // preventdefault:submit
            // reloadDocument={true}
            netlify
          >
            {/* class={styles.labelStyle} */}
            <Field
              // id="form-name"
              name="name"
              // class={styles.inputStyle}
            >
              {(field, props) => (
                <TextInput
                  {...props}
                  value={field.value}
                  error={field.error}
                  type="text"
                  label="Nombre:"
                  placeholder="Nombre"
                  required
                />
              )}
            </Field>
            <Field
              // id="form-email"
              name="email"
              // class={styles.inputStyle}
            >
              {(field, props) => (
                <TextInput
                  {...props}
                  value={field.value}
                  error={field.error}
                  type="email"
                  label="Email:"
                  placeholder="Correo electrónico"
                  required
                />
              )}
            </Field>
            <Field
              // id="form-phone"
              name="phone"
              // class={styles.inputStyle}
            >
              {(field, props) => (
                <TextInput
                  {...props}
                  value={field.value}
                  error={field.error}
                  type="tel"
                  label="Teléfono:"
                  placeholder="+57"
                  required
                />
              )}
            </Field>
            <Field
              // id="form-issue"
              name="issue"
              // class={styles.inputStyle}
            >
              {(field, props) => (
                <TextInput
                  {...props}
                  value={field.value}
                  error={field.error}
                  type="text"
                  label="Asunto:"
                  placeholder="Asunto"
                  required
                />
              )}
            </Field>
            <Field
              // id="form-message"
              name="message"
              // class={styles.inputStyle}
            >
              {(field, props) => (
                <TextInput
                  {...props}
                  value={field.value}
                  error={field.error}
                  type="text"
                  label="Mensaje:"
                  placeholder="Mensaje"
                  required
                />
              )}
            </Field>
            {/* <div data-netlify-recaptcha="true"></div> */}
            <br class="mb-4" />
            <button
              type="submit"
              // preventdefault:click
              class={clsx("m-auto mt-6", styles.btnStyle)}
            >
              Enviar
            </button>

            {/* {
            // loginForm.submitted && loginForm.submitting === false &&
              loginForm.response.status === "success" &&
              successData()} */}
          </Form>
        </div>
      </MUIPaper>
    </div>
  );
});
