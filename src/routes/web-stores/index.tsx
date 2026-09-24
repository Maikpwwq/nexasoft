import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SERVICES_CATALOG } from "~/const/services";
import { ServiceDetailCard } from "~/components/services/service-detail-card";
import { ServiceHeader } from "~/components/services/service-header";

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

      <ServiceHeader
        titlePrefix="Vitrinas"
        highlightText="Virtuales"
        description="En NexaSoft SAS, creamos Vitrinas Virtuales para llevar tus productos y servicios al mundo digital con diseños personalizados y cautivadores. Resaltamos la singularidad de tus ofertas, brindando una experiencia de compra inmersiva y atractiva. Desde exhibir tu catálogo hasta facilitar la conversión directa con WhatsApp checkout integrado, optimizadas para maximizar ventas con soporte formal."
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
