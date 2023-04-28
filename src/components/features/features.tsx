import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./features.css?inline";

import {
  MUIBox,
  MUITypography,
  ImagesList,
  // MUIImageList,
  // MUIImageListItem,
  MUIDevicesIcon,
  MUILaptopIcon,
  MUIPhoneAndroidIcon,
  MUIPhoneIphoneIcon,
  MUIWebIcon,
} from "~/integrations/react/mui";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <features id="features-section" class="mt-6 mb-6">
      <MUITypography
        variant="h6"
        // component="div"
        align="center"
        class="pt-6"
        color={"var(--qwik-dark-blue)"}
      >
        ¿Estás cansado de lidiar con plataformas antiguas y poco eficientes?{" "}
      </MUITypography>
      <MUITypography class="mt-6 mb-6 pb-6" variant="body1">
        <br />
        <strong>NexaSoft</strong> ofrece soluciones empresariales de software
        que te ayudarán a mejorar tu negocio. Con nuestros servicios de{" "}
        <strong>
          modernización de plataformas <MUIDevicesIcon />,{" "}
        </strong>
        podrás migrar tus sistemas existentes a las últimas tecnologías,
        {/* renderizando del lado del servidor y sirviendo contenidos estáticos */}
        aumentando el rendimiento de tu sitio web hasta en un 100%. Además, con
        nuestros servicios de{" "}
        <strong>
          mantenimiento de plataformas digitales <MUILaptopIcon />,{" "}
        </strong>
        aumentaras la disponibilidad, seguridad y productividad de tus sistemas
        existentes.
        <br />
        <br />
        Nuestros{" "}
        <strong>
          desarrolladores de aplicaciones móviles <MUIPhoneAndroidIcon />
          <MUIPhoneIphoneIcon />,{" "}
        </strong>{" "}
        te ayudan a reducir costos al acelerar tareas especificas como captura
        de datos, con aplicaciones móviles en tus sistemas iOS y Android.
        Contamos con{" "}
        <strong>
          desarrolladores de aplicaciones web <MUIWebIcon />,{" "}
        </strong>
        quienes te ayudaran a crear: Sitios Web, Landing pages y Stores
        adaptativas de e-commerce, con integración a pasarelas de pagos online.
        También mejoramos tu posicionamiento SEO para optimizar el
        reconocimiento digital de tu marca en Internet. <br />
        <br />
        Además, con nuestros servicios de{" "}
        <strong>integración de automatización, </strong>accede a diferentes
        sistemas y plataformas que aumentan la eficiencia en tus recursos de
        software. <br />
        <br />
        Por último, con nuestros servicios de{" "}
        <strong>seguridad y cumplimiento, </strong>
        garantiza la seguridad de tus plataformas, cumpliendo con las normas y
        regulaciones aplicables. <br />
        <br />
        No esperes más, contáctanos para saber más sobre cómo nuestras
        soluciones de software pueden mejorar tu negocio.
        <br />
      </MUITypography>
      <MUIBox class="w-100 flex justify-center">
        <ImagesList />
      </MUIBox>
    </features>
  );
});
