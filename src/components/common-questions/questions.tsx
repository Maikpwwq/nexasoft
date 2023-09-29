import { component$ } from "@builder.io/qwik";
import styles from "./questions.module.css";
import { MUITypography, CustomersQuestions } from "~/integrations/react/mui";

export default component$(() => {
  return (
    <questions id="questions-section" class={[styles.questions, "relative"]}>
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>
      <div class="container">
        <MUITypography variant="h3" align="center" className={styles.title}>
        ¡Aclara tus Dudas sobre el <span class="highlight">Éxito Digital</span> de la mano de <span class="highlight">NexaSoft SAS!</span>
        </MUITypography>
        <div class={["mt-6"]}>
          <CustomersQuestions />
        </div>
      </div>
    </questions>
  );
});
