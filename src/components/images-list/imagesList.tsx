import { component$ } from "@builder.io/qwik";
import { MUIBox, MUITypography, ImagesList } from "~/integrations/react/mui";
import styles from "./imagesList.module.css";

export default component$(() => {
  return (
    <imageslist class="relative">
      <div class="container container-center">
        <div role="presentation" class="ellipsis"></div>
        <div role="presentation" class="ellipsis ellipsis-purple"></div>
        <MUITypography variant="h3" align="center" className={styles.title}>
          ¡Despierta el <span class="highlight"> potencial </span> de tu
          negocio!
        </MUITypography>
        <MUITypography className="pt-4 pb-6 text-xl" variant="body1">
          Contáctanos y descubre nuestras poderosas soluciones de software.
        </MUITypography>
        <MUIBox className="w-100 flex justify-center">
          <ImagesList />
        </MUIBox>
      </div>
    </imageslist>
  );
});
