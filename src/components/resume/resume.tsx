import { component$ } from "@builder.io/qwik";
import styles from "./resume.module.css";

import {
  MUITypography,
  MUIDesignServicesIcon,
  MUIPhonelinkIcon,
  MUILaptopMacIcon,
  MUICastForEducationIcon,
  MUILocalGroceryStoreIcon,
  MUIStoreIcon,
  MUIAppShortcutIcon,
} from "~/integrations/react/mui";

export default component$(() => {
  const webServices = [
    // "#products-section"
    {
      name: "Diseño Web a medida",
      icon: <MUIDesignServicesIcon fontSize="large" class="me-3" />,
      route: "/web-design/",
    },
    {
      name: "Sitio Web Informativo",
      icon: <MUILaptopMacIcon fontSize="large" class="me-3" />,
      route: "/web-sites/",
    },
    {
      name: "Vitrinas virtuales",
      icon: <MUIPhonelinkIcon fontSize="large" class="me-3" />,
      route: "/web-stores/",
    },
    {
      name: "Tiendas Online de Comercio Electrónico",
      icon: <MUILocalGroceryStoreIcon fontSize="large" class="me-3" />,
      route: "/e-commerces/",
    },
    {
      name: "Paginas Web Corporativas",
      icon: <MUICastForEducationIcon fontSize="large" class="me-3" />,
      route: "/web-corporate/",
    },
    {
      name: "Market Places",
      icon: <MUIStoreIcon fontSize="large" class="me-3" />,
      route: "/marketplaces/",
    },
    {
      name: "Aplicativos",
      icon: <MUIAppShortcutIcon fontSize="large" class="me-3" />,
      route: "/web-apps/",
    },
  ];

  return (
    <features id="resume-section" class={[styles.resume]}>
      <div class="container container-blue">
        <div class={["mt-1", styles.resumeList]}>
          <MUITypography variant="h2" align="center" class={styles.title}>
            Soluciones de <span class="highlight">desarrollo Web</span> en
            Colombia
          </MUITypography>
          <ul class="mt-6 mb-6">
            {webServices.map((service, index) => {
              const { name, icon, route } = service;
              return (
                <li key={index} class={[styles.listItem, "my-2"]}>
                  <a href={route}>
                    {icon} {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </features>
  );
});
