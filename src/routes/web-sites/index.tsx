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
          Sitio Web <span class="highlight">Informativo</span>
        </MUITypography>
        <p class="text-xl px-4 mt-4 text-center">
          En NexaSoft SAS, creamos Sitios Web Informativos impactantes para
          cautivar a tu audiencia. Nuestras páginas informativas están diseñadas
          para transmitir tu mensaje de manera clara y atractiva. Desde capturar
          clientes potenciales hasta promocionar productos, nuestro enfoque en
          el diseño a medida garantiza resultados impresionantes. Convierte
          visitantes en clientes comprometidos y aumenta tu conversión con
          nuestras Sitios Web Informativos de alta calidad. ¡Potencia tu
          presencia en línea hoy!
        </p>
      </div>
    </div>
  );
});
