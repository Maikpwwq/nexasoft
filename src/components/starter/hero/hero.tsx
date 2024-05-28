import { component$ } from "@builder.io/qwik";
import TimeToCelebrate from "./timeToCelebrate";
import styles from "./hero.module.css";

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>
      <TimeToCelebrate />
      <div class={styles["button-group"]}>
        <a href="/customer-form/" class="text-2xl button font-bold">
          Solicitar información
        </a>
        <a
          href="#products-section"
          class="text-2xl text-white button font-bold flex items-center"
          style={{ color: "var(--qwik-dark-text)" }}
        >
          Planes
        </a>
      </div>
    </div>
  );
});
