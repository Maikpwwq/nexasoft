import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
// import { NexaSoftLogo } from '../icons/qwik';

export default component$(() => {
  const NexaSoftLogo = "NexaSoft SAS";

  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="NexaSoft SAS">
            {/* <NexaSoftLogo height={50} width={143} /> */}
            {NexaSoftLogo} <span class="lightning">⚡️</span>
          </a>
        </div>
        <ul>
          <li>
            <a href="#features-section">Servicios</a>
          </li>
          <li>
            <a href="#testimonials-section">Casos de éxito</a>
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
            <a href="#contact-section">Contacto</a>
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
