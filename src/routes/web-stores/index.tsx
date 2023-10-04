import { component$ } from "@builder.io/qwik";
import { MUITypography } from "~/integrations/react/mui";

export default component$(() => {
  return (
    <div class="container container-center flex justify-center" style={{}}>
      <div class="flex flex-col justify-center items-center relative">
        <div role="presentation" class="ellipsis"></div>
        <div role="presentation" class="ellipsis ellipsis-purple"></div>
        <MUITypography
          variant="h3"
          align="center"
          className="font-bold mx-auto m-5 w-100"
        >
          Vitrinas <span class="highlight">Virtuales</span>
        </MUITypography>
        <p class="text-xl px-4 mt-4 text-center">
          En NexaSoft SAS, creamos Vitrinas Virtuales para llevar tus productos y servicios al
          mundo digital con diseños personalizados y cautivadores. Resaltamos la
          singularidad de tus ofertas, brindando una experiencia de compra
          inmersiva y atractiva. Desde exhibir tu catálogo hasta facilitar la
          conversión, nuestras Vitrinas Virtuales optimizadas garantizan
          resultados excepcionales. ¡Eleva tu negocio en línea al siguiente
          nivel y destaca entre la competencia con nosotros!
        </p>
      </div>
    </div>
  );
});
