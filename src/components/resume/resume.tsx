import { component$ } from "@builder.io/qwik";
import styles from "./resume.module.css";

export default component$(() => {
  const webServices = [
    {
      name: "Diseño Web a medida",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>,
      route: "/web-design/",
    },
    {
      name: "Sitio Web Informativo",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
      route: "/web-sites/",
    },
    {
      name: "Vitrinas virtuales",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>,
      route: "/web-stores/",
    },
    {
      name: "Tiendas Online de Comercio Electrónico",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>,
      route: "/e-commerces/",
    },
    {
      name: "Paginas Web Corporativas",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="22"></line><line x1="15" y1="22" x2="15" y2="22"></line><line x1="12" y1="22" x2="12" y2="22"></line><line x1="12" y1="2" x2="12" y2="2"></line><line x1="4" y1="10" x2="20" y2="10"></line><line x1="4" y1="14" x2="20" y2="14"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>,
      route: "/web-corporate/",
    },
    {
      name: "Market Places",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>,
      route: "/marketplaces/",
    },
    {
      name: "Aplicativos",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>,
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
      <div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[var(--qwik-dark-background)] pointer-events-none"></div>
    </features>
  );
});
