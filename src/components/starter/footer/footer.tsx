import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";
import styles from "./footer.module.css";

export default component$(() => {
  const serverTime = useServerTimeLoader();
  const arregloTime = serverTime.value.date.split("-");
  const yearTime = arregloTime[0];

  return (
    <footer class={styles.bgcolor}>
      <div class="container">
        <div class="flex flex-row justify-center text-sm align-bottom">
          <span>
            Copyright © {yearTime} <span class={styles.spacer}>|</span>{" "}
          </span>
          <span> Hecho con ♡ por </span>
          <a href="https://www.nexasoft.dev/" class={styles.anchor}>
            NexaSoft SAS <span class="lightning">⚡️</span> Soluciones Web
          </a>
        </div>
      </div>
    </footer>
  );
});
