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

### Troubleshooting & Technical Lessons Learned: Qwik City + Vite + pnpm

#### 1. Vite 8 / Rolldown Path Traversal Failure (`[INVALID_OPTION]`)

* **Problem:** Vite 8 introduces Rolldown, which rejects string placeholders like `[name]` in `output.chunkFileNames` when encountering pnpm virtual store paths containing relative segments (`../node_modules/.pnpm/...`).
* **Root Cause:** Incompatibility between Rolldown's strict option validator and Qwik 1.x's module resolution structure under pnpm.
* **Resolution:** Pin Vite to version 5 (`"vite": "^5.4.14"`) in `package.json` when deploying Qwik 1.x projects. Vite 5 relies on standard Rollup, preventing Rolldown option validation crashes without requiring custom path sanitizers.

#### 2. Qwik Manifest & Symbol Resolution Failure (`QWIK ERROR Code(31)`)

* **Problem:** Static build adapter crashes during SSG with `serializeQRL: Cannot resolve symbol ... in null undefined`.
* **Root Causes:**
1. Overriding `rollupOptions.output.chunkFileNames` interferes with Qwik Optimizer's symbol hashing and breaks `q-manifest.json` generation.
2. Running the static adapter build script directly (`vite build -c adapters/static/vite.config.ts`) without running the primary client build (`vite build`) beforehand misses the client manifest.


* **Resolution:**
* Do not override `chunkFileNames` or `entryFileNames` in `vite.config.ts`. Let Qwik handle output chunk naming natively.
* Execute the full build pipeline sequentially (`pnpm build`, which runs `vite build` followed by `vite build -c adapters/static/vite.config.ts`).
* Always clear build caches (`dist/`, `server/`, `.qwik/`, `node_modules/.vite`) if manifest serialization becomes corrupted.



#### 3. Version-Specific TSConfig Path Resolution

* **Problem:** Type errors like `Object literal may only specify known properties, and 'tsconfigPaths' does not exist in type 'ResolveOptions'`.
* **Root Cause:** Native `resolve.tsconfigPaths: true` is a feature of Vite 6+, while Vite 5 strictly type-checks `ResolveOptions` and does not support this key natively.
* **Resolution:** Explicitly declare path aliases (e.g., `"~": path.resolve(import.meta.dirname, "./src")`) inside `resolve.alias` when on Vite 5, avoiding version-mismatched options.