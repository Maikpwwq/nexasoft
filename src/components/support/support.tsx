import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./support.module.css";
import supportCss from "./support.module.css?inline";

// import { MUITypography } from "~/integrations/react/mui";
import CHCoraSoft from "~/assets/img/logos/Logo_Fondo_Blanco_Otros.png";
import CCB from "~/assets/img/logos/Logo_Cámara_de_Comercio_de_Bogotá_CCB.png";
import Fedesoft from "~/assets/img/logos/logo-fedesoft-Color.png";
import MarcaPais from "~/assets/img/logos/logo_Marca_país_Colombia.png";

export default component$(() => {
  useStyles$(supportCss);

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
    <support id="support-section" class={[styles.support, "bg-white w-full flex text-[#1d2033] py-6 my-0"]}>
      <div class="container mx-auto px-4">
        <ul class={[styles.supportList, "flex flex-row justify-center items-center flex-wrap gap-4 md:gap-8 max-w-[1200px] mx-auto py-2"]}>
          {/* <MUITypography variant="h4" align="center" className={styles.title}>
            Apoya
          </MUITypography> */}
          {supportLogos.map((support, index) => {
            const { icon, name, width } = support;
            return (
              <li key={index} class={[styles.listItem, "flex items-center mx-3 my-2"]}>
                <img src={icon} alt={name} width={width} height={60} />
              </li>
            );
          })}
        </ul>
      </div>
    </support>
  );
});
