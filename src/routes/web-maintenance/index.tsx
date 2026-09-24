import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SERVICES_CATALOG } from "~/const/services";
import { ServiceDetailCard } from "~/components/services/service-detail-card";
import { ServiceHeader } from "~/components/services/service-header";

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

      <ServiceHeader
        titlePrefix="Mantenimiento y"
        highlightText="Soporte Continuo"
        description="En NexaSoft SAS, sostenemos y garantizamos la salud de las plataformas que ya operan en tu negocio. Brindamos soporte técnico prioritario, monitoreo activo de disponibilidad, copias de seguridad continuas y resolución de incidencias con contrato formal y SLA, asegurando que tu plataforma permanezca segura, actualizada y siempre disponible para tus clientes."
      />

      {service.richSolution && (
        <div class="w-full flex flex-col items-center gap-10 mt-16 mb-20">
          <h2 class="text-2xl sm:text-3xl font-bold text-white mb-12 text-center">
            Solución y soporte{" "}
            <span
              style={{
                color: service.cyberpunkTheme?.color ?? "#ac7ff4",
                textShadow: `0 0 16px rgba(${service.cyberpunkTheme?.rgb ?? "172, 127, 244"}, 0.45)`,
              }}
            >
              incluido
            </span>
          </h2>
          <ServiceDetailCard
            solution={service.richSolution}
            theme={service.cyberpunkTheme}
          />
        </div>
      )}
    </div>
  );
});
