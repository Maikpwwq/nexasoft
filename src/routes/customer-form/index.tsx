// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */
import { component$, $ } from "@builder.io/qwik"; // , useSignal
import { connectionDB } from "~/services/mongo-init";
import clsx from "clsx";
import {
  // server$,
  // routeAction$,
  // type DocumentHead,
  useNavigate,
  routeLoader$,
  z,
} from "@builder.io/qwik-city";
import type { InitialValues, SubmitHandler } from "@modular-forms/qwik";
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

type LoginForm = {
  name: string;
  email: string;
  password: string;
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
  password: "",
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
      const resume = await connectionDB(values);
      const record = JSON.parse(resume);
      if (resume) {
        console.log("Promise message", resume, record);
        // setResponse(loginForm, response); // , options
        return {
          status: "success",
          message: "Gracias, su mensaje ha sido recibido.",
          data: { customerId: record },
        };
      }
    } catch {
      return {
        status: "error",
        message: "No se ha podido enviar su mensaje.",
        data: { customerId: "" },
      };
    }
  },
  zodForm$(loginSchema)
); // valiForm$(LoginSchema)

export default component$(() => {
  const nav = useNavigate();

  // , FieldArray
  const [loginForm, { Form, Field }] = useForm<LoginForm, ResponseData>({
    loader: useFormLoader(),
    action: useFormAction(),
    validate: zodForm$(loginSchema),
  });

  const handleSubmit = $<SubmitHandler<LoginForm>>(
    async (values: any, event: any) => {
      // Runs on CLIENT
      // console.log("handleSubmit", values, event);
      // console.log(
      //   "handleSubmitClient",
      //   loginForm.internal.fields.name?.value,
      //   loginForm.submitted,
      //   loginForm.submitting,
      //   loginForm.response.status,
      //   loginForm.response.data
      // );
    }
  );

  const successData = async (message) => {
    console.log(
      "handleSubmitSuccess",
      loginForm.submitted,
      loginForm.submitting,
      loginForm.response
    );
    alert(message);
    reset(loginForm); // , useFormLoader
    // clearResponse(loginForm);
    // const value = getValue(form, name, options);
    await nav("/");
  };

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
            // action={action}
            class={styles.formFlex}
            onSubmit$={handleSubmit}
            // preventdefault:submit
            // reloadDocument={true}
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
            <button
              type="submit"
              // preventdefault:click
              class={clsx("mx-3 lg:mx-5", styles.btnStyle)}
            >
              Enviar
            </button>

            {loginForm.submitted &&
              loginForm.response.status === "success" &&
              successData(loginForm.response.message)}
          </Form>
        </div>
      </MUIPaper>
    </div>
  );
});
