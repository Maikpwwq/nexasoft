import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./footer.module.css";

interface LegalLink {
  readonly title: string;
  readonly href: string;
  readonly badge?: string;
}

const LEGAL_LINKS: LegalLink[] = [
  {
    title: "Políticas de Privacidad",
    href: "/nexo/#privacidad",
  },
  {
    title: "Términos y Condiciones",
    href: "/nexo/#terminos",
  },
  {
    title: "Tratamiento de Datos (Habeas Data)",
    href: "/nexo/#datos",
  },
  // {
  //   title: "Acuerdos de Servicio (SLA)",
  //   href: "/nexo/#sla",
  // },
  // {
  //   title: "Portal Nexo (Transparencia)",
  //   href: "/nexo/",
  //   badge: "Oficial",
  // },
  {
    title: "Acerca de nosotros",
    href: "/about/",
  },
  {
    title: "Blog y Novedades",
    href: "/blog/",
  },
];

export const FooterLegal = component$(() => {
  return (
    <div class="flex flex-col text-left">
      <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-[#ff007f] shadow-[0_0_8px_#ff007f]" aria-hidden="true" />
        Legal & Empresa
      </h3>

      <ul class="space-y-2.5">
        {LEGAL_LINKS.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              class={[
                styles.linkItem,
                "text-sm text-gray-300 hover:text-white inline-flex items-center group py-1 min-h-[36px] sm:min-h-0 focus:outline-none focus:ring-1 focus:ring-[#ff007f] rounded",
              ]}
            >
              <span
                class="text-[#ff007f] opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-2 text-xs font-bold"
                aria-hidden="true"
              >
                ›
              </span>
              <span class="transition-colors group-hover:text-white">
                {item.title}
              </span>
              {item.badge && (
                <span class="ml-2 px-1.5 py-0.5 text-[10px] uppercase font-semibold tracking-wider rounded bg-[#ff007f]/20 text-[#ff007f] border border-[#ff007f]/30">
                  {item.badge}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});
