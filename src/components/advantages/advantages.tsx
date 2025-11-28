import { component$ } from "@builder.io/qwik";
import styles from "./advantages.module.css";

export default component$(() => {
  return (
    <advantages id="advantages-section" class={["", styles.advantages]}>
      <div class={["container container-blue", styles.advantagesContainer]}>
        <div class={["mt-1", styles.advantagesList]}>
          <h2 class={styles.title} style="text-align: center; font-size: 2.5rem; font-weight: bold;">
            <span class="highlight">Maximiza tu Éxito</span> en Línea con Todos
            los <span class="highlight">Beneficios</span> que Tenemos para Ti!
          </h2>
          <ul class="mt-6 mb-6">
            <li class={[styles.listItem, "my-2"]}>
              <span class="text-3xl me-3">🎨</span> Diseño
              intuitivo y atractivo para una Experiencia de Usuario excepcional.
            </li>
            <li class={[styles.listItem, "my-2"]}>
              <span class="text-3xl me-3">📱</span>{" "}
              Contenidos Responsivos para una visualización perfecta en todos
              los dispositivos.
            </li>
            <li class={[styles.listItem, "my-2"]}>
              <span class="text-3xl me-3">⚡</span> Entrega
              rápida con resultados notables.
            </li>
            <li class={[styles.listItem, "my-2"]}>
              <span class="text-3xl me-3">🔒</span> Seguridad
              garantizada para proteger tu negocio en línea.
            </li>
            <li class={[styles.listItem, "my-2"]}>
              <span class="text-3xl me-3">🌐</span> Sitios web
              modernos que impulsan la interacción fluida.
            </li>
            <li class={[styles.listItem, "my-2"]}>
              <span class="text-3xl me-3">💬</span> Soporte
              experto en todo momento para tu tranquilidad.
            </li>
          </ul>
        </div>
      </div>
    </advantages>
  );
});
