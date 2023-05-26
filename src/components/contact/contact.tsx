import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./contact.css?inline";
import { FormularioContacto } from "~/integrations/react/mui";
// import ContactBtn from "./contact_btn";

// use the correct URL to connect serverless functions
// dev  http://localhost:8888/.netlify/functions/get_contacts/
// prod  https://nexasoft.netlify.app/.netlify/functions/get_contacts/

export default component$(() => {
  useStylesScoped$(styles);

  // const store = useStore({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   issue: "",
  //   message: "",
  // });

  return (
    <contact
      id="contact-section"
      class="container container-center container-spacing-xl"
    >
      <div class="flex w-full justify-center">
        <FormularioContacto />
      </div>
    </contact>
  );
});
