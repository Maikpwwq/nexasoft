# NexaSoft SAS — Agent Instructions

## Overview
Coding Agent guidelines for NexaSoft SAS website. A Qwik City static site generation (SSG) app built with TypeScript, Tailwind CSS, and Netlify Edge deployment.

## Build & Run

All commands must be executed using `pnpm` from the workspace root:

```bash
pnpm install          # Install dependencies
pnpm dev              # Start development server with SSR
pnpm build            # Full production build (client + static server)
pnpm build.types      # Type check the project (tsc --incremental --noEmit)
pnpm lint             # Run ESLint validation checks
pnpm fmt              # Format code base using Prettier
```

## Project Structure

- `src/routes/` — File-based routing layout. Subfolders contain page logic.
- `src/components/` — Shared Qwik UI components.
- `src/const/` — Central data cataloging (e.g. `blog-posts.tsx`, pricing).
- `src/integrations/react/` — UI wrappers translating MUI elements to Qwik.
- `package.json` — Operational dependencies and command scripts.

## Code Style & Conventions

- Use **TypeScript** with strict types. Return types are mandatory on public APIs and routing loaders.
- **Qwik component definitions**:
  - Always use `component$(...)` to wrap component declarations.
  - Wrap event handlers and client functions with Qwik serialize markers `$(...)`.
- **Styling**: Always use vanilla Tailwind utility classes where possible. Avoid custom css unless absolutely necessary for animation transitions.
- **Import paths**: Always use path aliases: `~/components/*`, `~/const/*`, `~/assets/*`.
- Avoid side-effects inside components. Use `useTask$` or `useVisibleTask$` for lifecycle management.

### Example

```tsx
import { component$, $, useSignal } from "@builder.io/qwik";

export default component$(() => {
  const count = useSignal(0);

  const increment = $(() => {
    count.value++;
  });

  return (
    <button onClick$={increment} class="px-4 py-2 bg-blue-600 text-white rounded-md">
      Clicks: {count.value}
    </button>
  );
});
```

## Boundaries

- ✅ **Always do:** Run `pnpm build.types` and `pnpm lint` before requesting code verification. Maintain TypeScript strict compiler standards.
- ⚠️ **Ask first:** Installing new dependencies or adding external npm integrations. Modifying build scripts in `package.json` or adapters config.
- 🚫 **Never do:** Commit plain text passwords, Mongo credentials, or API secrets. Expose private keys to the client via `VITE_` variables. Write code that bypasses the serverless lead system.
