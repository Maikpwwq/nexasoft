import { component$ } from "@builder.io/qwik";
import styles from "./contact.module.css";
// import { FormularioContacto } from "~/integrations/react/mui";
import QwikForm from "~/components/qwik-form/qwikForm";
import { MUIPaper } from "~/integrations/react/mui";

export default component$(() => {
  return (
    <contact
      // id="contact-section"
      class="container container-center flex justify-center"
      style={{}}
    >
      {/* eslint-disable-next-line qwik/no-react-props */}
      <MUIPaper className={styles.cardContactForm} elevation={16}>
        {/* <FormularioContacto /> */}
        <QwikForm />
      </MUIPaper>
    </contact>
  );
});
