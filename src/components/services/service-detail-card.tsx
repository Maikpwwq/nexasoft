import { component$ } from "@builder.io/qwik";
import type { RichSolution } from "~/const/services";

interface ServiceDetailCardProps {
  solution: RichSolution;
}

export const ServiceDetailCard = component$<ServiceDetailCardProps>(({ solution }) => {
  return (
    <div class="rounded-[28px] border border-[#ac7ff4]/40 bg-[#0f0a28]/95 p-6 sm:p-8 max-w-lg w-full shadow-2xl flex flex-col justify-between hover:border-[#ac7ff4] transition-all duration-300">
      <div>
        <div class="flex items-center justify-between gap-3 mb-3">
          <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#ac7ff4]/15 border border-[#ac7ff4]/30 text-[#ac7ff4]">
            {solution.scope}
          </span>
        </div>
        <h4 class="text-2xl font-bold text-white mb-3 leading-snug">
          {solution.title}
        </h4>
        <p class="text-gray-300 font-light text-base mb-6 leading-relaxed">
          {solution.description}
        </p>

        <div class="border-t border-white/10 pt-6 mb-6">
          <h5 class="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
            Alcance y soporte incluido:
          </h5>
          <ul class="space-y-2.5">
            {solution.benefit.map((item, index) => (
              <li key={index} class="flex items-start text-sm text-gray-300 font-light">
                <svg
                  class="w-5 h-5 text-[#ac7ff4] mr-2.5 flex-shrink-0 mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div class="pt-4 border-t border-white/10">
        <a
          href={solution.ctaUrl}
          class="block w-full py-3.5 px-6 rounded-xl font-bold text-center text-lg bg-[#1fc6c7] !text-white hover:bg-[#e7268d] hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-950/40 hover:shadow-[0_0_25px_rgba(219,39,119,0.5)] cursor-pointer"
          style={{ color: "#ffffff" }}
        >
          {solution.ctaText}
        </a>
      </div>
    </div>
  );
});
