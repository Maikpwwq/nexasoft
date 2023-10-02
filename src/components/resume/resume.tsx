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
    {
      name: 'Diseño Web a medida',
      icon: <MUIDesignServicesIcon fontSize="large" className="me-3" />,
    },
    {
      name: 'Sitio Web Informativo',
      icon: <MUILaptopMacIcon fontSize="large" className="me-3" />,
    },
    {
      name: 'Vitrinas virtuales',
      icon: <MUIPhonelinkIcon fontSize="large" className="me-3" />,
    },
    {
      name: 'Tiendas Online de Comercio Electrónico',
      icon: <MUILocalGroceryStoreIcon fontSize="large" className="me-3" />,
    },
    {
      name: 'Paginas Web Corporativas',
      icon: <MUICastForEducationIcon fontSize="large" className="me-3" />,
    },
    {
      name: 'Market Places',
      icon: <MUIStoreIcon fontSize="large" className="me-3" />,
    },
    {
      name: 'Aplicativos',
      icon: <MUIAppShortcutIcon fontSize="large" className="me-3" />,
    }
  ]

  return (
    <features id="resume-section" class={[styles.resume]}>
      <div class="container container-blue">
        <div class={["mt-1", styles.resumeList]}>
          <MUITypography variant="h2" align="center" className={styles.title}>
            Soluciones de <span class="highlight">desarrollo Web</span> en
            Colombia
          </MUITypography>
          <ul class="mt-6 mb-6">
            { webServices.map((service, index)=>{
              const {name, icon} = service
              return (
                <li key={index} class={[styles.listItem, "my-2"]}>
                  <a href="#products-section" >
                  {icon} {name}
                  </a>
                </li>
              )          
            })}
          </ul>
        </div>
      </div>
    </features>
  );
});
