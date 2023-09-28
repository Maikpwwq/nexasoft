import { component$ } from "@builder.io/qwik";
import styles from "./advantages.module.css";

import {
  MUITypography,
  MUILanguageIcon,
  MUIMonitorHeartIcon,
  MUIManageHistoryIcon,
  MUIAspectRatioIcon,
  MUISmartButtonIcon,
  MUILocalPoliceIcon,
} from "~/integrations/react/mui";

export default component$(() => {
  return (
    <advantages id="advantages-section" class={[styles.advantages]}>
      <div class="container container-blue">
        <div class={["mt-1", styles.advantagesList]}>
          <MUITypography variant="h2" align="center" className={styles.title}>
            <span class="highlight">Maximiza tu Éxito</span> en Línea con Todos
            los <span class="highlight">Beneficios</span> que Tenemos para Ti!
          </MUITypography>
          <ul class="mt-6 mb-6">
            <li class={[styles.listItem, "my-2"]}>
              <MUISmartButtonIcon fontSize="large" className="me-3" /> Diseño intuitivo y
              atractivo para una Experiencia de Usuario excepcional.
            </li>
            <li class={[styles.listItem, "my-2"]}>
              <MUIAspectRatioIcon fontSize="large" className="me-3" /> Contenidos Responsivos
              para una visualización perfecta en todos los dispositivos.
            </li>
            <li class={[styles.listItem, "my-2"]}>
              <MUIMonitorHeartIcon fontSize="large" className="me-3" /> Entrega rápida con
              resultados notables.
            </li>
            <li class={[styles.listItem, "my-2"]}>
              <MUILocalPoliceIcon fontSize="large" className="me-3" /> Seguridad garantizada para
              proteger tu negocio en línea.
            </li>
            <li class={[styles.listItem, "my-2"]}>
              <MUILanguageIcon fontSize="large" className="me-3" /> Sitios web modernos que
              impulsan la interacción fluida.
            </li>
            <li class={[styles.listItem, "my-2"]}>
              <MUIManageHistoryIcon fontSize="large" className="me-3" /> Soporte experto en todo
              momento para tu tranquilidad.
            </li>
          </ul>
        </div>
      </div>
    </advantages>
  );
});
