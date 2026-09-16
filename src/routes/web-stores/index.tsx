import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SERVICES_CATALOG } from "~/const/services";
import { ServiceDetailCard } from "~/components/services/service-detail-card";

export const head: DocumentHead = {
  title: "Vitrinas Virtuales | NexaSoft SAS",
  meta: [
    {
      name: "description",
      content: "Vitrinas virtuales optimizadas para exhibir tu catálogo con WhatsApp checkout integrado, panel de administración y diseño a medida.",
    },
  ],
};

export default component$(() => {
  const service = SERVICES_CATALOG.find((s) => s.id === "web-stores")!;

  return (
    <div class="container container-center flex flex-col justify-center items-center py-16 px-4 relative min-h-[85vh]">
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="max-w-4xl mx-auto text-center mb-12">
        <h1 class="text-4xl sm:text-5xl font-bold mb-6">
          Vitrinas <span class="heroGradient">Virtuales</span>
        </h1>
        <p class="text-xl text-gray-300 leading-relaxed font-light">
          En NexaSoft SAS, creamos Vitrinas Virtuales para llevar tus productos
          y servicios al mundo digital con diseños personalizados y
          cautivadores. Resaltamos la singularidad de tus ofertas, brindando una
          experiencia de compra inmersiva y atractiva. Desde exhibir tu catálogo
          hasta facilitar la conversión directa con WhatsApp checkout integrado,
          optimizadas para maximizar ventas con soporte formal.
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
