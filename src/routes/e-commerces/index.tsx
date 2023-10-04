import { component$ } from "@builder.io/qwik";
import { MUITypography } from "~/integrations/react/mui";

export default component$(() => {
  return (
    <div class="container container-center flex justify-center" style={{height: '80vh'}}>
      <div class="flex flex-col justify-center items-center relative">
        <div role="presentation" class="ellipsis"></div>
        <div role="presentation" class="ellipsis ellipsis-purple"></div>
        <MUITypography
          variant="h3"
          align="center"
          className="font-bold mx-auto m-5 w-100"
        >
          Tiendas Online de <span class="highlight">Comercio Electrónico</span>
        </MUITypography>
        <p class="text-xl px-4 mt-4 text-center">
          En NexaSoft SAS, creamos Tiendas Online de Comercio Electrónico que
          potencian tus ventas en línea. Nuestras soluciones personalizadas
          incluyen la integración de pasarelas de pago seguras para garantizar
          transacciones sin problemas. Diseñamos experiencias de compra
          atractivas y funcionales que convierten visitantes en clientes leales.
          Desde la gestión de inventario hasta la seguridad de datos, nuestra
          atención al detalle garantiza un rendimiento excepcional. ¡Expande tu
          presencia en línea con nuestras Tiendas Online de Comercio
          Electrónico!
        </p>
      </div>
    </div>
  );
});
