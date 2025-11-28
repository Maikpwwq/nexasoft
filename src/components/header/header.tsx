import { component$, $, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./header.module.css";
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
        <button
          onClick$={handleClick}
          class={[styles.dropdownMobile, "md:hidden block"]}
          aria-label="Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>

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
                  <span
                    class=""
                    style={{ fontSize: "1.125rem", fontFamily: "Roboto, Helvetica, Arial, sans-serif" }}
                  >
                    {name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {state.visible && (
          <div class={styles.mobileMenu}>
            <ul class="">
              {navItems.map((item, index) => {
                const { name, route } = item;
                return (
                  <li key={index}>
                    <Link href={route}>
                      <span
                        class=""
                        style={{ fontSize: "1rem", fontFamily: "Roboto, Helvetica, Arial, sans-serif" }}
                      >
                        {name}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
});
