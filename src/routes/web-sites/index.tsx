import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SERVICES_CATALOG } from "~/const/services";
import { ServiceDetailCard } from "~/components/services/service-detail-card";

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

      <div class="max-w-4xl mx-auto text-center mb-12">
        <h1 class="text-4xl sm:text-5xl font-bold mb-6">
          Sitio Web <span class="highlight">Informativo</span>
        </h1>
        <p class="text-xl text-gray-300 leading-relaxed font-light">
          En NexaSoft SAS, creamos Sitios Web Informativos impactantes para
          cautivar a tu audiencia. Nuestras páginas informativas están diseñadas
          para transmitir tu mensaje de manera clara y atractiva. Desde capturar
          clientes potenciales hasta promocionar productos, nuestro enfoque en
          el diseño a medida está orientado a maximizar conversión y
          visibilidad con respaldo legal y contrato de servicios.
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
