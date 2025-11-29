
import { component$ } from "@builder.io/qwik";
import styles from "./further.module.css";

const furtherItems = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>,
    title: "Posicionamiento SEO para destacar en los motores de búsqueda.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>,
    title: "Control total con Administradores de Contenidos.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>,
    title: "Actualización para mantener tu plataforma al día.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
    title: "Optimización de recursos y procesos.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>,
    title: "Construcción de una identidad de marca sólida en la web.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>,
    title: "Automatiza y refuerza tu seguridad en línea.",
  },
];

export default component$(() => {
  return (
    <further id="further-section" class={[styles.further, "relative"]}>
      <div class="container container-blue relative z-10">
        <div class={["mt-1", styles.furtherList]}>
          <h2 class={styles.title} style="text-align: center; font-size: 2.5rem; font-weight: bold; fontFamily: var(--font-heading);">
            ¡Desbloquea tu <span class="highlight">Éxito Digital</span> con
            Nuestros <span class="highlight">Servicios Adicionales!</span>
          </h2>
          <ul class="mt-6 mb-6">
            {furtherItems.length > 0 &&
              furtherItems.map((item, index) => {
                const { icon, title } = item;
                return (
                  <li key={index} class={[styles.listItem, "my-2"]} style={{ fontFamily: "var(--font-body)" }}>
                    <span class="text-3xl me-3 text-[#4285F4]">{icon}</span>
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
