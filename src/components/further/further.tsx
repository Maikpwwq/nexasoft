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

const furtherItems: Array<any> = [
  {
    icon: <MUISavedSearchIcon fontSize="large" className="me-3" />,
    title: "Posicionamiento SEO para destacar en los motores de búsqueda.",
  },
  {
    icon: <MUIOpenInBrowserIcon fontSize="large" className="me-3" />,
    title: "Control total con Administradores de Contenidos.",
  },
  {
    icon: <MUIIntegrationInstructionsIcon fontSize="large" className="me-3" />,
    title: "Actualización para mantener tu plataforma al día.",
  },
  {
    icon: <MUIDeveloperBoardIcon fontSize="large" className="me-3" />,
    title: "Optimización de recursos y procesos.",
  },
  {
    icon: <MUIBrandingWatermarkIcon fontSize="large" className="me-3" />,
    title: "Construcción de una identidad de marca sólida en la web.",
  },
  {
    icon: <MUISecurityIcon fontSize="large" className="me-3" />,
    title: "Automatiza y refuerza tu seguridad en línea.",
  },
];

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
            {furtherItems.length > 0 &&
              furtherItems.map((item, index) => {
                const { icon, title } = item;
                return (
                  <li key={index} class={[styles.listItem, "my-2"]}>
                    {icon}
                    {title}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </further>
  );
});
