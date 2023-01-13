import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./features.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <features id="features-section">
      <p>
        ¿Estás cansado de lidiar con plataformas antiguas y poco eficientes?{" "}
        <br />
        <br />
        <strong>NexaSoft</strong> ofrece soluciones empresariales de software
        que te ayudarán a mejorar tu negocio. Con nuestros servicios de{" "}
        <strong>modernización de plataformas, </strong>
        podrás migrar tus sistemas existentes a las últimas tecnologías,
        {/* renderizando del lado del servidor y sirviendo contenidos estáticos */}
        aumentando el rendimiento de tu sitio web hasta en un 100%. Además, con
        nuestros servicios de{" "}
        <strong>mantenimiento de plataformas digitales, </strong>aumentaras la
        disponibilidad, seguridad y productividad de tus sistemas existentes.
        <br />
        <br />
        Nuestros <strong>desarrolladores de aplicaciones móviles, </strong> te
        ayudan a reducir costos al acelerar tareas especificas como captura de
        datos, con aplicaciones móviles en tus sistemas iOS y Android. Contamos
        con <strong>desarrolladores de aplicaciones web, </strong>quienes te
        ayudaran a crear: Sitios Web, Landing pages y Stores adaptativas de
        e-commerce, con integración a pasarelas de pagos online. También
        mejoramos tu posicionamiento SEO para optimizar el reconocimiento
        digital de tu marca en Internet. <br />
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
      </p>
    </features>
  );
});
