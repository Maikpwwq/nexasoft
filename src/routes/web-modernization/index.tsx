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
        <div class="w-full flex flex-col items-center mt-12">
          <h2 class="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Solución y soporte <span class="text-[#ac7ff4]">incluido</span>
          </h2>
          <ServiceDetailCard solution={service.richSolution} />
        </div>
      )}
    </div>
  );
});
