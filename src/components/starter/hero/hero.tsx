import { component$ } from "@builder.io/qwik";
import TimeToCelebrate from "./timeToCelebrate";
import styles from "./hero.module.css";

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
      <TimeToCelebrate />
      <div class={styles["button-group"]}>
        <a href="#contact-section" class="button">
          Solicitar información
        </a>
      </div>
    </div>
  );
});
