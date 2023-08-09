import { component$, useSignal } from "@builder.io/qwik";
import { connectionDB } from "~/services/mongo-init";
import {
  server$,
  // routeAction$,
  routeLoader$, 
  type DocumentHead,
  useNavigate,
  // Form,
  z,
} from "@builder.io/qwik-city";
import styles from "~/components/qwik-form/qwikForm.module.css";
import { MUITypography } from "~/integrations/react/mui";

import { TextInput } from '~/components/qwik-form/TextInput'

import {
  email,
  minLength,
  required,
  useForm,
  formAction$,
  zodForm$,
} from '@modular-forms/qwik';

import type { InitialValues, SubmitHandler } from '@modular-forms/qwik';

let successful = false;
// const successful = false;

type LoginForm = {
  name: string;
  email: string;
  password: string;
  phone: string;
  issue: string;
  message: string;
};

export const useFormLoader = routeLoader$<InitialValues<LoginForm>>(() => ({
  name: '',
  email: '',
  password: '',
  phone: '',
  issue: '',
  message: '',
}));

// use the correct URL to connect functions
// dev  http://localhost:5173/customer-record
// prod  https://nexasoft.dev/customer-record

// const fetchCustomerRecord = async (customerRecord: any) => {
//   console.log("fetchCustomerRecord", customerRecord);
//   const postCustomerRecord = await fetch(
//     // "http://localhost:5173/customer-record/",
//     "https://nexasoft.dev/customer-record/",
//     {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(customerRecord),
//     }
//   );
//   const statusCode = postCustomerRecord.status;
//   const statusText = postCustomerRecord.statusText;
//   console.log("fetchCustomerResponse", statusCode, statusText);

//   // if (statusCode === 303) {
//   //   console.log("fetchCustomerSuccess", postCustomerRecord.text());
//   successful = true;
//   // } else {
//   //   console.log("fetchCustomerFail", statusCode);
//   //   // console.log("fetchCustomerRecord", postCustomerRecord.json());
//   // }
//   // return statusCode;
// };

// : Promise<{successful: boolean;}>

// routeAction$()` can only be declared in `layout.tsx`, `index.tsx` and `plugin.tsx` inside the src/routes directory
// export const useAddUser = routeAction$(async (data, requestEvent) => {
//   console.log(data, requestEvent)
export const addCustomer = server$(async function (data) {
  // This will only run on the server when the user submits the form (or when the action is called programatically)
  const customerRecord = {
    name: data.name.value,
    email: data.email.value,
    phone: data.phone.value,
    issue: data.issue.value,
    message: data.message.value,
  };

  // await fetchCustomerRecord(customerRecord);
  const resume = await connectionDB(customerRecord);
  // const record = JSON.stringify(resume);
  // if (resume) {
  console.log("Promise message", resume);
  successful = true;
  // }

  return {
    successful,
  };
});

const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Please enter your email.')
    .email('The email address is badly formatted.'),
  password: z
    .string()
    .min(1, 'Please enter your password.')
    .min(8, 'You password must have 8 characters or more.'),
});

export const useFormAction = formAction$<LoginForm>(async (values) => {
  // Runs on server
  console.log('useFormAction', values )
  await connectionDB(values)
}, zodForm$(loginSchema));

export default component$(() => {
  const nav = useNavigate();
  // const action = useAddUser();
  const formData = {
    name: useSignal(""),
    email: useSignal(""),
    phone: useSignal(""),
    issue: useSignal(""),
    message: useSignal(""),
  };

  const [loginForm, { Form, Field, FieldArray }] = useForm<LoginForm>({
    loader: useFormLoader(),
    action: useFormAction(),
    validate: zodForm$(loginSchema),
  });

  
  const handleSubmit: SubmitHandler<LoginForm> = $(async (values: any, event: any) => {
    // Runs on client
    console.log('handleSubmit', values )
    await connectionDB(values)
  });

  return (
    <div class={styles.sheetFormStyle}>
      <MUITypography variant="h6" color={"var(--qwik-dark-blue)"}>
        Formulario de contacto
      </MUITypography>
      <MUITypography variant="body1" className="pt-2 pb-4" align="center">
        Solicita información adicional o una presentación de nuestros servicios.
      </MUITypography>
      <Form
        // action={action}
        class={styles.formFlex}
        // reloadDocument={true}
        // onSubmit$={async (e) => {
        //   e.preventDefault();
        //   const greeting = await addCustomer(formData);
        //   // console.log("greeting", greeting.successful);
        //   if (greeting.successful) {
        //     alert("Gracias, su mensaje ha sido recibido.");
        //   }
        // }}
        // async (values) => await connectionDB(values)
        onSubmit$={handleSubmit}
      >
        <label for="form-name" class={styles.labelStyle}>
          Nombre:{" "}
        </label>
        <Field
          // id="form-name"
          name="name"
          // type="text"
          // class={styles.inputStyle}
          // bind:value={formData.name}
          >
          {(field, props) => (
            <TextInput
              {...props}
              value={field.value}
              error={field.error}
              type="text"
              label="Nombre"
              placeholder="Nombre"
              required
            />
          )}
        </Field>
        <label for="form-email" class={styles.labelStyle}>
          Correo electrónico:{" "}
        </label>
        <input
          id="form-email"
          name="email"
          type="email"
          class={styles.inputStyle}
          // bind:value={formData.email}
        />
        <label for="form-phone" class={styles.labelStyle}>
          Teléfono:{" "}
        </label>
        <input
          id="form-phone"
          name="phone"
          type="phone"
          class={styles.inputStyle}
          // bind:value={formData.phone}
        />
        <label for="form-issue" class={styles.labelStyle}>
          Asunto:{" "}
        </label>
        <input
          id="form-issue"
          name="issue"
          type="text"
          class={styles.inputStyle}
          // bind:value={formData.issue}
        />
        <label for="form-message" class={styles.labelStyle}>
          Mensaje:{" "}
        </label>
        <textarea
          id="form-message"
          rows={7}
          name="message"
          class={styles.inputStyle}
          // bind:value={formData.message}
        />
        <button
          type="submit"
          class={styles.btnStyle}
          // onClick$={async () => {
          //   // const customerRecord = {
          //   //   name: formData.name.value,
          //   //   email: formData.email.value,
          //   //   phone: formData.phone.value,
          //   //   issue: formData.issue.value,
          //   //   message: formData.message.value,
          //   // };
          //   // const resume = await connectionDB(customerRecord);
          //   const resume = await addCustomer(formData);
          //   console.log("greeting", resume, successful);
          //   const resetForm = () => {
          //     formData.name.value = "";
          //     formData.email.value = "";
          //     formData.phone.value = "";
          //     formData.issue.value = "";
          //     formData.message.value = "";
          //   };
          //   //  && successful
          //   if (resume) {
          //     alert("Gracias, su mensaje ha sido recibido.");
          //     resetForm();
          //     // successful = false; READ only
          //     await nav("/");
          //   }
          // }}
        >
          Enviar
        </button>
      </Form>
      {/* {successful && (
        // When the action is done successfully, the `action.value` property will contain the return value of the action
        <p>Gracias, su mensaje ha sido recibido.</p>
      )} */}
    </div>
  );
});
