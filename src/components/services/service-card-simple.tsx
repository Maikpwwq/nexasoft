import { component$, useStyles$ } from "@builder.io/qwik";
import type { ServiceItem } from "~/const/services";
import styles from "./service-card-simple.module.css";
import cardCss from "./service-card-simple.module.css?inline";

interface ServiceCardSimpleProps {
  service: ServiceItem;
}

const DEFAULT_THEME = {
  name: "Electric Cyan",
  color: "#00f0ff",
  rgb: "0, 240, 255",
};

export const ServiceCardSimple = component$<ServiceCardSimpleProps>(({ service }) => {
  useStyles$(cardCss);

  const theme = service.cyberpunkTheme ?? DEFAULT_THEME;

  return (
    <a
      href={service.route}
      class={[
        styles.cyberCard,
        "group relative flex flex-col justify-between p-6 rounded-2xl",
      ]}
      style={
        {
          "--neon-color": theme.color,
          "--neon-rgb": theme.rgb,
        } as Record<string, string>
      }
      aria-label={`Ver solución de ${service.name}`}
    >
      {/* Tubo halógeno superior (filamento físico) */}
      <div class={styles.halogenTube} aria-hidden="true" />

      {/* Haz / cono de dispersión de luz halógena */}
      <div class={styles.halogenWash} aria-hidden="true" />

      <div class="relative z-10">
        <div class="flex items-center gap-3.5 mb-1">
          <div
            class={[
              styles.iconPod,
              "w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center",
            ]}
          >
            {service.iconSvg}
          </div>
          <h3 class={[styles.cardTitle, "text-lg sm:text-xl font-bold leading-snug"]}>
            {service.name}
          </h3>
        </div>
      </div>

      <div class="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3 relative z-10">
        <div class="flex flex-wrap gap-1.5">
          {service.keywords.map((tag, i) => (
            <span
              key={i}
              class={[
                styles.keywordTag,
                "text-xs px-2.5 py-1 rounded-md font-light",
              ]}
            >
              {tag}
            </span>
          ))}
        </div>
        <div class="flex items-center text-sm font-semibold mt-4 pt-2">
          <span class={styles.ctaText}>Explorar solución</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class={[styles.ctaArrow, styles.ctaText, "w-4 h-4 ml-1.5"]}
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

