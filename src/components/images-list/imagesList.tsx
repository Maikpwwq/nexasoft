import { component$ } from "@builder.io/qwik";
import { MUIBox, MUITypography, ImagesList } from "~/integrations/react/mui";
import styles from "./imagesList.module.css";

export default component$(() => {
  return (
    <imageslist>
      <div class="container container-center">
        <MUITypography variant="h3" align="center" className={styles.title} >
          ¡Despierta el potencial de tu negocio!
          <br />
          Contáctanos y descubre nuestras
          <br />
          <span class="highlight"> poderosas soluciones de software</span>.
          <br />
        </MUITypography>
        <MUIBox className="w-100 flex justify-center">
          <ImagesList />
        </MUIBox>
      </div>
    </imageslist>
  );
});
