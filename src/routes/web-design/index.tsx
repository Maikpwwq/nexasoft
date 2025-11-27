import { component$ } from "@builder.io/qwik";
import { MUITypography } from "~/integrations/react/mui";

export default component$(() => {
  return (
    <div
      class="container container-center flex justify-center"
      style={{ height: "80vh" }}
    >
      <div class="flex flex-col justify-center items-center relative">
        <div role="presentation" class="ellipsis"></div>
        <div role="presentation" class="ellipsis ellipsis-purple"></div>
        <MUITypography
          variant="h3"
          align="center"
          class="font-bold mx-auto m-5 w-100"
        >
          Diseño Web <span class="highlight">a medida</span>
        </MUITypography>
        <p class="text-xl px-4 mt-4 text-center">
          En NexaSoft SAS, convierte visitantes en clientes leales con nuestro
          Diseño Web a medida. Creamos presencias en línea únicas y poderosas
          que reflejan tu marca y se adaptan a tus necesidades. Garantizamos
          calidad, creatividad y usabilidad para una experiencia excepcional.
          ¡Destaca en el mundo digital con nosotros!
        </p>
      </div>
    </div>
  );
});
