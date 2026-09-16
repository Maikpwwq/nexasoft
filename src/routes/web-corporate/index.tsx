import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SERVICES_CATALOG } from "~/const/services";
import { ServiceDetailCard } from "~/components/services/service-detail-card";

export const head: DocumentHead = {
  title: "Páginas Web Corporativas | NexaSoft SAS",
  meta: [
    {
      name: "description",
      content: "Plataformas web corporativas para administrar procesos específicos de industria, portales empresariales con SLA y soporte formal de ingeniería.",
    },
  ],
};

export default component$(() => {
  const service = SERVICES_CATALOG.find((s) => s.id === "web-corporate")!;

  return (
    <div class="container container-center flex flex-col justify-center items-center py-16 px-4 relative min-h-[85vh]">
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="max-w-4xl mx-auto text-center mb-12">
        <h1 class="text-4xl sm:text-5xl font-bold mb-6">
          Páginas Web <span class="heroGradient">Corporativas</span>
        </h1>
        <p class="text-xl text-gray-300 leading-relaxed font-light">
          En NexaSoft SAS, desarrollamos plataformas web corporativas para empresas
          que necesitan administrar procesos específicos de su industria, mucho más
          allá de una página web informativa simple. Integramos flujos de trabajo
          personalizados, módulos de gestión, seguridad avanzada y soporte formal
          respaldado por contrato legal y acuerdos de nivel de servicio (SLA).
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
