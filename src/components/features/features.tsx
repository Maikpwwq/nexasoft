import { component$ } from "@builder.io/qwik";
import styles from "./features.module.css";

export default component$(() => {
  return (
    <features id="features-section" class={["pb-6", styles.features]}>
      <div class="container container-purple container-center">
        <h2 class={styles.title} style="text-align: center; font-size: 2.5rem; font-weight: bold;">
          ¡Transforma tu
          <br />
          <span class="highlight">experiencia </span>
          en línea!
        </h2>
        <div class={styles.servicesBriefcase}>
          <p
            class="mt-6 mb-6 text-lg hidden md:block"
          >
            <br />
            <strong class={styles.hint}>🚀 NexaSoft SAS</strong> ofrece
            soluciones empresariales de software que te ayudarán a mejorar tu
            negocio. Con nuestros servicios de{" "}
            <strong class={styles.hint}>
              modernización de plataformas <span class="text-xl">📱</span>{" "}
            </strong>
            , podrás migrar tus sistemas existentes a las últimas tecnologías,
            aumentando el rendimiento de tu sitio web hasta en un 100%. Además,
            con nuestros servicios de{" "}
            <strong class={styles.hint}>
              mantenimiento de plataformas digitales <span class="text-xl">💻</span>{" "}
            </strong>
            , aumentaras la disponibilidad, seguridad y productividad de tus
            sistemas existentes.
            <br />
            <br />
            <br />
            Nuestros{" "}
            <strong class={styles.hint}>
              desarrolladores de aplicaciones móviles <span class="text-xl">📱</span>
              <span class="text-xl">📲</span>{" "}
            </strong>{" "}
            , te ayudan a reducir costos al acelerar tareas especificas como
            captura de datos, con aplicaciones móviles en tus sistemas iOS y
            Android. Contamos con{" "}
            <strong class={styles.hint}>
              desarrolladores de aplicaciones web <span class="text-xl">🌐</span>{" "}
            </strong>
            , quienes te ayudaran a crear: Sitios Web, Landing pages y Stores
            adaptativas de e-commerce, con integración a pasarelas de pagos
            online.
            <br />
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
          </p>
          <p
            class="mt-6 mb-6 text-lg block md:hidden"
          >
            <br />
            <strong class={styles.hint}>🚀 NexaSoft SAS.</strong> Transformamos
            tu negocio con tecnología de vanguardia. Modernizamos tu plataforma
            para un rendimiento +100%. Apps móviles, web, SEO, automatización y
            seguridad. ¡Impulsa tu éxito digital hoy!
            <br />
            <span class="text-xl">🌐</span> <span class="text-xl">📱</span> <span class="text-xl">💻</span>{" "}
            <span class="text-xl">📲</span> <span class="text-xl">📱</span>{" "}
          </p>
        </div>
      </div>
    </features>
  );
});
