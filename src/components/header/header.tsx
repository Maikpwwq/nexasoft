import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./header.module.css";
// import { NexaSoftLogo } from '../icons/qwik';

export default component$(() => {
  const NexaSoftLogo = "NexaSoft SAS";

  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <Link href="/" title="NexaSoft SAS">
            {/* <NexaSoftLogo height={50} width={143} /> */}
            {NexaSoftLogo} <span class="lightning">⚡️</span>
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/#products-section">Servicios</Link>
          </li>
          <li>
            <Link href="/#testimonials-section">Casos de éxito</Link>
          </li>
          {/* <li>
          <a
            href="/"
            target="_blank"
          >
            Nosotros
          </a>
        </li> */}
          <li>
            <Link href="/#contact-section">Contacto</Link>
          </li>
          {/* <li>
          <a
            href="/"
            target="_blank"
          >
            Blog
          </a>
        </li> */}
          {/* <li>
          <a
            href="/"
            target="_blank"
          >
            Recursos
          </a>
        </li> */}
        </ul>
      </div>
    </header>
  );
});
