import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SERVICES_CATALOG } from "~/const/services";
import { ServiceDetailCard } from "~/components/services/service-detail-card";

export const head: DocumentHead = {
  title: "Tiendas Online y E-commerce | NexaSoft SAS",
  meta: [
    {
      name: "description",
      content: "Tiendas online completas con pasarelas de pago integradas, gestión de inventario, panel administrativo y soporte formal en Colombia.",
    },
  ],
};

export default component$(() => {
  const service = SERVICES_CATALOG.find((s) => s.id === "e-commerces")!;

  return (
    <div class="container container-center flex flex-col justify-center items-center py-16 px-4 relative min-h-[85vh]">
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="max-w-4xl mx-auto text-center mb-12">
        <h1 class="text-4xl sm:text-5xl font-bold mb-6">
          Tiendas Online de <span class="heroGradient">Comercio Electrónico</span>
        </h1>
        <p class="text-xl text-gray-300 leading-relaxed font-light">
          En NexaSoft SAS, creamos Tiendas Online de Comercio Electrónico que
          potencian tus ventas en línea. Nuestras soluciones personalizadas
          incluyen la integración de pasarelas de pago seguras para garantizar
          transacciones sin problemas. Diseñamos experiencias de compra
          atractivas y funcionales con inventario automatizado y panel administrativo 24/7.
        </p>
      </div>

      {service.richSolution && (
        <div class="w-full flex flex-col items-center mt-2">
          <h2 class="text-2xl font-bold text-white mb-6 text-center">
            Solución y soporte <span class="text-[#ac7ff4]">incluido</span>
          </h2>
          <ServiceDetailCard solution={service.richSolution} />
        </div>
      )}
    </div>
  );
});
