import { component$ } from "@builder.io/qwik";
import type { ServiceItem } from "~/const/services";

interface ServiceCardSimpleProps {
  service: ServiceItem;
}

export const ServiceCardSimple = component$<ServiceCardSimpleProps>(({ service }) => {
  return (
    <a
      href={service.route}
      class="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#0f0a28]/80 border border-[#ac7ff4]/30 hover:border-[#ac7ff4] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(172,127,244,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ac7ff4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0e1a]"
      aria-label={`Ver solución de ${service.name}`}
    >
      <div>
        <div class="flex items-center gap-3.5 mb-1">
          <div class="w-12 h-12 flex-shrink-0 rounded-xl bg-[#ac7ff4]/10 border border-[#ac7ff4]/20 flex items-center justify-center text-[#ac7ff4] group-hover:bg-[#ac7ff4]/20 group-hover:scale-110 transition-all duration-300">
            {service.iconSvg}
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-white group-hover:text-[#ac7ff4] transition-colors leading-snug">
            {service.name}
          </h3>
        </div>
      </div>

      <div class="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
        <div class="flex flex-wrap gap-1.5">
          {service.keywords.map((tag, i) => (
            <span
              key={i}
              class="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300 font-light"
            >
              {tag}
            </span>
          ))}
        </div>
        <div class="flex items-center text-sm font-semibold text-[#ac7ff4] group-hover:text-white group-hover:translate-x-1 transition-all duration-200 mt-4 pt-2">
          <span>Explorar solución</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 ml-1.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
    </a>
  );
});
