import { component$, useSignal } from "@builder.io/qwik";
import { connectionDB } from "~/services/mongo-init";
import {
  server$,
  // routeAction$,
  // globalAction$,
  useNavigate,
  // Form,
} from "@builder.io/qwik-city";
import styles from "./qwikForm.module.css";
import { MUITypography } from "~/integrations/react/mui";

const successful : boolean = false;
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

// : Promise<{successful: boolean;}>

// routeAction$()` can only be declared in `layout.tsx`, `index.tsx` and `plugin.tsx` inside the src/routes directory
// export const useAddCustomer = routeAction$(async (data, requestEvent) => {
//   console.log(data, requestEvent)
export const addCustomer = server$(async (data) => {
// export const addCustomer = async (data: any) => {
// globalAction$() is globally available across the whole app. Think about it like a "public" action.
// export const useAddCustomer = globalAction$(async (data: any) => {
  // This will only run on the server when the user submits the form (or when the action is called programatically)
  // const customerRecord = {
  //   name: data.name.value,
  //   email: data.email.value,
  //   phone: data.phone.value,
  //   issue: data.issue.value,
  //   message: data.message.value,
  // };
  console.log("useAddCustomer data", data);
  // const customerRecord = {
  //   name: data.name,
  //   email: data.email,
  //   phone: data.phone,
  //   issue: data.issue,
  //   message: data.message,
  // };
  try {
    console.log("useAddCustomer message", data);
    // await fetchCustomerRecord(customerRecord);
    const resume = await connectionDB(data);
    // // const record = JSON.stringify(resume);
    console.log("Promise message", resume);
    return {
      success: true,
    }; 
  } catch {
    return {
      success: false,
    };
  }
});

export default component$(() => {
  const nav = useNavigate();
  // const action = useAddCustomer();
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
      <div
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
          name="name"
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
          // type="submit"
          class={styles.btnStyle}
          onClick$={async () => {
            const customerRecord = {
              name: formData.name.value,
              email: formData.email.value,
              phone: formData.phone.value,
              issue: formData.issue.value,
              message: formData.message.value,
            };
            // const resume = await connectionDB(customerRecord);
            const resume = await addCustomer(customerRecord); // addCustomer
            console.log("greeting", resume, successful);
            // const { value } = await action.submit(formData)
            const resetForm = () => {
              formData.name.value = "";
              formData.email.value = "";
              formData.phone.value = "";
              formData.issue.value = "";
              formData.message.value = "";
            };
            // console.log('action triggered programmatically', value)
            // resume && successful
            // if (successful) {
            alert("Gracias, su mensaje ha sido recibido." + resume);
            resetForm();
            //   // successful = false; READ only
            await nav("/");
            // }
          }}
        >
          Enviar
        </button>
        {/* {action.value?.success && (
           alert("Gracias, su mensaje ha sido recibido.");
        )} */}
      </div>
      {/* {successful && (
        // When the action is done successfully, the `action.value` property will contain the return value of the action
        <p>Gracias, su mensaje ha sido recibido.</p>
      )} */}
    </div>
  );
});
