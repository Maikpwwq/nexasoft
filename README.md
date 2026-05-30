# NexaSoft SAS ⚡️

**NexaSoft professional solutions** — el futuro en soluciones de software.

A progressive web application built with Qwik, Qwik City, and Material UI, deployed via Netlify Edge Functions with static site generation (SSG).

---

## Tech Stack

| Category         | Technology                  | Version   |
| ---------------- | --------------------------- | --------- |
| **Framework**    | Qwik / Qwik City            | 1.20.0    |
| **Build Tool**   | Vite                        | 8.0.14    |
| **Language**     | TypeScript                  | 6.0.3     |
| **UI Library**   | Material UI (MUI)           | 9.0.1     |
| **Styling**      | Tailwind CSS                | 4.3.0     |
| **React Bridge** | @builder.io/qwik-react      | 0.5.8     |
| **React**        | React / React DOM           | 19.2.6    |
| **Database**     | MongoDB / Mongoose          | 7.2 / 9.6 |
| **Backend**      | Supabase                    | 2.106.2   |
| **Linting**      | ESLint                      | 10.4.1    |
| **Formatting**   | Prettier                    | 3.8.3     |
| **Deployment**   | Netlify CLI / Edge Functions | 26.0.2    |
| **Runtime**      | Node.js                     | ≥ 24.0.0  |
| **Pkg Manager**  | pnpm                        | 9.13.0    |

## Project Structure

```
├── public/              # Static assets (images, fonts, etc.)
├── src/
│   ├── assets/          # Image assets (banners, icons, etc.)
│   ├── components/      # Qwik components (header, footer, contact, etc.)
│   ├── const/           # Constants and configuration
│   ├── integrations/
│   │   └── react/       # React ↔ Qwik bridge (MUI wrappers, theme, forms)
│   ├── routes/          # Directory-based routing (pages)
│   ├── services/        # Business logic and API services
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

> During dev mode, Vite may request many `.js` files. This does not represent the production build.

### Production Build

```shell
pnpm build           # Full client + server build with SSG
pnpm build.client    # Client build only
pnpm build.server    # Server/SSG build only
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

### Deploy via Git

Push to the linked Git repo for [continuous deployment](https://docs.netlify.com/site-deploys/create-deploys/#deploy-with-git):

```shell
netlify link
```

### Deploy manually via CLI

```shell
netlify deploy --build          # Preview deploy
netlify deploy --build --prod   # Production deploy
```

### Local Netlify preview

1. Build the site: `pnpm build`
2. Start local server: `netlify dev`
3. Visit [http://localhost:8888/](http://localhost:8888/)

## Key Integrations

- **Qwik ↔ React Bridge**: MUI components are wrapped with `qwikify$()` in `src/integrations/react/mui.tsx`, allowing Material UI to be used inside Qwik components.
- **MUI Theme**: Custom theme defined in `src/integrations/react/theme.js` with Work Sans / Roboto Condensed typography.
- **Supabase**: Used for customer contact form submissions.
- **MongoDB / Mongoose**: Database layer for server-side data.
- **Partytown**: Third-party script offloading via `@qwik.dev/partytown`.

## Last Updated

**2026-05-30** — Progressive dependency update to state-of-the-art versions across all packages (React 19.2.6, MUI 9, Vite 8, TypeScript 6, ESLint 10).
