import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SERVICES_CATALOG } from "~/const/services";
import { ServiceDetailCard } from "~/components/services/service-detail-card";
import { ServiceHeader } from "~/components/services/service-header";

export const head: DocumentHead = {
  title: "Sitio Web Informativo | NexaSoft SAS",
  meta: [
    {
      name: "description",
      content: "Desarrollo de sitios web informativos profesionales con diseño a medida, optimización SEO y soporte formal en Colombia.",
    },
  ],
};

export default component$(() => {
  const service = SERVICES_CATALOG.find((s) => s.id === "web-sites")!;

  return (
    <div class="container container-center flex flex-col justify-center items-center py-16 px-4 relative min-h-[85vh]">
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <ServiceHeader
        titlePrefix="Sitio Web"
        highlightText="Informativo"
        description="En NexaSoft SAS, creamos Sitios Web Informativos impactantes para cautivar a tu audiencia. Nuestras páginas informativas están diseñadas para transmitir tu mensaje de manera clara y atractiva. Desde capturar clientes potenciales hasta promocionar productos, nuestro enfoque en el diseño a medida está orientado a maximizar conversión y visibilidad con respaldo legal y contrato de servicios."
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
