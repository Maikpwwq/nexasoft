import { component$, $, useTask$ } from "@builder.io/qwik"; // , useSignal
import type { QRL } from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik/build";
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

// Serverless lead capture — Google Sheets via Apps Script (no server dependency)
const GOOGLE_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbxCywVeaWN50nX8LGbf_UYDC3C0JmZMxoK5d2Fp5PMpAfGTjD8LX_WG68SkCPrnQdRZ/exec";

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
    async (values: LoginForm) => {
      // Runs on CLIENT — sends lead to Google Sheets via Apps Script
      try {
        const payload = {
          contacto_nombre: values.name,
          contacto_email: values.email,
          telefono: values.phone,
          asunto: values.issue,
          mensaje: values.message,
          empresa: "",
          sector: "General",
          fuente_trafico: window.location.pathname,
        };

        // Google Apps Script Web App handles CORS via redirect,
        // so we use no-cors mode — the request is sent and processed
        // even though we can't read the response body
        await fetch(GOOGLE_SHEETS_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        setResponse(loginForm, {
          status: "success",
          message: `Gracias ${values.name}, recibimos tu solicitud. Te contactaremos en las próximas 24 horas.`,
          data: { customerId: "sheets" },
        });
      } catch (error) {
        console.error("Error enviando formulario:", error);
        setResponse(loginForm, {
          status: "error",
          message:
            "Error al enviar. Por favor intenta de nuevo o escríbenos al WhatsApp +57 3204842897.",
          data: { customerId: "" },
        });
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
