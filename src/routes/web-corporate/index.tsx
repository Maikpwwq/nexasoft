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
          className="font-bold mx-auto m-5 w-100"
        >
          Paginas Web <span class="highlight">Corporativas</span>
        </MUITypography>
        <p class="text-xl px-4 mt-4 text-center">
          En NexaSoft SAS, creamos Paginas Web Corporativas que destacan con un
          diseño atractivo y funcional, integración segura de tus servicios.
          Desde la presentación corporativa hasta la experiencia del cliente,
          nuestras páginas web brindan excelencia. Convierte visitantes en
          socios leales y expande tu presencia en línea con nosotros. ¡Potencia
          tu imagen corporativa en el mundo digital!
        </p>
      </div>
    </div>
  );
});
