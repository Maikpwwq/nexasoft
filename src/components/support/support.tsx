import { component$ } from "@builder.io/qwik";
import styles from "./support.module.css";

// import { MUITypography } from "~/integrations/react/mui";
import CHCoraSoft from "~/assets/img/logos/Logo_Fondo_Blanco_Otros.png";
import CCB from "~/assets/img/logos/Logo_Cámara_de_Comercio_de_Bogotá_CCB.png";
import Fedesoft from "~/assets/img/logos/logo-fedesoft-Color.png";
import MarcaPais from "~/assets/img/logos/logo_Marca_país_Colombia.png";

export default component$(() => {
  const supportLogos = [
    // "#products-section"
    {
      name: "Logo Chicó corazón de software",
      icon: CHCoraSoft,
      width: 180,
    },
    {
      name: "Logo Cámara de Comercio de Bogotá",
      icon: CCB,
      width: 180,
    },
    {
      name: "Logo Fedesoft",
      icon: Fedesoft,
      width: 180,
    },
    {
      name: "Logo Marca país Colombia",
      icon: MarcaPais,
      width: 90,
    },
  ];

  return (
    <support id="support-section" class={[styles.support]}>
      <div class="container">
        <ul class={[styles.supportList]}>
          {/* <MUITypography variant="h4" align="center" className={styles.title}>
            Apoya
          </MUITypography> */}
          {supportLogos.map((support, index) => {
            const { icon, name, width } = support;
            return (
              <li key={index} class={[styles.listItem, "mx-3"]}>
                <img src={icon} alt={name} width={width} height={60} />
              </li>
            );
          })}
        </ul>
      </div>
    </support>
  );
});
