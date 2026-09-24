import { component$, useStyles$ } from "@builder.io/qwik";
import type { RichSolution, CyberpunkTheme } from "~/const/services";
import styles from "./service-detail-card.module.css";
import detailCardCss from "./service-detail-card.module.css?inline";

interface ServiceDetailCardProps {
  solution: RichSolution;
  theme?: CyberpunkTheme;
}

const DEFAULT_THEME: CyberpunkTheme = {
  name: "Ultra Violet",
  color: "#ac7ff4",
  rgb: "172, 127, 244",
};

export const ServiceDetailCard = component$<ServiceDetailCardProps>(
  ({ solution, theme = DEFAULT_THEME }) => {
    useStyles$(detailCardCss);

    return (
      <div
        class={[
          styles.detailCard,
          "p-6 sm:p-8 max-w-lg w-full flex flex-col justify-between",
        ]}
        style={
          {
            "--neon-color": theme.color,
            "--neon-rgb": theme.rgb,
          } as Record<string, string>
        }
      >
        {/* Tubo halógeno superior (filamento físico) */}
        <div class={styles.halogenTube} aria-hidden="true" />

        {/* Haz / cono de dispersión de luz halógena */}
        <div class={styles.halogenWash} aria-hidden="true" />

        <div class="relative z-10">
          <div class="flex items-center justify-between gap-3 mb-3">
            <span
              class={[
                styles.scopeBadge,
                "inline-block px-3 py-1 rounded-full text-xs font-semibold",
              ]}
            >
              {solution.scope}
            </span>
          </div>
          <h4
            class={[
              styles.cardTitle,
              "text-2xl font-bold mb-3 leading-snug",
            ]}
          >
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
                <li
                  key={index}
                  class="flex items-start text-sm text-gray-300 font-light"
                >
                  <svg
                    class={[
                      styles.benefitIcon,
                      "w-5 h-5 mr-2.5 flex-shrink-0 mt-0.5",
                    ]}
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

        <div class="pt-4 border-t border-white/10 relative z-10">
          <a
            href={solution.ctaUrl}
            class={[
              styles.ctaButton,
              "block w-full py-3.5 px-6 rounded-xl font-bold text-center text-lg cursor-pointer",
            ]}
          >
            {solution.ctaText}
          </a>
        </div>
      </div>
    );
  }
);

