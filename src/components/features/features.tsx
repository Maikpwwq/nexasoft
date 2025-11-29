import { component$ } from "@builder.io/qwik";
import styles from "./features.module.css";

export default component$(() => {
  return (
    <features id="features-section" class={["pb-6 relative", styles.features]}>
      <div class="container container-purple container-center relative z-10 pb-6">
        <h2 class={styles.title} style="text-align: center; font-size: 2.5rem; font-weight: bold; fontFamily: var(--font-heading);">
          ¡Transforma tu
          <br />
          <span class="highlight">experiencia </span>
          en línea!
        </h2>
        <div class={styles.servicesBriefcase}>
          <div
            class="mt-8 mb-8 text-lg hidden md:block"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <br />
            <strong class={styles.hint}>🚀 NexaSoft SAS</strong> ofrece
            soluciones empresariales de software que te ayudarán a mejorar tu
            negocio. Con nuestros servicios de{" "}
            <strong class={styles.hint}>
              modernización de plataformas{" "}
              <span class="inline-block align-middle text-[#4285F4]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
              </span>{" "}
            </strong>
            , podrás migrar tus sistemas existentes a las últimas tecnologías,
            aumentando el rendimiento de tu sitio web hasta en un 100%. Además,
            con nuestros servicios de{" "}
            <strong class={styles.hint}>
              mantenimiento de plataformas digitales{" "}
              <span class="inline-block align-middle text-[#4285F4]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </span>{" "}
            </strong>
            , aumentaras la disponibilidad, seguridad y productividad de tus
            sistemas existentes.
            <br />
            <br />
            <br />
            Nuestros{" "}
            <strong class={styles.hint}>
              desarrolladores de aplicaciones móviles{" "}
              <span class="inline-block align-middle text-[#4285F4]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </span>
              <span class="inline-block align-middle text-[#4285F4] ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
              </span>{" "}
            </strong>{" "}
            , te ayudan a reducir costos al acelerar tareas especificas como
            captura de datos, con aplicaciones móviles en tus sistemas iOS y
            Android. Contamos con{" "}
            <strong class={styles.hint}>
              desarrolladores de aplicaciones web{" "}
              <span class="inline-block align-middle text-[#4285F4]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </span>{" "}
            </strong>
            , quienes te ayudaran a crear: Sitios Web, Landing pages y Stores
            adaptativas de e-commerce, con integración a pasarelas de pagos
            online.
            <br />
            <br />
            <br />
            También mejoramos tu posicionamiento{" "}
            <strong class={styles.hint}>
              SEO{" "}
              <span class="inline-block align-middle text-[#4285F4]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </span>
            </strong>
            para optimizar el reconocimiento digital de tu marca en Internet.{" "}
            Además, con nuestros servicios de{" "}
            <strong class={styles.hint}>
              integración de automatización{" "}
              <span class="inline-block align-middle text-[#4285F4]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 5 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              </span>
            </strong>
            , accede a diferentes sistemas y plataformas que aumentan la
            eficiencia en tus recursos de software. Por último, con nuestros
            servicios de{" "}
            <strong class={styles.hint}>
              seguridad y cumplimiento{" "}
              <span class="inline-block align-middle text-[#4285F4]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </span>
            </strong>
            , garantiza la seguridad de tus plataformas, cumpliendo con las
            normas y regulaciones aplicables. <br />
            <br />
          </div>
          <div
            class="mt-8 mb-8 text-lg block md:hidden"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <br />
            <strong class={styles.hint}>🚀 NexaSoft SAS.</strong> Transformamos
            tu negocio con tecnología de vanguardia. Modernizamos tu plataforma
            para un rendimiento +100%. Apps móviles, web, SEO, automatización y
            seguridad. ¡Impulsa tu éxito digital hoy!
            <br />
            <div class="flex justify-center gap-4 mt-4">
              <span class="text-[#4285F4]"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></span>
              <span class="text-[#4285F4]"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg></span>
              <span class="text-[#4285F4]"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></span>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[var(--qwik-light-blue)] pointer-events-none z-20"></div>
    </features>
  );
});
