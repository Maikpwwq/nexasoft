import { component$, $, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import styles from "./header.module.css";
import NexaSoftLogo from "~/assets/img/Logos Nexasoft/Blue (small).png";
import { NavDropdown, MobileNavDropdown } from "./nav-dropdown";

export default component$(() => {
  const state = useStore({
    visible: false,
  });
  const loc = useLocation();

  const handleClick = $(() => {
    state.visible = !state.visible;
  });

  // Task 1: Close mobile menu on scroll
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    const handleScroll = () => {
      if (state.visible) {
        state.visible = false;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    cleanup(() => window.removeEventListener("scroll", handleScroll));
  });

  const navItems = [
    {
      name: "Nuestros Productos",
      route: "/#products-section",
    },
    // "Nuestros Servicios" is now handled via a custom component check
    {
      name: "Nuestros Servicios",
      route: "/services", // Placeholder, won't be used directly for link
      isDropdown: true,
    },
    {
      name: "Acerca de nosotros",
      route: "/about/", // Ensure trailing slash consistency if needed, checking existing
    },
    {
      name: "Blog",
      route: "/blog/",
    },
    {
      name: "Contacto",
      route: "/#contact-section",
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
            <img src={NexaSoftLogo} height={50} width={210} alt="NexaSoft Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul class="">
          {navItems.map((item, index) => {
            if (item.isDropdown) {
              return (
                <li key={index}>
                  <NavDropdown />
                </li>
              );
            }
            return (
              <li key={index}>
                <Link
                  href={item.route}
                  class={{
                    [styles.navLink]: true,
                    [styles.active]: loc.url.pathname === item.route || loc.url.pathname === item.route + '/', // Simple active check
                  }}
                >
                  <span style={{ fontSize: "1.125rem", fontFamily: "Roboto, Helvetica, Arial, sans-serif" }}>
                    {item.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu */}
        {state.visible && (
          <div class={styles.mobileMenu}>
            <ul class="">
              {navItems.map((item, index) => {
                // For mobile, maybe we want to expand services or just show links?
                // Request said "Map services... as sub-items".
                // Let's implement a simple expansion for mobile using the same data.
                if (item.isDropdown) {
                  return (
                    <li key={index}>
                      <MobileNavDropdown />
                    </li>
                  )
                }

                return (
                  <li key={index}>
                    <Link href={item.route} class="py-2 block">
                      <span
                        class=""
                        style={{ fontSize: "1rem", fontFamily: "Roboto, Helvetica, Arial, sans-serif" }}
                      >
                        {item.name}
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
