# NexaSoft SAS ⚡️

**NexaSoft professional solutions** — el futuro en soluciones de software.

A progressive web application built with Qwik, Qwik City, and Tailwind CSS, deployed via Netlify Edge Functions with static site generation (SSG).

---

## Tech Stack

| Category         | Technology                           | Version   | Status |
| ---------------- | ------------------------------------ | --------- | ------ |
| **Framework**    | Qwik / Qwik City                     | 1.20.0    | Activo |
| **Build Tool**   | Vite                                 | 8.0.16    | Activo |
| **Language**     | TypeScript                           | 6.0.3     | Activo |
| **UI Library**   | Material UI (MUI)                    | 9.1.0     | Activo (Legacy React Bridge) |
| **Styling**      | Tailwind CSS                         | 4.3.0     | Activo |
| **Lead Capture** | Google Sheets & Apps Script          | Serverless| Activo (Producción) |
| **Database**     | MongoDB / Mongoose                   | 7.3 / 9.7 | Deprecado / Solo Desarrollo |
| **Backend**      | Supabase                             | 2.108.1   | Deprecado / Inactivo |
| **Pkg Manager**  | pnpm                                 | 9.13.0    | Activo |

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

## Key Integrations & Business Logic

- **Serverless Lead Capture**: Sincroniza formularios cliente directamente con un webhook de Google Apps Script y Google Sheets, con alertas automáticas vía email y protección anti-spam. Cero dependencia de servidores externos de base de datos pausables.
- **Qwik ↔ React Bridge**: Componentes de MUI integrados con `qwikify$()` en `src/integrations/react/mui.tsx` para el renderizado híbrido.
- **Google AdSense Slots**: El blog incorpora contenedores estructurados listos para inyectar bloques publicitarios de Google AdSense una vez habilitado el dominio propio.
- **Captación Directa (NexaSoft SAS)**: Banners dinámicos en los artículos del blog diseñados estratégicamente para convertir tráfico orgánico en leads comerciales calificados, destacando el perfil de gestión de proyectos de ingeniería.

---

## Last Updated

**Junio 2026** — Migración del sistema de leads a Google Sheets (Serverless) y reestructuración de la base del blog.
