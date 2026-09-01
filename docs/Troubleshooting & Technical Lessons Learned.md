### Troubleshooting & Technical Lessons Learned: Qwik City + Vite + pnpm

#### 1. Vite 8 / Rolldown Path Traversal Failure (`[INVALID_OPTION]`)

- **Problem:** Vite 8 introduces Rolldown, which rejects string placeholders like `[name]` in `output.chunkFileNames` when encountering pnpm virtual store paths containing relative segments (`../node_modules/.pnpm/...`).
- **Root Cause:** Incompatibility between Rolldown's strict option validator and Qwik 1.x's module resolution structure under pnpm.
- **Resolution:** Pin Vite to version 5 (`"vite": "^5.4.14"`) in `package.json` when deploying Qwik 1.x projects. Vite 5 relies on standard Rollup, preventing Rolldown option validation crashes without requiring custom path sanitizers.

#### 2. Qwik Manifest & Symbol Resolution Failure (`QWIK ERROR Code(31)`)

- **Problem:** Static build adapter crashes during SSG with `serializeQRL: Cannot resolve symbol ... in null undefined`.
- **Root Causes:**

1. Overriding `rollupOptions.output.chunkFileNames` interferes with Qwik Optimizer's symbol hashing and breaks `q-manifest.json` generation.
2. Running the static adapter build script directly (`vite build -c adapters/static/vite.config.ts`) without running the primary client build (`vite build`) beforehand misses the client manifest.

- **Resolution:**
- Do not override `chunkFileNames` or `entryFileNames` in `vite.config.ts`. Let Qwik handle output chunk naming natively.
- Execute the full build pipeline sequentially (`pnpm build`, which runs `vite build` followed by `vite build -c adapters/static/vite.config.ts`).
- Always clear build caches (`dist/`, `server/`, `.qwik/`, `node_modules/.vite`) if manifest serialization becomes corrupted.

#### 3. Version-Specific TSConfig Path Resolution

- **Problem:** Type errors like `Object literal may only specify known properties, and 'tsconfigPaths' does not exist in type 'ResolveOptions'`.
- **Root Cause:** Native `resolve.tsconfigPaths: true` is a feature of Vite 6+, while Vite 5 strictly type-checks `ResolveOptions` and does not support this key natively.
- **Resolution:** Explicitly declare path aliases (e.g., `"~": path.resolve(import.meta.dirname, "./src")`) inside `resolve.alias` when on Vite 5, avoiding version-mismatched options.
