import { component$ } from "@builder.io/qwik";
import { CONTACT_INFO } from "~/const/contact";
import whatsappLogo from "~/assets/img/logos/WhatsApp.svg.webp";

export default component$(() => {
  return (
    <a
      href={CONTACT_INFO.whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={CONTACT_INFO.whatsapp.ariaLabel}
      class="whatsapp-fab"
    >
      {/* Notification badge */}
      <span class="whatsapp-fab__badge" aria-hidden="true">
        1
      </span>
      <img
        src={whatsappLogo}
        alt="WhatsApp"
        width={60}
        height={60}
        class="whatsapp-fab__icon"
      />
    </a>
  );
});
