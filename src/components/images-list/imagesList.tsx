import { component$ } from "@builder.io/qwik";
import { MUIBox, MUITypography, ImagesList } from "~/integrations/react/mui";
import styles from "./imagesList.module.css";

export default component$(() => {
  return (
    <imageslist>
      <div class="container container-center">
        <MUITypography variant="h3" align="center" className={styles.title}>
          ¡Despierta el <span class="highlight"> potencial </span> de tu
          negocio!
        </MUITypography>
        <MUITypography className="mt-4 mb-6 text-xl" variant="body1">
          Contáctanos y descubre nuestras poderosas soluciones de software.
        </MUITypography>
        <MUIBox className="w-100 flex justify-center">
          <ImagesList />
        </MUIBox>
      </div>
    </imageslist>
  );
});
