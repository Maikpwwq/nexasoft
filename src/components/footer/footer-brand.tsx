import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import NexaSoftLogo from "~/assets/img/Logos Nexasoft/Logo-Header-Fushia.png";
import CHCoraSoft from "~/assets/img/logos/Logo_Fondo_Negro.png";
import { CONTACT_INFO } from "~/const/contact";
import styles from "./footer.module.css";

export const FooterBrand = component$(() => {
  return (
    <div class="flex flex-col items-start text-left">
      {/* Logo NexaSoft idéntico a Header */}
      <Link href="/" title="NexaSoft SAS - Inicio" class="inline-block mb-4 focus:outline-none focus:ring-2 focus:ring-[#ff007f] rounded-lg">
        <img
          src={NexaSoftLogo}
          height={50}
          width={209}
          alt="NexaSoft SAS Logo"
          class="h-10 sm:h-12 w-auto object-contain block select-none"
        />
      </Link>

      <p class="text-sm text-gray-300 font-light leading-relaxed mb-6 max-w-sm">
        Modernizamos tu sitio web: rápido, profesional, visible en Google, con contrato de servicios y soporte formal.
      </p>

      {/* Datos de contacto y fiscales */}
      <div class="space-y-3 w-full max-w-sm mb-6 text-sm">
        {/* NIT */}
        <div class="flex items-center text-gray-300 gap-3">
          <svg
            class="w-4 h-4 text-[#00f0ff] flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
          </svg>
          <span class="font-medium text-gray-200">{CONTACT_INFO.nit.display}</span>
        </div>

        {/* Ubicación */}
        <div class="flex items-center text-gray-300 gap-3">
          <svg
            class="w-4 h-4 text-[#00f0ff] flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <span>{CONTACT_INFO.location.display}</span>
        </div>

        {/* Correo Electrónico */}
        <a
          href={CONTACT_INFO.email.mailtoUrl}
          aria-label={CONTACT_INFO.email.ariaLabel}
          class={[styles.contactItem, "flex items-center text-gray-300 hover:text-white gap-3 group focus:outline-none focus:ring-1 focus:ring-[#00f0ff] rounded"]}
        >
          <svg
            class="w-4 h-4 text-[#ff007f] flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
          <span class="break-all group-hover:text-[#00f0ff] transition-colors">{CONTACT_INFO.email.primary}</span>
        </a>

        {/* WhatsApp / Teléfono */}
        <a
          href={CONTACT_INFO.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={CONTACT_INFO.whatsapp.ariaLabel}
          class={[styles.contactItem, "flex items-center text-gray-300 hover:text-white gap-3 group focus:outline-none focus:ring-1 focus:ring-[#00ff66] rounded"]}
        >
          <svg
            class="w-4 h-4 text-[#00ff66] flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span class="group-hover:text-[#00ff66] transition-colors">{CONTACT_INFO.whatsapp.displayNumber}</span>
        </a>
      </div>

      {/* Redes sociales */}
      <div class="flex items-center gap-3 mb-6">
        <a
          href={CONTACT_INFO.social.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          title={CONTACT_INFO.social.instagram.name}
          aria-label={CONTACT_INFO.social.instagram.ariaLabel}
          class={[styles.socialBtn, "p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-[#ff007f] hover:bg-[#ff007f]/10"]}
        >
          <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>

        <a
          href={CONTACT_INFO.social.facebook.url}
          target="_blank"
          rel="noopener noreferrer"
          title={CONTACT_INFO.social.facebook.name}
          aria-label={CONTACT_INFO.social.facebook.ariaLabel}
          class={[styles.socialBtn, "p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-[#00f0ff] hover:bg-[#00f0ff]/10"]}
        >
          <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
          </svg>
        </a>
      </div>

      {/* Logo Chico corazón de software */}
      <div class="pt-4 border-t border-white/10 w-full max-w-sm flex flex-col items-start">
        <span class="text-[11px] text-gray-400 uppercase tracking-wider mb-2 font-medium">
          Ecosistema y Respaldo
        </span>
        <img
          src={CHCoraSoft}
          height={40}
          width={180}
          alt="Logo Chicó corazón de software"
          class="h-8 sm:h-9 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 select-none cursor-default"
        />
      </div>
    </div>
  );
});
