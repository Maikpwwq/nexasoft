import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SERVICES_CATALOG } from "~/const/services";
import { ServiceDetailCard } from "~/components/services/service-detail-card";
import { ServiceHeader } from "~/components/services/service-header";

export const head: DocumentHead = {
  title: "Aplicativos Web Progresivos | NexaSoft SAS",
  meta: [
    {
      name: "description",
      content: "Desarrollo de Aplicativos Web Progresivos (PWA) y sistemas de software empresarial para automatizar y digitalizar operaciones críticas.",
    },
  ],
};

export default component$(() => {
  const service = SERVICES_CATALOG.find((s) => s.id === "web-apps")!;

  return (
    <div class="container container-center flex flex-col justify-center items-center py-16 px-4 relative min-h-[85vh]">
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <ServiceHeader
        titlePrefix="Aplicativos"
        highlightText="Web Progresivos"
        description="En NexaSoft SAS, potenciamos tu productividad con Aplicativos Web Progresivos que digitalizan tus procesos internos. Nuestra experiencia se traduce en eficientes soluciones personalizadas que optimizan tus operaciones. Desde la gestión de datos hasta la automatización de tareas críticas, con soporte formal y contratos de servicio."
      />

      {service.richSolution && (
        <div class="w-full flex flex-col items-center gap-10 mt-16 mb-20">
          <h2 class="text-2xl sm:text-3xl font-bold text-white mb-12 text-center">
            Solución y alcance{" "}
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
