import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SERVICES_CATALOG } from "~/const/services";
import { ServiceDetailCard } from "~/components/services/service-detail-card";

export const head: DocumentHead = {
  title: "Diseño Web y UI/UX | NexaSoft SAS",
  meta: [
    {
      name: "description",
      content: "Diseño gráfico y de interfaces de usuario (UI/UX) a medida: prototipado de alta fidelidad, identidad visual y diseño de experiencia de usuario.",
    },
  ],
};

export default component$(() => {
  const service = SERVICES_CATALOG.find((s) => s.id === "web-design")!;

  return (
    <div class="container container-center flex flex-col justify-center items-center py-16 px-4 relative min-h-[85vh]">
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="max-w-4xl mx-auto text-center mb-12">
        <h1 class="text-4xl sm:text-5xl font-bold mb-6">
          Diseño Gráfico e <span class="highlight">Interfaces UI/UX</span>
        </h1>
        <p class="text-xl text-gray-300 leading-relaxed font-light">
          En NexaSoft SAS, conceptualizamos la identidad visual y la experiencia interactiva
          de tu producto digital. Nos enfocamos exclusivamente en el diseño gráfico,
          arquitectura de información y diseño de interfaces (UI/UX) de alta fidelidad,
          entregando prototipos navegables y especificaciones visuales claras listas
          para ser implementadas, respaldadas con contrato formal.
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
