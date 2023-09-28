// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */
import { component$, $, useTask$ } from "@builder.io/qwik"; // , useSignal
import { isServer } from "@builder.io/qwik/build";
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
  // valiForm$,
} from "@modular-forms/qwik";
import styles from "~/components/modular-forms/modularForm.module.css";
import { TextInput } from "~/components/modular-forms/TextInput";

// import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

// import Contact from "~/components/contact/contact";
// import Counter from "~/components/starter/counter/counter";
import Features from "~/components/features/features";
import PortfolioProducts from "~/components/portfolio/portfolioProducts";
import Footer from "~/components/footer/footer";
import Hero from "~/components/starter/hero/hero";
import Infobox from "~/components/starter/infobox/infobox";
import ImagesList from "~/components/images-list/imagesList";
// import MainBanner from "~/components/main-banner/mainBanner";
// import Starter from '~/components/starter/next-steps/next-steps';
import Testimonials from "~/components/testimonials/testimonials";

import {
  MUITypography,
  MUICard,
  MUICardContent,
  MUIPaper,
} from "~/integrations/react/mui";
import Resume from "~/components/resume/resume";
import Further from "~/components/further/further";
import Advantages from "~/components/advantages/advantages";
import Secrets from "~/components/secrets/secrets";

// const styles = () => ({
//   contactCard: {
//     borderRadius: "33px",
//     border: "1px solid #ac7ff4",
//     backgroundColor: "var(--qwik-dirty-black)",
//     margin: "0 10px",
//   },
// });

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
    } catch (error) {
      console.log(error);
      return {
        status: "error",
        message: "No se ha podido enviar su mensaje.",
        data: { customerId: "" },
      };
    }
  },
  zodForm$(loginSchema),
);

export default component$(() => {
  // const classes = styles();

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

  useTask$(({ track }) => {
    track(() => loginForm.response?.status);
    if (isServer) {
      return; // Server guard
    }
    if (
      loginForm.submitted &&
      loginForm.submitting === false &&
      loginForm.response.status === "success"
    ) {
      successData();
    }
  });

  return (
    <>
      <Hero />
      {/* <Starter /> */}
      {/* <MainBanner /> */}
      <Features />
      <Resume />
      <ImagesList />
      <PortfolioProducts />
      <Further />
      <Advantages />
      <Testimonials />
      <Secrets />

      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>
      {/* 
        <h3>
          You can <span class="highlight">count</span>
          <br /> on me
        </h3>
        <Counter />
      </div> */}

      {/* <div
        id="contact-section"
        class="container container-center flex justify-center"
        style={{}}
      >
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
      </div> */}
      <div id="contact-section" class="container container-flex contactBox">
        <MUICard className={styles.contactCard} variant="outlined">
          <MUICardContent>
            <Infobox>
              <>
                <Footer />
              </>
            </Infobox>
          </MUICardContent>
        </MUICard>
      </div>
      <div
        role="presentation"
        class="ellipsis-bottom ellipsis-purple-bottom"
      ></div>
      <div role="presentation" class="ellipsis-bottom"></div>
    </>
  );
});

export const head: DocumentHead = {
  title: "🚀 NexaSoft SAS",
  meta: [
    {
      name: "description",
      content:
        "💥¡Vende en linea como un profesional!. Creamos tu sitio web o tienda digital a la medida de tu negocio.",
    },
  ],
};
