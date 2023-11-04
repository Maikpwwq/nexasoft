import { component$, $, useTask$ } from "@builder.io/qwik"; // , useSignal
import { isServer } from "@builder.io/qwik/build";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from 'uuid'
import clsx from "clsx";
import {
  routeLoader$,
  z,
} from "@builder.io/qwik-city";
import type { InitialValues, SubmitHandler } from "@modular-forms/qwik"; //
import {
  useForm,
  formAction$,
  zodForm$,
  reset,
} from "@modular-forms/qwik";
import styles from "~/components/modular-forms/modularForm.module.css";
import { MUITypography, MUIPaper } from "~/integrations/react/mui";
import { TextInput } from "~/components/modular-forms/TextInput";

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
    .email("The email address is badly formatted."),
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
  customerId: string;
};

export const useFormAction = formAction$<LoginForm, ResponseData>(
  async (values) => {
    // Runs on SERVER
    console.log("useFormAction", values);
    try {
      // Create a single supabase client for interacting with your database
      const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
      const { name, email, phone, issue, message } = values;
      const recordID : string = uuidv4();
      const hexNumber : number = 1; // parseInt(recordID.replace(/-/g, ''), 16);
      const { data: customer_form, error } = await supabase
        .from("customer_form")
        .insert([{ id: hexNumber, created_at: new Date(), name, email, phone, issue, message }])
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
        message: `Gracias, su mensaje ha sido recibido. ${recordID}`,
        data: { customerId: recordID },
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

export default component$(() => {
  // const nav = useNavigate();

  // , FieldArray
  const [loginForm, { Form, Field }] = useForm<LoginForm, ResponseData>({
    loader: useFormLoader(),
    action: useFormAction(),
    validate: zodForm$(loginSchema),
  });

  const handleSubmit = $<SubmitHandler<LoginForm>>(
    async (values: any, event: any) => {
      // Runs on CLIENT
      console.log("handleSubmit", values, event);
    },
  );

  const successData = $(async () => {
    console.log(
      "handleSubmitSuccess",
      loginForm.submitted,
      loginForm.submitting,
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
      loginForm.submitting,
      loginForm.response,
    );
    alert(loginForm.response.message);
  });

  useTask$(({ track }) => {
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
    <div class="container container-center flex justify-center" style={{}}>
      <MUIPaper className={styles.cardContactForm} elevation={16}>
        <div class={styles.sheetFormStyle}>
          <MUITypography
            variant="h6"
            color={"var(--qwik-dark-blue)"}
            align="center"
          >
            Formulario de contacto
          </MUITypography>
          <MUITypography variant="body1" className="pt-2 pb-4" align="center">
            Solicita información adicional o una presentación de nuestros
            servicios.
          </MUITypography>
          <Form
            class={styles.formFlex}
            onSubmit$={handleSubmit}
            // preventdefault:submit
            // reloadDocument={true}
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
                  placeholder="Correo electrónico"
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
                  placeholder="+57"
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
                  required
                />
              )}
            </Field>
            <button
              type="submit"
              class={clsx("mx-3 lg:mx-5", styles.btnStyle)}
            >
              Enviar
            </button>
          </Form>
        </div>
      </MUIPaper>
    </div>
  );
});
