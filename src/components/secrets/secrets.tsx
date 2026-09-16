import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./secrets.module.css";
import secretsCss from "./secrets.module.css?inline";

export default component$(() => {
  useStyles$(secretsCss);

  return (
    <section
      id="secrets-section"
      class={[
        "pb-6 relative w-full flex justify-center bg-[var(--qwik-purple-background)]",
        styles.secrets,
      ]}
    >
      <div class="container container-purple relative z-10" style="margin-bottom: 5rem;">
        <div class={["mt-1", styles.secretsList]}>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center tracking-tight leading-tight mb-8">
            ¡Domina la <span class="heroGradient">Web</span> en un solo lugar!
            <br />
            Descubre los Secretos para el{" "}
            <span class="heroGradient">Éxito en Línea</span>
          </h2>
          <div class="max-w-3xl mx-auto px-4 space-y-6 text-center mt-6">
            <p class="text-lg sm:text-xl text-gray-200 leading-relaxed font-normal">
              En <strong class="text-white font-semibold">NexaSoft SAS</strong> desarrollamos soluciones empresariales de software y plataformas web a medida en Colombia, diseñadas para impulsar el crecimiento comercial y la efectividad operativa de tu negocio.
            </p>

            <p class="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
              Cubrimos todo tu ecosistema digital: desde <span class="text-white font-normal">Sitios Web Informativos</span>, <span class="text-white font-normal">Vitrinas Virtuales</span> y <span class="text-white font-normal">Tiendas Online (E-commerce)</span> con pasarelas de pago seguras, hasta <span class="text-white font-normal">Landing Pages</span> de alta conversión y desarrollo de <span class="text-white font-normal">Aplicaciones Móviles para iOS y Android</span>.
            </p>

            <p class="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
              Modernizamos y migramos tus sistemas existentes a tecnologías de vanguardia para maximizar la velocidad y optimizar los <span class="text-white font-normal">Core Web Vitals</span>. Además, brindamos <span class="text-white font-normal">mantenimiento continuo</span>, <span class="text-white font-normal">posicionamiento SEO</span> estratégico, automatización y seguridad con respaldo formal para consolidar tu éxito en línea.
            </p>
          </div>
        </div>
      </div>
      {/* Degradado de transición hacia Contact */}
      <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[var(--qwik-dark-background)] pointer-events-none z-20"></div>
    </section>
  );
});
