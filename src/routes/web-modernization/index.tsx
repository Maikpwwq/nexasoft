import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SERVICES_CATALOG } from "~/const/services";
import { ServiceDetailCard } from "~/components/services/service-detail-card";
import { ServiceHeader } from "~/components/services/service-header";

export const head: DocumentHead = {
  title: "Modernización y Rendimiento Web | NexaSoft SAS",
  meta: [
    {
      name: "description",
      content: "Modernización de plataformas web existentes: auditoría técnica, optimización de Core Web Vitals, refactorización de código y nuevas funcionalidades.",
    },
  ],
};

export default component$(() => {
  const service = SERVICES_CATALOG.find((s) => s.id === "web-modernization")!;

  return (
    <div class="container container-center flex flex-col justify-center items-center py-16 px-4 relative min-h-[85vh]">
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <ServiceHeader
        titlePrefix="Modernización y"
        highlightText="Rendimiento Web"
        description="En NexaSoft SAS, implementamos nuevas capacidades tecnológicas en tu plataforma actual. Si tu sitio o sistema existente sufre de lentitud, código obsoleto o mala experiencia de usuario, nuestro equipo de ingeniería realiza auditorías técnicas a fondo, optimización de velocidad (Core Web Vitals) y modernización modular para potenciar el posicionamiento y la efectividad operativa de tu empresa."
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
