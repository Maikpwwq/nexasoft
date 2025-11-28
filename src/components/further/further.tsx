import { component$ } from "@builder.io/qwik";
import styles from "./further.module.css";

const furtherItems = [
  {
    icon: "🔍",
    title: "Posicionamiento SEO para destacar en los motores de búsqueda.",
  },
  {
    icon: "🌐",
    title: "Control total con Administradores de Contenidos.",
  },
  {
    icon: "🔧",
    title: "Actualización para mantener tu plataforma al día.",
  },
  {
    icon: "⚡",
    title: "Optimización de recursos y procesos.",
  },
  {
    icon: "🎯",
    title: "Construcción de una identidad de marca sólida en la web.",
  },
  {
    icon: "🔒",
    title: "Automatiza y refuerza tu seguridad en línea.",
  },
];

export default component$(() => {
  return (
    <further id="further-section" class={[styles.further]}>
      <div class="container container-blue">
        <div class={["mt-1", styles.furtherList]}>
          <h2 class={styles.title} style="text-align: center; font-size: 2.5rem; font-weight: bold;">
            ¡Desbloquea tu <span class="highlight">Éxito Digital</span> con
            Nuestros <span class="highlight">Servicios Adicionales!</span>
          </h2>
          <ul class="mt-6 mb-6">
            {furtherItems.length > 0 &&
              furtherItems.map((item, index) => {
                const { icon, title } = item;
                return (
                  <li key={index} class={[styles.listItem, "my-2"]}>
                    <span class="text-3xl me-3">{icon}</span>
                    {title}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </further>
  );
});
