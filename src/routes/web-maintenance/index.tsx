import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SERVICES_CATALOG } from "~/const/services";
import { ServiceDetailCard } from "~/components/services/service-detail-card";

export const head: DocumentHead = {
  title: "Mantenimiento y Soporte Continuo | NexaSoft SAS",
  meta: [
    {
      name: "description",
      content: "Planes de soporte técnico y mantenimiento web mensual: disponibilidad continua, backups periódicos, monitoreo y atención prioritaria para empresas.",
    },
  ],
};

export default component$(() => {
  const service = SERVICES_CATALOG.find((s) => s.id === "web-maintenance")!;

  return (
    <div class="container container-center flex flex-col justify-center items-center py-16 px-4 relative min-h-[85vh]">
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="max-w-4xl mx-auto text-center mb-12">
        <h1 class="text-4xl sm:text-5xl font-bold mb-6">
          Mantenimiento y <span class="highlight">Soporte Continuo</span>
        </h1>
        <p class="text-xl text-gray-300 leading-relaxed font-light">
          En NexaSoft SAS, sostenemos y garantizamos la salud de las plataformas que ya operan
          en tu negocio. Brindamos soporte técnico prioritario, monitoreo activo de
          disponibilidad, copias de seguridad continuas y resolución de incidencias con
          contrato formal y SLA, asegurando que tu plataforma permanezca segura,
          actualizada y siempre disponible para tus clientes.
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
