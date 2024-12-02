import { component$, $, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./header.module.css";
// import { NexaSoftLogo } from '../icons/qwik';

import { MUIMenuIcon, MUITypography } from "~/integrations/react/mui";
import NexaSoftLogo from "~/assets/img/Logos Nexasoft/Blue (small).png";

export default component$(() => {
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
    // {
    //   name: "Blog",
    //   route: "/blog",
    // },
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
          fontSize="large"
          host:onClick$={() => handleClick()}
          sx={{ display: { md: "none", sm: "block" } }}
          className={styles.dropdownMobile}
        />
        <div class={styles.logo}>
          <Link href="/" title="NexaSoft SAS">
            <img src={NexaSoftLogo} height={50} width={210} />
          </Link>
        </div>

        <ul class="">
          {navItems.map((item, index) => {
            const { name, route } = item;
            return (
              <li key={index}>
                <Link href={route}>
                  <MUITypography
                    className=""
                    fontSize={"1.125rem"}
                    variant="body1"
                  >
                    {name}
                  </MUITypography>
                </Link>
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
          <ul class="">
            {navItems.map((item, index) => {
              const { name, route } = item;
              return (
                <li key={index}>
                  <Link href={route}>
                    <MUITypography
                      className=""
                      fontSize={"1rem"}
                      variant="body2"
                    >
                      {name}
                    </MUITypography>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
});
