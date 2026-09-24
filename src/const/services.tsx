import type { JSXOutput } from "@builder.io/qwik";

export interface RichSolution {
  title: string;
  description: string;
  scope: string;
  benefit: string[];
  ctaText: string;
  ctaUrl: string;
}

export interface CyberpunkTheme {
  name: string;
  color: string;
  rgb: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  shortName?: string;
  route: string;
  keywords: [string, string, string];
  iconSvg: JSXOutput;
  richSolution?: RichSolution;
  cyberpunkTheme?: CyberpunkTheme;
}

export const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: "web-design",
    name: "Diseño Web a medida",
    route: "/web-design/",
    keywords: ["Diseño UI/UX exclusivo", "Prototipado interactivo", "Identidad visual de marca"],
    cyberpunkTheme: {
      name: "Neon Magenta",
      color: "#ff007f",
      rgb: "255, 0, 127",
    },
    iconSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    ),
    richSolution: {
      title: "Diseño Gráfico & UI/UX a Medida",
      description: "Diseño visual y de experiencia de usuario enfocado en convertir visitantes en clientes, alineado con la identidad corporativa de tu marca.",
      scope: "Entrega según alcance",
      benefit: [
        "Investigación de usuario y arquitectura visual",
        "Diseño responsivo de alta fidelidad",
        "Prototipado y flujos de navegación",
        "Guía de estilos y componentes UI",
        "Respaldo formal de contrato de servicios",
      ],
      ctaText: "Cotizar diseño",
      ctaUrl: "/customer-form/",
    },
  },
  {
    id: "web-sites",
    name: "Sitio Web Informativo",
    route: "/web-sites/",
    keywords: ["Presencia digital", "Optimización SEO", "Hosting y SSL incluidos"],
    cyberpunkTheme: {
      name: "Electric Cyan",
      color: "#00f0ff",
      rgb: "0, 240, 255",
    },
    iconSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    richSolution: {
      title: "Sitio Web Informativo",
      description: "Landing page profesional con formulario de contacto, optimización SEO y certificado SSL. Diseño responsivo que posiciona tu negocio en internet.",
      scope: "Entrega en 1-2 semanas",
      benefit: [
        "Diseño profesional a medida",
        "Hasta 3 secciones",
        "Formulario de contacto",
        "Link redes sociales",
        "Optimización SEO básica",
        "1 año Hosting",
        "1 año Dominio",
        "1 año Certificado SSL",
      ],
      ctaText: "Cotizar solución",
      ctaUrl: "/customer-form/",
    },
  },
  {
    id: "web-stores",
    name: "Vitrinas virtuales",
    route: "/web-stores/",
    keywords: ["Catálogo de productos", "WhatsApp Checkout", "Panel administrativo"],
    cyberpunkTheme: {
      name: "Toxic Lime",
      color: "#00ff66",
      rgb: "0, 255, 102",
    },
    iconSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    richSolution: {
      title: "Vitrina Virtual",
      description: "Exhibe tu catálogo de productos en línea con un diseño atractivo. Incluye WhatsApp Business integrado para recibir pedidos directos.",
      scope: "Entrega en 3-4 semanas",
      benefit: [
        "Diseño e-commerce a medida",
        "Catálogo hasta 30 productos",
        "Carrito + WhatsApp checkout",
        "Panel de administración",
        "SEO para productos",
        "1 año Hosting",
        "1 año Dominio",
        "1 año Certificado SSL",
      ],
      ctaText: "Cotizar solución",
      ctaUrl: "/customer-form/",
    },
  },
  {
    id: "e-commerces",
    name: "Tiendas Online",
    shortName: "Tiendas Online",
    route: "/e-commerces/",
    keywords: ["Pasarela de pagos", "Control de inventario", "Operación 24/7"],
    cyberpunkTheme: {
      name: "Cyber Yellow",
      color: "#ffe600",
      rgb: "255, 230, 0",
    },
    iconSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
    ),
    richSolution: {
      title: "Tienda Online con Pagos",
      description: "E-commerce completo con pasarela de pagos en línea, gestión de inventario y panel de administración. Tu tienda operando 24/7.",
      scope: "Entrega en 4-8 semanas",
      benefit: [
        "Diseño e-commerce premium",
        "Catálogo hasta 100 productos",
        "Pasarela de pagos online",
        "Gestión de inventario",
        "Panel administrativo",
        "SEO avanzado",
        "Google Analytics + Tag Manager",
        "1 año Hosting",
        "1 año Dominio",
        "10 Correos corporativos",
        "1 año Certificado SSL",
      ],
      ctaText: "Cotizar solución",
      ctaUrl: "/customer-form/",
    },
  },
  {
    id: "web-corporate",
    name: "Paginas Web Corporativas",
    route: "/web-corporate/",
    keywords: ["Procesos de industria", "Gestión avanzada", "SLA & Soporte formal"],
    cyberpunkTheme: {
      name: "Ultra Violet",
      color: "#a855f7",
      rgb: "168, 85, 247",
    },
    iconSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
        <line x1="9" y1="22" x2="9" y2="22"></line>
        <line x1="15" y1="22" x2="15" y2="22"></line>
        <line x1="12" y1="22" x2="12" y2="22"></line>
        <line x1="12" y1="2" x2="12" y2="2"></line>
        <line x1="4" y1="10" x2="20" y2="10"></line>
        <line x1="4" y1="14" x2="20" y2="14"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    ),
    richSolution: {
      title: "Sitio Web Empresarial",
      description: "Presencia digital completa para tu empresa con múltiples secciones, blog integrado y gestión de contenidos. Ideal para posicionar tu marca y administrar flujos corporativos.",
      scope: "Entrega en 3-4 semanas",
      benefit: [
        "Diseño a medida",
        "Hasta 6 secciones",
        "Blog integrado",
        "Formulario de contacto avanzado",
        "SEO On-Page completo",
        "Google Analytics",
        "1 año Hosting",
        "1 año Dominio",
        "5 Correos corporativos",
        "1 año Certificado SSL",
      ],
      ctaText: "Cotizar solución",
      ctaUrl: "/customer-form/",
    },
  },
  {
    id: "web-modernization",
    name: "Modernización y Rendimiento",
    route: "/web-modernization/",
    keywords: ["Core Web Vitals", "Auditoría de código", "Arquitectura moderna"],
    cyberpunkTheme: {
      name: "Halogen Amber",
      color: "#ff7700",
      rgb: "255, 119, 0",
    },
    iconSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
    richSolution: {
      title: "Modernización, Rendimiento & Soporte",
      description: "Diagnóstico técnico profesional para mejorar la velocidad de carga, modernizar módulos clave y potenciar el SEO de tu plataforma actual.",
      scope: "Entrega en 3 días hábiles",
      benefit: [
        "Auditoría técnica y diagnóstico",
        "Optimización de velocidad (Core Web Vitals)",
        "3 Mejoras o actualizaciones de impacto",
        "Posicionamiento SEO en Google",
        "Reporte de desempeño y métricas",
        "Recomendaciones estratégicas",
      ],
      ctaText: "Cotizar solución",
      ctaUrl: "/customer-form/",
    },
  },
  {
    id: "web-maintenance",
    name: "Mantenimiento y Soporte Continuo",
    route: "/web-maintenance/",
    keywords: ["Monitoreo de uptime", "Backups y seguridad", "SLA prioritario"],
    cyberpunkTheme: {
      name: "Laser Mint",
      color: "#00f5d4",
      rgb: "0, 245, 212",
    },
    iconSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
    richSolution: {
      title: "Mantenimiento Web Mensual",
      description: "Mantén tu plataforma actualizada, segura y optimizada. Incluye actualizaciones de contenido, soporte técnico y monitoreo de disponibilidad.",
      scope: "Contrato formal de soporte",
      benefit: [
        "Actualizaciones de contenido",
        "Soporte técnico prioritario",
        "Monitoreo de disponibilidad",
        "Backups periódicos",
        "Reportes mensuales de tráfico",
        "Correcciones de errores",
        "Optimización continua de velocidad",
      ],
      ctaText: "Cotizar soporte",
      ctaUrl: "/customer-form/",
    },
  },
  {
    id: "marketplaces",
    name: "Market Places",
    route: "/marketplaces/",
    keywords: ["Múltiples comercios", "Transacciones seguras", "Gestión centralizada"],
    cyberpunkTheme: {
      name: "Cyber Crimson",
      color: "#ff2a5f",
      rgb: "255, 42, 95",
    },
    iconSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
    richSolution: {
      title: "Plataforma MarketPlace a Medida",
      description: "Desarrollo de ecosistemas digitales multi-comercio para conectar compradores y vendedores con liquidación de pagos y perfiles de vendedor.",
      scope: "Entrega según especificaciones",
      benefit: [
        "Arquitectura multi-tenant / multi-vendedor",
        "Gestión de comisiones y pagos automatizados",
        "Panel para administradores y comerciantes",
        "Infraestructura escalable y de alta disponibilidad",
        "Contrato formal y acompañamiento técnico",
      ],
      ctaText: "Cotizar MarketPlace",
      ctaUrl: "/customer-form/",
    },
  },
  {
    id: "web-apps",
    name: "Aplicativos Web Progresivos",
    shortName: "Aplicativos",
    route: "/web-apps/",
    keywords: ["Procesos internos", "Automatización de tareas", "Tecnología moderna"],
    cyberpunkTheme: {
      name: "Electric Cobalt",
      color: "#4d7cff",
      rgb: "77, 124, 255",
    },
    iconSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    ),
    richSolution: {
      title: "Aplicativos Web y Sistemas Empresariales",
      description: "Soluciones de software personalizadas que digitalizan y automatizan operaciones críticas de tu empresa con tecnología web progresiva.",
      scope: "Entrega por hitos de desarrollo",
      benefit: [
        "Diseño de arquitectura de software a medida",
        "Integración con APIs y bases de datos",
        "Paneles de administración y roles de acceso",
        "Diseño responsivo optimizado para desktop y móvil",
        "Garantía de código y soporte continuo",
      ],
      ctaText: "Cotizar aplicativo",
      ctaUrl: "/customer-form/",
    },
  },
];
