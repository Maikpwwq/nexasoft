import { component$ } from "@builder.io/qwik";
import styles from "./secrets.module.css";

export default component$(() => {
  return (
    <secrets id="secrets-section" class={["pb-6 relative", styles.secrets]}>
      <div class="container container-purple relative z-10" style="margin-bottom: 5rem;">
        <div class={["mt-1", styles.secretsList]}>
          <h2 class={styles.title} style="text-align: center; font-size: 2.5rem; font-weight: bold;">
            ¡Domina la <span class="highlight">Web</span> en un solo lugar!
            Descubre los Secretos para el{" "}
            <span class="highlight">Éxito en Línea</span>
          </h2>
          <p
            class="mt-6 mb-6 pt-5 text-center text-xl hidden md:block"
          >
            ¡Desbloquea tu Éxito Digital con NexaSoft SAS y transforma tu
            presencia en línea.!
            <br />
            <br />
            <br />
            NexaSoft SAS líderes en Diseño Web a medida, Sitios Web
            Informativos, Vitrinas virtuales y Tiendas Online de Comercio
            Electrónico en Colombia, te ofrecemos soluciones empresariales de
            software que impulsarán tu negocio. Nuestros expertos en
            modernización de plataformas te permitirán migrar tus sistemas
            existentes a las últimas tecnologías, aumentando el rendimiento de
            tu sitio web hasta en un 100%. Además, con nuestros servicios de
            mantenimiento de plataformas digitales, garantizamos la
            disponibilidad, seguridad y productividad de tus sistemas. También
            ofrecemos desarrollo de aplicaciones móviles para iOS y Android,
            creación de Sitios Web, Landing pages y Stores adaptativas de
            e-commerce, integración de pasarelas de pagos online, y mejoramos tu
            posicionamiento SEO para optimizar el reconocimiento digital de tu
            marca en Internet. Con nosotros, accede a la automatización,
            seguridad y cumplimiento que necesitas para el éxito en línea.
          </p>
          <p
            class="mt-6 pb-6 pt-5 text-lg block md:hidden"
          >
            🚀 NexaSoft SAS: Transformamos tu negocio con Diseño Web de
            vanguardia, E-commerce, SEO y más. ¡Impulsa tu éxito digital hoy!
          </p>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[var(--qwik-dark-background)] pointer-events-none z-20"></div>
    </secrets>
  );
});
