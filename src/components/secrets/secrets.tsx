import { component$ } from "@builder.io/qwik";
import styles from "./secrets.module.css";

import { MUITypography } from "~/integrations/react/mui";

export default component$(() => {
  return (
    <secrets id="secrets-section" class={[styles.secrets]}>
      <div class="container container-purple">
        <div class={["mt-1", styles.secretsList]}>
          <MUITypography variant="h2" align="center" className={styles.title}>
            ¡Domina la <span class="highlight">Web</span> en un solo lugar!
            Descubre los Secretos para el <span class="highlight">Éxito en Línea</span>
          </MUITypography>
          <MUITypography className="mt-6 mb-6 pt-5" align="center" variant="body1" sx={{display: { md: 'block', sm: 'none', xs: 'none'}}}>
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
            ¡Desbloquea tu Éxito Digital con NexaSoft SAS y transforma tu
            presencia en línea con un clic.!
          </MUITypography>
          <MUITypography className="mt-6 mb-6" variant="body1" sx={{display: { md: 'none', sm: 'block'}}}>
            🚀 NexaSoft SAS: Transformamos tu negocio con Diseño Web de vanguardia, E-commerce, SEO y más. ¡Impulsa tu éxito digital hoy!
          </MUITypography>
        </div>
      </div>
    </secrets>
  );
});
