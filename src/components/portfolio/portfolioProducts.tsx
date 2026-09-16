import { component$ } from "@builder.io/qwik";
import { SERVICES_CATALOG } from "~/const/services";
import { ServiceCardSimple } from "~/components/services/service-card-simple";
import { ServiceHeader } from "~/components/services/service-header";

export default component$(() => {
  return (
    <section id="products-section" class="relative w-full py-16">
      {/* Alias anchor for any legacy links */}
      <div id="services-section" class="absolute -top-24"></div>
      <div id="resume-section" class="absolute -top-24"></div>

      <div role="presentation" class="ellipsis pointer-events-none"></div>
      <div role="presentation" class="ellipsis ellipsis-purple pointer-events-none"></div>

      <div class="container mx-auto px-4 relative z-10">
        <ServiceHeader
          tag="h2"
          titlePrefix="Desarrollo web"
          highlightText="y soporte especializado"
          titleSuffix="en Colombia"
          description="Empresa legalmente constituida. Soluciones digitales y plataformas adaptadas a corporativos y empresas que necesitan soporte formal de ingeniería, contratos de servicio y alta disponibilidad operativa."
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {SERVICES_CATALOG.map((service) => (
            <ServiceCardSimple key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* Degradado de transición hacia Further (fondo claro/blanco) */}
      <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white pointer-events-none z-20"></div>
    </section>
  );
});
