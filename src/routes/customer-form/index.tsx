import { component$, $, useTask$ } from "@builder.io/qwik"; // , useSignal
import type { QRL } from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik/build";
import { createClient } from "@supabase/supabase-js";
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
import { TextInput } from "~/components/modular-forms/TextInput";

// $(async () => {});

const SUPABASE_URL = `${import.meta.env.VITE_SUPABASE_URL}`;
const SUPABASE_KEY = `${import.meta.env.VITE_SUPABASE_KEY}`;

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

// Server-side action removed for static deployment
export const useFormAction = formAction$<LoginForm, ResponseData>(
  async () => {
    return {
      status: "success",
      data: { customerId: "" },
    };
  },
  zodForm$(loginSchema),
);

// https://modularforms.dev/qwik/guides/handle-submission
export default component$(() => {
  // const nav = useNavigate();

  // , FieldArray
  // Client-side submission only
  const [loginForm, { Form, Field }] = useForm<LoginForm, ResponseData>({
    loader: useFormLoader(),
    validate: zodForm$(loginSchema),
  });

  const handleSubmit: QRL<SubmitHandler<LoginForm>> = $(

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
      class="w-full flex justify-center min-h-screen items-center"
      style={{ backgroundColor: "#f8f8fa" }}
    >
      <div class="bg-white rounded-lg shadow-xl max-w-2xl mx-auto my-20 py-10 px-6 w-full">
        <div class={styles.sheetFormStyle}>
          <h2
            class="text-4xl font-bold text-center mb-4"
            style={{ color: "var(--qwik-dark-blue)", fontFamily: "var(--font-heading)" }}
          >
            Formulario de contacto
          </h2>
          <p
            class="text-center text-gray-600 mt-4 mb-8 text-xl"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Solicita información adicional o una presentación de nuestros
            servicios.
          </p>
          <Form
            data-netlify={true}
            name="customer-form"
            class={styles.formFlex}
            onSubmit$={handleSubmit}
          >
            <Field
              name="name"
            >
              {(field, props) => (
                <TextInput
                  {...props}
                  value={field.value}
                  error={field.error}
                  type="text"
                  label="Nombre:"
                  placeholder="Nombre"
                  class="text-xl font-light text-black focus:outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4]"
                  required
                />
              )}
            </Field>
            <Field
              name="email"
            >
              {(field, props) => (
                <TextInput
                  {...props}
                  value={field.value}
                  error={field.error}
                  type="email"
                  label="Email:"
                  placeholder="Email"
                  class="text-xl font-light text-black focus:outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4]"
                  required
                />
              )}
            </Field>
            <Field
              name="phone"
            >
              {(field, props) => (
                <TextInput
                  {...props}
                  value={field.value}
                  error={field.error}
                  type="tel"
                  label="Teléfono:"
                  placeholder="Teléfono"
                  class="text-xl font-light text-black focus:outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4]"
                  required
                />
              )}
            </Field>
            <Field
              name="issue"
            >
              {(field, props) => (
                <TextInput
                  {...props}
                  value={field.value}
                  error={field.error}
                  type="text"
                  label="Asunto:"
                  placeholder="Asunto"
                  class="text-xl font-light text-black focus:outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4]"
                  required
                />
              )}
            </Field>
            <Field
              name="message"
            >
              {(field, props) => (
                <TextInput
                  {...props}
                  value={field.value}
                  error={field.error}
                  type="text"
                  label="Mensaje:"
                  placeholder="Mensaje"
                  class="text-xl font-light text-black focus:outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4]"
                  required
                />
              )}
            </Field>
            <br class="mb-4" />
            <div class="flex justify-center px-5">
              <button
                type="submit"
                class="w-full font-bold py-3 px-4 rounded-2xl focus:outline-none focus:shadow-outline transition-all duration-300 text-2xl mt-6 shadow-md hover:shadow-lg hover:scale-105"
                style={{ backgroundColor: "var(--primary-blue)", color: "var(--primary-white)" }}
              >
                Enviar
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
});
