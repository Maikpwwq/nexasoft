import { component$, $, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./header.module.css";
// import { NexaSoftLogo } from '../icons/qwik';

import { MUIMenuIcon } from "~/integrations/react/mui";

export default component$(() => {
  const NexaSoftLogo = "NexaSoft SAS";
  const state = useStore({
    visible: false,
  });

  const handleClick = $(() => {
    console.log("handleClick", state.visible);
    state.visible = !state.visible;
  });

  const navItems = [
    {
      name: "Servicios",
      route: "/#products-section",
    },
    {
      name: "Casos de éxito",
      route: "/#testimonials-section",
    },
    {
      name: "Contacto",
      route: "/#contact-section",
    },
    {
      name: "Preguntas frecuentes",
      route: "/#questions-section",
    },
  ];

  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <MUIMenuIcon
          onClick$={() => handleClick()}
          sx={{ display: { md: "none", sm: "block" } }}
          className={styles.dropdownMobile}
        />
        <div class={styles.logo}>
          <Link href="/" title="NexaSoft SAS">
            {/* <NexaSoftLogo height={50} width={143} /> */}
            {NexaSoftLogo} <span class="lightning">⚡️</span>
          </Link>
        </div>

        <ul>
          {navItems.map((item, index) => {
            const { name, route } = item;
            return (
              <li key={index}>
                <Link href={route}>{name}</Link>
              </li>
            );
          })}
          {/* <li>
          <a
            href="/"
            target="_blank"
          >
            Nosotros
          </a>
        </li> <li>
          <a
            href="/"
            target="_blank"
          >
            Blog
          </a>
        </li> <li>
          <a
            href="/"
            target="_blank"
          >
            Recursos
          </a>
        </li> */}
        </ul>
        {/* { state.visible &&     }   */}
        <div class={styles.mobileMenu}>
          <ul>
            {navItems.map((item, index) => {
              const { name, route } = item;
              return (
                <li key={index}>
                  <Link href={route}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
});
