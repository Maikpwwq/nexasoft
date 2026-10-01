import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { SERVICES_CATALOG } from "~/const/services";
import styles from "./footer.module.css";

export const FooterSolutions = component$(() => {
  return (
    <div class="flex flex-col text-left">
      <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]" aria-hidden="true" />
        Soluciones Web
      </h3>

      <ul class="space-y-2.5">
        {SERVICES_CATALOG.map((service) => (
          <li key={service.id}>
            <Link
              href={service.route}
              class={[
                styles.linkItem,
                "text-sm text-gray-300 hover:text-white inline-flex items-center group py-1 min-h-[36px] sm:min-h-0 focus:outline-none focus:ring-1 focus:ring-[#00f0ff] rounded",
              ]}
              style={{
                "--hover-color": service.cyberpunkTheme?.color ?? "#00f0ff",
              } as Record<string, string>}
            >
              <span
                class="text-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-2 text-xs font-bold"
                aria-hidden="true"
              >
                ›
              </span>
              <span class="transition-colors group-hover:text-white">
                {service.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});
