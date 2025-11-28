import { component$ } from "@builder.io/qwik";
import styles from "./resume.module.css";

export default component$(() => {
  const webServices = [
    {
      name: "Diseño Web a medida",
      icon: "🎨",
      route: "/web-design/",
    },
    {
      name: "Sitio Web Informativo",
      icon: "💻",
      route: "/web-sites/",
    },
    {
      name: "Vitrinas virtuales",
      icon: "📱",
      route: "/web-stores/",
    },
    {
      name: "Tiendas Online de Comercio Electrónico",
      icon: "🛒",
      route: "/e-commerces/",
    },
    {
      name: "Paginas Web Corporativas",
      icon: "🏢",
      route: "/web-corporate/",
    },
    {
      name: "Market Places",
      icon: "🏪",
      route: "/marketplaces/",
    },
    {
      name: "Aplicativos",
      icon: "📲",
      route: "/web-apps/",
    },
  ];

  return (
    <features id="resume-section" class={[styles.resume]}>
      <div class="container container-blue">
        <div class={["mt-1", styles.resumeList]}>
          <h2 class={styles.title} style="text-align: center; font-size: 2.5rem; font-weight: bold;">
            Soluciones de <span class="highlight">desarrollo Web</span> en
            Colombia
          </h2>
          <ul class="mt-6 mb-6">
            {webServices.map((service, index) => {
              const { name, icon, route } = service;
              return (
                <li key={index} class={[styles.listItem, "my-2"]}>
                  <a href={route}>
                    <span class="text-3xl me-3">{icon}</span> {name}
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
