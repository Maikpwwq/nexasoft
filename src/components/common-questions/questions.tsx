import { component$ } from "@builder.io/qwik";
import styles from "./questions.module.css";
import { MUITypography } from "~/integrations/react/mui";

export default component$(() => {
  return (
    <questions id="questions-section" class={[styles.questions]}>
      <div class="container">
        <MUITypography variant="h2" align="center" className={styles.title}>
        ¡Aclara tus Dudas sobre el <span class="highlight">Éxito Digital</span> de la mano de <span class="highlight">NexaSoft SAS!</span>
        </MUITypography>
        <div class={["mt-1"]}>
          {/* <CustomersQuestions /> */}
        </div>
      </div>
    </questions>
  );
});
