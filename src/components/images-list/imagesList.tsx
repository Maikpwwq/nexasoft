import { component$ } from "@builder.io/qwik";
import { MUIBox, MUITypography, ImagesList } from "~/integrations/react/mui";
import styles from "./imagesList.module.css";

export default component$(() => {
  return (
    <imageslist class="relative">
      <div class="container">
        <div role="presentation" class="ellipsis"></div>
        <div role="presentation" class="ellipsis ellipsis-purple"></div>
        <MUITypography variant="h2" align="center" className={styles.title}>
          ¡Despierta el <span class="blueHighlight font-bold"> potencial </span>{" "}
          de tu negocio!
        </MUITypography>
        <MUITypography className="py-6 text-xl" align="center" variant="body1">
          Contáctanos y descubre nuestras poderosas soluciones de software.
        </MUITypography>
        <MUIBox className="w-100 flex justify-center">
          <ImagesList />
        </MUIBox>
      </div>
    </imageslist>
  );
});
