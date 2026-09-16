import { component$ } from "@builder.io/qwik";
import { SERVICES_CATALOG } from "~/const/services";
import { ServiceCardSimple } from "~/components/services/service-card-simple";

export default component$(() => {
  return (
    <section id="products-section" class="relative w-full py-16 overflow-hidden">
      {/* Alias anchor for any legacy links */}
      <div id="services-section" class="absolute -top-24"></div>
      <div id="resume-section" class="absolute -top-24"></div>

      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center mb-12">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 tracking-tight text-white">
            Desarrollo web <span class="highlight">y soporte especializado</span> en Colombia
          </h2>
          <p class="text-lg sm:text-xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
            Empresa legalmente constituida. Soluciones digitales y plataformas adaptadas a
            corporativos y empresas que necesitan soporte formal de ingeniería, contratos de servicio
            y alta disponibilidad operativa.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {SERVICES_CATALOG.map((service) => (
            <ServiceCardSimple key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* Degradado de transición hacia Further (fondo cian) */}
      <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-[var(--qwik-dark-background)] to-[var(--qwik-light-blue)] pointer-events-none z-20"></div>
    </section>
  );
});
