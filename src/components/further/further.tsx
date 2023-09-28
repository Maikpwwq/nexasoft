import { component$ } from "@builder.io/qwik";
import styles from "./further.module.css";

import {
  MUITypography,
  MUIOpenInBrowserIcon,
  MUISavedSearchIcon,
  MUIIntegrationInstructionsIcon,
  MUIDeveloperBoardIcon,
  MUIBrandingWatermarkIcon,
  MUISecurityIcon,
} from "~/integrations/react/mui";

export default component$(() => {
  return (
    <further id="further-section" class={[styles.further]}>
      <div class="container container-blue">
        <div class={["mt-1", styles.furtherList]}>
          <MUITypography variant="h2" align="center" className={styles.title}>
            ¡Desbloquea tu <span class="highlight">Éxito Digital</span> con
            Nuestros <span class="highlight">Servicios Adicionales!</span>
          </MUITypography>
          <ul class="mt-6 mb-6">
            <li class={[styles.listItem, "my-2"]}>
              <MUISavedSearchIcon fontSize="large" className="me-3" /> Posicionamiento SEO para
              destacar en los motores de búsqueda.
            </li>
            <li class={[styles.listItem, "my-2"]}>
              <MUIOpenInBrowserIcon fontSize="large" className="me-3" /> Control total con
              Administradores de Contenidos.
            </li>
            <li class={[styles.listItem, "my-2"]}>
              <MUIIntegrationInstructionsIcon fontSize="large" className="me-3" /> Actualización
              para mantener tu plataforma al día.
            </li>
            <li class={[styles.listItem, "my-2"]}>
              <MUIDeveloperBoardIcon fontSize="large" className="me-3" /> Optimización de
              recursos y procesos.
            </li>
            <li class={[styles.listItem, "my-2"]}>
              <MUIBrandingWatermarkIcon className="me-3" /> Construcción de una
              identidad de marca sólida en la web.
            </li>
            <li class={[styles.listItem, "my-2"]}>
              <MUISecurityIcon className="me-3" /> Automatiza y refuerza tu
              seguridad en línea.
            </li>
          </ul>
        </div>
      </div>
    </further>
  );
});
