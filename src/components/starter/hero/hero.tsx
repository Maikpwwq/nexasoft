import { component$ } from "@builder.io/qwik";
import TimeToCelebrate from "./timeToCelebrate";
import styles from "./hero.module.css";

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
      <TimeToCelebrate />
      <div class={styles["button-group"]}>
        <a href="/customer-form/" class="button text-xl font-bold">
          Solicitar información
        </a>
      </div>
    </div>
  );
});
