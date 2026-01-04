import { component$, useSignal, $ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./header.module.css";

export interface ServiceItem {
    name: string;
    route: string;
    // Icons are optional in the dropdown for cleaner look, or can be passed if needed
}

export const services: ServiceItem[] = [
    { name: "Diseño Web a medida", route: "/web-design/" },
    { name: "Sitio Web Informativo", route: "/web-sites/" },
    { name: "Vitrinas virtuales", route: "/web-stores/" },
    { name: "Tiendas Online", route: "/e-commerces/" },
    { name: "Paginas Web Corporativas", route: "/web-corporate/" },
    { name: "Market Places", route: "/marketplaces/" },
    { name: "Aplicativos", route: "/web-apps/" },
];

export const NavDropdown = component$(() => {
    const isOpen = useSignal(false);

    const toggleOpen = $(() => {
        isOpen.value = !isOpen.value;
    });

    return (
        <div
            class={styles.dropdownContainer}
            onMouseEnter$={() => (isOpen.value = true)}
            onMouseLeave$={() => (isOpen.value = false)}
        >
            <button
                class={[styles.navLink, styles.dropdownTrigger]}
                onClick$={toggleOpen}
                aria-expanded={isOpen.value}
            >
                <span style={{ fontSize: "1.125rem", fontFamily: "Roboto, Helvetica, Arial, sans-serif" }}>
                    Nuestros Servicios
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class={`transition-transform duration-200 ${isOpen.value ? 'rotate-180' : ''}`}
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </button>

            <div class={[styles.dropdownMenu, isOpen.value ? styles.show : ""]}>
                <div class="ps-2 py-2 flex flex-col gap-2 bg-[var(--qwik-light-blue)] rounded-lg shadow-xl border border-white/10">
                    {services.map((service) => (
                        <Link
                            key={service.name}
                            href={service.route}
                            class={styles.dropdownItem}
                        >
                            {service.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
});

export const MobileNavDropdown = component$(() => {
    const isOpen = useSignal(false);

    return (
        <div class="flex flex-col">
            <button
                onClick$={() => (isOpen.value = !isOpen.value)}
                class="flex items-center justify-between w-full p-0 py-2 text-left"
            // Removed text-primary and font-bold to match other mobile menu items
            // Other items use fontSize: 1rem in header.tsx
            >
                <span style={{ fontSize: "1rem", fontFamily: "Roboto, Helvetica, Arial, sans-serif", color: "var(--qwik-dark-text)" }}>
                    Nuestros Servicios
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class={`transition-transform duration-300 ${isOpen.value ? 'rotate-180' : ''}`}
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </button>

            {isOpen.value && (
                <div class="flex flex-col ml-4 border-l-2 border-[var(--qwik-light-blue)] pl-4 mt-2 mb-2 transition-all duration-300 ease-in-out">
                    {services.map((service) => (
                        <Link
                            key={service.name}
                            href={service.route}
                            class="py-2 block text-sm hover:text-white transition-colors"
                            style={{ fontFamily: "Roboto, Helvetica, Arial, sans-serif", color: "var(--qwik-dark-text)" }}
                        >
                            {service.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
});
