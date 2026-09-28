export interface ContactSocialLink {
  readonly name: string;
  readonly url: string;
  readonly handle: string;
  readonly ariaLabel: string;
}

export interface ContactInfo {
  readonly email: {
    readonly primary: string;
    readonly secondary?: string;
    readonly mailtoUrl: string;
    readonly ariaLabel: string;
  };
  readonly nit: {
    readonly number: string;
    readonly display: string;
  };
  readonly phone: {
    readonly raw: string;
    readonly countryCode: string;
    readonly nationalNumber: string;
    readonly display: string;
    readonly telUrl: string;
  };
  readonly whatsapp: {
    readonly rawNumber: string;
    readonly displayNumber: string;
    readonly defaultMessage: string;
    readonly url: string;
    readonly ariaLabel: string;
  };
  readonly social: {
    readonly instagram: ContactSocialLink;
    readonly facebook: ContactSocialLink;
  };
  readonly location: {
    readonly city: string;
    readonly country: string;
    readonly display: string;
  };
}

const WHATSAPP_RAW_NUMBER = "573204842897";
const WHATSAPP_DEFAULT_MESSAGE =
  "Hola NexaSoft, deseo cotizar un proyecto web o recibir asesoría.";

export const CONTACT_INFO: ContactInfo = {
  email: {
    primary: "nexasoftprofessionalsolutions@gmail.com",
    secondary: "hola@nexasoft.com.co",
    mailtoUrl: "mailto:nexasoftprofessionalsolutions@gmail.com",
    ariaLabel: "Enviar correo a NexaSoft",
  },
  nit: {
    number: "9017156046",
    display: "NIT: 901715604-6",
  },
  phone: {
    raw: "+573204842897",
    countryCode: "57",
    nationalNumber: "3204842897",
    display: "+57 320 484 2897",
    telUrl: "tel:+573204842897",
  },
  whatsapp: {
    rawNumber: WHATSAPP_RAW_NUMBER,
    displayNumber: "+57 320 484 2897",
    defaultMessage: WHATSAPP_DEFAULT_MESSAGE,
    url: `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`,
    ariaLabel: "Contactar por WhatsApp a NexaSoft",
  },
  social: {
    instagram: {
      name: "Instagram",
      url: "https://www.instagram.com/nexa_soft/",
      handle: "@nexa_soft",
      ariaLabel: "Visitar perfil de Instagram de NexaSoft",
    },
    facebook: {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100089606313657",
      handle: "NexaSoft",
      ariaLabel: "Visitar página de Facebook de NexaSoft",
    },
  },
  location: {
    city: "Bogotá",
    country: "Colombia",
    display: "Bogotá, Colombia.",
  },
} as const;
