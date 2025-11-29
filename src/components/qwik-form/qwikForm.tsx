import { component$, useSignal } from "@builder.io/qwik";
// import { connectionDB } from "~/services/mongo-init";
import {
  server$,
  // routeAction$,
  // globalAction$,
  useNavigate,
  // Form,
} from "@builder.io/qwik-city";
import styles from "./qwikForm.module.css";
// import { MUITypography } from "~/integrations/react/mui";

const successful: boolean = false;
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
    // const resume = await connectionDB(data);
    // MongoDB disabled for Edge compatibility
    const resume = "mongodb-disabled";
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
    <div class={[styles.sheetFormStyle, "py-10 px-6 bg-white rounded-lg shadow-xl max-w-2xl mx-auto my-10"]}>
      <h2 class="text-3xl font-bold text-center mb-2" style={{ color: "var(--qwik-dark-blue)" }}>
        Formulario de contacto
      </h2>
      <p class="text-center text-gray-600 mb-8 text-lg">
        Solicita información adicional o una presentación de nuestros servicios.
      </p>
      <div class={styles.formFlex}>
        <div class="mb-4">
          <label for="form-name" class="block text-gray-700 text-sm font-bold mb-2">
            Nombre: <span class="text-red-500">*</span>
          </label>
          <input
            id="form-name"
            name="name"
            type="text"
            placeholder="Tu nombre completo"
            class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition-colors"
            bind:value={formData.name}
          />
        </div>

        <div class="mb-4">
          <label for="form-email" class="block text-gray-700 text-sm font-bold mb-2">
            Correo electrónico: <span class="text-red-500">*</span>
          </label>
          <input
            id="form-email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition-colors"
            bind:value={formData.email}
          />
        </div>

        <div class="mb-4">
          <label for="form-phone" class="block text-gray-700 text-sm font-bold mb-2">
            Teléfono: <span class="text-red-500">*</span>
          </label>
          <input
            id="form-phone"
            name="phone"
            type="tel"
            placeholder="Tu número de contacto"
            class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition-colors"
            bind:value={formData.phone}
          />
        </div>

        <div class="mb-4">
          <label for="form-issue" class="block text-gray-700 text-sm font-bold mb-2">
            Asunto:
          </label>
          <input
            id="form-issue"
            name="issue"
            type="text"
            placeholder="Motivo de tu mensaje"
            class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition-colors"
            bind:value={formData.issue}
          />
        </div>

        <div class="mb-6">
          <label for="form-message" class="block text-gray-700 text-sm font-bold mb-2">
            Mensaje:
          </label>
          <textarea
            id="form-message"
            rows={5}
            name="message"
            placeholder="¿Cómo podemos ayudarte?"
            class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition-colors"
            bind:value={formData.message}
          />
        </div>

        <button
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition-colors text-lg"
          onClick$={async () => {
            const customerRecord = {
              name: formData.name.value,
              email: formData.email.value,
              phone: formData.phone.value,
              issue: formData.issue.value,
              message: formData.message.value,
            };
            const resume = await addCustomer(customerRecord);
            console.log("greeting", resume, successful);

            const resetForm = () => {
              formData.name.value = "";
              formData.email.value = "";
              formData.phone.value = "";
              formData.issue.value = "";
              formData.message.value = "";
            };

            alert("Gracias, su mensaje ha sido recibido." + (resume.success ? "" : " (Error al guardar)"));
            resetForm();
            await nav("/");
          }}
        >
          Enviar Mensaje
        </button>
      </div>
    </div>
  );
});
