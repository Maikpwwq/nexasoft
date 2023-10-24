import { component$ } from "@builder.io/qwik";
import styles from "./features.module.css";

import {
  MUITypography,
  // MUIImageList,
  // MUIImageListItem,
  MUIDevicesIcon,
  MUILaptopIcon,
  MUIPhoneAndroidIcon,
  MUIPhoneIphoneIcon,
  MUIWebIcon,
} from "~/integrations/react/mui";

export default component$(() => {
  return (
    <features id="features-section" class={["pb-6", styles.features]}>
      <div class="container container-purple container-center">
        <MUITypography variant="h2" align="center" className={styles.title}>
          ¡Transforma tu
          <br />
          <span class="highlight">experiencia </span>
          en línea!
        </MUITypography>
        <div class={styles.servicesBriefcase}>
          <MUITypography className="mt-6 mb-6" variant="body1" sx={{display: { md: 'block', sm: 'none', xs: 'none'}}}>
            <br />
            <strong class={styles.hint}>🚀 NexaSoft SAS</strong> ofrece
            soluciones empresariales de software que te ayudarán a mejorar tu
            negocio. Con nuestros servicios de{" "}
            <strong class={styles.hint}>
              modernización de plataformas <MUIDevicesIcon />{" "}
            </strong>
            , podrás migrar tus sistemas existentes a las últimas tecnologías,
            {/* renderizando del lado del servidor y sirviendo contenidos estáticos */}
            aumentando el rendimiento de tu sitio web hasta en un 100%. Además,
            con nuestros servicios de{" "}
            <strong class={styles.hint}>
              mantenimiento de plataformas digitales <MUILaptopIcon />{" "}
            </strong>
            , aumentaras la disponibilidad, seguridad y productividad de tus
            sistemas existentes.
            <br />
            <br />
            Nuestros{" "}
            <strong class={styles.hint}>
              desarrolladores de aplicaciones móviles <MUIPhoneAndroidIcon />
              <MUIPhoneIphoneIcon />{" "}
            </strong>{" "}
            , te ayudan a reducir costos al acelerar tareas especificas como
            captura de datos, con aplicaciones móviles en tus sistemas iOS y
            Android. Contamos con{" "}
            <strong class={styles.hint}>
              desarrolladores de aplicaciones web <MUIWebIcon />{" "}
            </strong>
            , quienes te ayudaran a crear: Sitios Web, Landing pages y Stores
            adaptativas de e-commerce, con integración a pasarelas de pagos
            online.
            <br />
            <br />
            También mejoramos tu posicionamiento{" "}
            <strong class={styles.hint}>
              SEO <span q:slot="title" class="icon icon-community" />
            </strong>
            para optimizar el reconocimiento digital de tu marca en Internet.{" "}
            Además, con nuestros servicios de{" "}
            <strong class={styles.hint}>
              integración de automatización{" "}
              <span q:slot="title" class="icon icon-cli" />
            </strong>
            , accede a diferentes sistemas y plataformas que aumentan la
            eficiencia en tus recursos de software. Por último, con nuestros
            servicios de{" "}
            <strong class={styles.hint}>
              seguridad y cumplimiento{" "}
              <span q:slot="title" class="icon icon-apps" />
            </strong>
            , garantiza la seguridad de tus plataformas, cumpliendo con las
            normas y regulaciones aplicables. <br />
            <br />
          </MUITypography>
          <MUITypography className="mt-6 mb-6" variant="body1" sx={{display: { md: 'none', sm: 'block'}}}>
            <br />
            <strong class={styles.hint}>🚀 NexaSoft SAS.</strong> Transformamos tu negocio con tecnología 
            de vanguardia. Modernizamos tu plataforma para un rendimiento +100%. Apps móviles, web, SEO, 
            automatización y seguridad. ¡Impulsa tu éxito digital hoy!
            <br />
            <MUIWebIcon />{" "}
            <MUIDevicesIcon />{" "}
            <MUILaptopIcon />{" "}
            <MUIPhoneAndroidIcon />{" "}
            <MUIPhoneIphoneIcon />{" "}
          </MUITypography>
        </div>
      </div>
    </features>
  );
});
