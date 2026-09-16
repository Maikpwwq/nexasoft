import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SERVICES_CATALOG } from "~/const/services";
import { ServiceDetailCard } from "~/components/services/service-detail-card";

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

      <div class="max-w-4xl mx-auto text-center mb-12">
        <h1 class="text-4xl sm:text-5xl font-bold mb-6">
          Aplicativos <span class="heroGradient">Web Progresivos</span>
        </h1>
        <p class="text-xl text-gray-300 leading-relaxed font-light">
          En NexaSoft SAS, potenciamos tu productividad con Aplicativos Web
          Progresivos que digitalizan tus procesos internos. Nuestra experiencia
          se traduce en eficientes soluciones personalizadas que optimizan tus
          operaciones. Desde la gestión de datos hasta la automatización de
          tareas críticas, con soporte formal y contratos de servicio.
        </p>
      </div>

      {service.richSolution && (
        <div class="w-full flex flex-col items-center mt-2">
          <h2 class="text-2xl font-bold text-white mb-6 text-center">
            Solución y alcance <span class="text-[#ac7ff4]">incluido</span>
          </h2>
          <ServiceDetailCard solution={service.richSolution} />
        </div>
      )}
    </div>
  );
});
