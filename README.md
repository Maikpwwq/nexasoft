# NexaSoft SAS ⚡️

**NexaSoft professional solutions** — desarrollo web y soporte en Colombia.

A progressive web application built with Qwik, Qwik City, and Tailwind CSS, deployed via Netlify Edge Functions with static site generation (SSG).

**Propuesta de valor**

"Modernizamos tu sitio web: rápido, profesional, visible en Google y con contrato de soporte para cuando lo necesites."

---

## Tech Stack

| Category         | Technology                  | Version            | Status                       |
| ---------------- | --------------------------- | ------------------ | ---------------------------- |
| **Framework**    | Qwik / Qwik City            | 1.20.0             | Activo                       |
| **Build Tool**   | Vite                        | 5.4.14 (Pinned)    | Activo (Rollup engine)       |
| **Language**     | TypeScript                  | 6.0.3              | Activo                       |
| **UI Library**   | Material UI (MUI)           | 9.3.1              | Activo (Legacy React Bridge) |
| **Styling**      | Tailwind CSS                | 4.3.3              | Activo                       |
| **Lead Capture** | Google Sheets & Apps Script | Serverless         | Activo (Producción)          |
| **Database**     | MongoDB / Mongoose          | 7.6 / 9.9          | Deprecado / Solo Desarrollo  |
| **Backend**      | Supabase                    | 2.112.4            | Deprecado / Inactivo         |
| **Pkg Manager**  | pnpm                        | 9.x / 11.x         | Activo                       |

---

## Project Structure

```
├── public/              # Static assets (images, fonts, etc.)
├── src/
│   ├── assets/          # Image assets (banners, icons, etc.)
│   ├── components/      # Qwik components (header, footer, contact, blog, etc.)
│   ├── const/           # Constants and configuration (e.g., blog-posts)
│   ├── integrations/
│   │   └── react/       # React ↔ Qwik bridge (MUI wrappers, theme, forms)
│   ├── routes/          # Directory-based routing (pages)
│   ├── services/        # Business logic and shared services
│   ├── styles/          # Global and module CSS styles
│   ├── utilities/       # Shared utility functions
│   ├── global.css       # Global stylesheet
│   └── root.tsx         # Application root
├── adapters/            # Deployment adapters (static, Netlify)
├── server/              # Server-side build output
├── netlify/             # Netlify-specific configuration
├── netlify.toml         # Netlify deployment config
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
├── eslint.config.js     # ESLint flat config
└── package.json         # Dependencies and scripts
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 24.0.0
- **pnpm** 9.x

### Install Dependencies

```shell
pnpm install
```

### Development

```shell
pnpm dev       # Start dev server with SSR
pnpm start     # Start dev server and open browser
```

### Production Build

```shell
pnpm build           # Full client + server build with SSG
pnpm build.client    # Client build only
│  pnpm build.server # Server/SSG build only
pnpm build.types     # Type checking only (tsc --noEmit)
```

### Preview

```shell
pnpm preview    # Preview production build locally
```

## Linting & Formatting

```shell
pnpm lint         # Run ESLint on src/**/*.ts*
pnpm fmt          # Format all files with Prettier
pnpm fmt.check    # Check formatting without writing
```

## Deployment (Netlify)

This site is configured to deploy to [Netlify Edge Functions](https://docs.netlify.com/edge-functions/overview/), rendering at edge locations near users.

### Deploy manually via CLI

```shell
pnpm deploy       # Execute netlify deploy --build
```

---

## Key Integrations & Architecture Highlights
 
- **Serverless Lead Capture**: Sincroniza formularios cliente directamente con un webhook de Google Apps Script y Google Sheets, con alertas automáticas vía email y protección anti-spam. Cero dependencia de servidores externos de base de datos pausables.
- **Qwik ↔ React Bridge**: Componentes de MUI integrados con `qwikify$()` en `src/integrations/react/mui.tsx` para renderizado híbrido progresivo.
- **Editorial Blog Engine (SSG)**: Sistema de publicación tipo revista digital con renderizado estático (`onStaticGenerate`) pre-compilando 23 páginas estáticas en milisegundos.
- **Image Lightbox Modal**: Visor modal interactivo en pantalla completa para imágenes de cabecera con soporte para teclado (`Escape`), clic fuera de foco (backdrop dismiss) y carga optimizada anti layout-shift.
- **Banner de Conversión Full-Width**: Banner comercial responsivo (`#blog-cta-banner`) con degradado oscuro de borde a borde (`w-full`) que actúa como divisor de alto impacto entre las secciones de fondo blanco del blog y de aliados comerciales (`SupportLogos`).
- **Google AdSense Slots**: El blog incorpora contenedores estructurados listos para inyectar bloques publicitarios de Google AdSense una vez habilitado el dominio propio.
- **SEO & Metadatos Dinámicos**: Etiquetas Open Graph y metadatos específicos por artículo para optimización en motores de búsqueda y redes sociales.
- **Hover Styling Resiliente**: Estilos hover en botones estructurados mediante CSS puro (`:hover` con especificidad forzada), evitando desincronizaciones de eventos lazy de Qwik (`onMouseOver$/onMouseOut$`).

---

## Project Status & Milestones

**Octubre 2026** — Rediseño editorial completo del Blog, visor Lightbox modal para imágenes, reestructuración a ancho completo (`w-full`) del banner de captación comercial como separador de secciones, corrección de saltos tipográficos responsivos, estabilización de compilación SSG con Vite 5 y resolución de herencia global de estilos CSS en botones.

**Junio 2026** — Migración del sistema de leads a Google Sheets (Serverless) y reestructuración inicial del catálogo de publicaciones.
