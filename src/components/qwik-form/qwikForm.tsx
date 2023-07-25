import { component$, useSignal } from "@builder.io/qwik";
import { connectionDB } from "~/services/mongo-init";
import {
  server$,
  // routeAction$,
  useNavigate,
  Form,
} from "@builder.io/qwik-city";
import styles from "./qwikForm.module.css";
import { MUITypography } from "~/integrations/react/mui";

let successful = false;
// const successful = false;

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

export const addCustomer = server$(async function (data): Promise<{
  successful: boolean;
}> {
  // async
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
  if (resume) {
    console.log("Promise message", resume);
    successful = true
  }

  return {
    successful,
  };
});

// export const useAddUser = routeAction$(async (data, requestEvent) => {
//   console.log(data, requestEvent)
// })

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
      >
        <label for="form-name" class={styles.labelStyle}>
          Nombre:{" "}
        </label>
        <input
          id="form-name"
          name="fullName"
          type="text"
          class={styles.inputStyle}
          bind:value={formData.name}
        />
        <label for="form-email" class={styles.labelStyle}>
          Correo electrónico:{" "}
        </label>
        <input
          id="form-email"
          name="email"
          type="email"
          class={styles.inputStyle}
          bind:value={formData.email}
        />
        <label for="form-phone" class={styles.labelStyle}>
          Teléfono:{" "}
        </label>
        <input
          id="form-phone"
          name="phone"
          type="phone"
          class={styles.inputStyle}
          bind:value={formData.phone}
        />
        <label for="form-issue" class={styles.labelStyle}>
          Asunto:{" "}
        </label>
        <input
          id="form-issue"
          name="issue"
          type="text"
          class={styles.inputStyle}
          bind:value={formData.issue}
        />
        <label for="form-message" class={styles.labelStyle}>
          Mensaje:{" "}
        </label>
        <textarea
          id="form-message"
          rows={7}
          name="message"
          class={styles.inputStyle}
          bind:value={formData.message}
        />
        <button
          type="submit"
          class={styles.btnStyle}
          onClick$={async () => {
            // const customerRecord = {
            //   name: formData.name.value,
            //   email: formData.email.value,
            //   phone: formData.phone.value,
            //   issue: formData.issue.value,
            //   message: formData.message.value,
            // };
            // const resume = await connectionDB(customerRecord);
            const resume = await addCustomer(formData);
            console.log("greeting", resume);
            const resetForm = () => {
              formData.name.value = "";
              formData.email.value = "";
              formData.phone.value = "";
              formData.issue.value = "";
              formData.message.value = "";
            };
            //  && successful
            if (resume) {
              alert("Gracias, su mensaje ha sido recibido.");
              resetForm();
              successful = false;
              await nav("/");
            }
          }}
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
