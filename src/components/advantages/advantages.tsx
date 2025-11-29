import { component$ } from "@builder.io/qwik";
import styles from "./advantages.module.css";

export default component$(() => {
  return (
    <advantages id="advantages-section" class={["relative", styles.advantages]}>
      <div class={["container container-blue relative z-10", styles.advantagesContainer]}>
        <div class={["mt-1", styles.advantagesList]}>
          <h2 class={styles.title} style="text-align: center; font-size: 2.5rem; font-weight: bold; fontFamily: var(--font-heading);">
            <span class="highlight">Maximiza tu Éxito</span> en Línea con Todos
            los <span class="highlight">Beneficios</span> que Tenemos para Ti!
          </h2>
          <ul class="mt-6 mb-6">
            <li class={[styles.listItem, "my-2"]} style={{ fontFamily: "var(--font-body)" }}>
              <span class="text-3xl me-3 text-[#4285F4]"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg></span> Diseño
              intuitivo y atractivo para una Experiencia de Usuario excepcional.
            </li>
            <li class={[styles.listItem, "my-2"]} style={{ fontFamily: "var(--font-body)" }}>
              <span class="text-3xl me-3 text-[#4285F4]"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg></span>{" "}
              Contenidos Responsivos para una visualización perfecta en todos
              los dispositivos.
            </li>
            <li class={[styles.listItem, "my-2"]} style={{ fontFamily: "var(--font-body)" }}>
              <span class="text-3xl me-3 text-[#4285F4]"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></span> Entrega
              rápida con resultados notables.
            </li>
            <li class={[styles.listItem, "my-2"]} style={{ fontFamily: "var(--font-body)" }}>
              <span class="text-3xl me-3 text-[#4285F4]"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span> Seguridad
              garantizada para proteger tu negocio en línea.
            </li>
            <li class={[styles.listItem, "my-2"]} style={{ fontFamily: "var(--font-body)" }}>
              <span class="text-3xl me-3 text-[#4285F4]"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></span> Sitios web
              modernos que impulsan la interacción fluida.
            </li>
            <li class={[styles.listItem, "my-2"]} style={{ fontFamily: "var(--font-body)" }}>
              <span class="text-3xl me-3 text-[#4285F4]"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></span> Soporte
              experto en todo momento para tu tranquilidad.
            </li>
          </ul>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[var(--qwik-dark-background)] pointer-events-none"></div>
    </advantages>
  );
});
