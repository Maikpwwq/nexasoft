import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  const NexaSoftLogo = "NexaSoft";

  return (
    <header>
      <div class="logo">
        <a href="/" title="qwik">
          {/* <NexaSoftLogo /> */}
          {NexaSoftLogo} <span class="lightning">⚡️</span>
        </a>
      </div>
      <ul>
        <li>
          <a
            href="#features-section"
          >
            Servicios
          </a>
        </li>
        <li>
          <a
            href="#testimonials-section"
          >
            Casos de éxito
          </a>
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
          <a
            href="#contact-section"
          >
            Contacto
          </a>
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
    </header>
  );
});
