import { component$ } from "@builder.io/qwik";
import TimeToCelebrate from "./timeToCelebrate";
import styles from "./hero.module.css";

export default component$(() => {
  return (
    <hero id="hero" class={[styles.hero, "relative"]}>
      <div class={["container", styles.hero]} style="margin-bottom: 5rem;">
        <div role="presentation" class="ellipsis"></div>
        <div role="presentation" class="ellipsis ellipsis-purple" style="z-index: 30;"></div>
        <TimeToCelebrate />
        <div class={[styles["button-group"], "relative z-30"]}>
          <a
            href="/customer-form/"
            class="text-2xl button font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            style={{ color: "#ffffff", backgroundColor: "#ac7ef4" }}
          >
            Solicitar información
          </a>
          <a
            href="#products-section"
            class="text-2xl text-white button font-bold flex items-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            style={{ color: "var(--qwik-dark-text)" }}
          >
            Planes
          </a>
        </div>
      </div>
      {/* <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-[var(--qwik-dark-background)] to-[var(--qwik-purple-background)] pointer-events-none z-20"></div> */}
    </hero>
  );
});
