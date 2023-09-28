import { component$ } from "@builder.io/qwik";
import styles from "./questions.module.css";

import { MUITypography } from "~/integrations/react/mui";

export default component$(() => {
  return (
    <questions id="questions-section" class={[styles.questions]}>
      <div class="container">
        <div class={["mt-1", styles.questionsList]}>
          <MUITypography className="mt-6 mb-6" variant="body1">
            ??
          </MUITypography>
        </div>
      </div>
    </questions>
  );
});
