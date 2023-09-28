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
  return (
    <features id="resume-section" class={[styles.resume]}>
      <div class="container container-blue">
        <div class={["mt-1", styles.resumeList]}>
          <MUITypography variant="h2" align="center" className={styles.title}>
            Soluciones de <span class="highlight">desarrollo Web</span> en
            Colombia
          </MUITypography>
          <ul class="mt-6 mb-6">
            <li class={[styles.listItem, "my-2"]}>
              <MUIDesignServicesIcon className="me-3" /> Diseño Web a medida
            </li>
            <li class={[styles.listItem, "my-2"]}>
              {" "}
              <MUILaptopMacIcon className="me-3" /> Sitio Web Informativo
            </li>
            <li class={[styles.listItem, "my-2"]}>
              <MUIPhonelinkIcon className="me-3" /> Vitrinas virtuales
            </li>
            <li class={[styles.listItem, "my-2"]}>
              <MUILocalGroceryStoreIcon className="me-3" /> Tiendas Online de
              Comercio Electrónico
            </li>
            <li class={[styles.listItem, "my-2"]}>
              <MUICastForEducationIcon className="me-3" /> Paginas Web
              Corporativas
            </li>
            <li class={[styles.listItem, "my-2"]}>
              <MUIStoreIcon className="me-3" /> Market Places
            </li>
            <li class={[styles.listItem, "my-2"]}>
              <MUIAppShortcutIcon className="me-3" /> Aplicativos
            </li>
          </ul>
        </div>
      </div>
    </features>
  );
});
