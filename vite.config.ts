/**
 * This is the base config for vite.
 * When building, the adapter config is used which loads this file and extends it.
 */
import { defineConfig, type UserConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import { qwikReact } from "@builder.io/qwik-react/vite";
import { partytownVite } from "@qwik.dev/partytown/utils";
import path from 'node:path';
import tailwindcss from "@tailwindcss/vite";
import pkg from "./package.json" with { type: "json" };
type PkgDep = Record<string, string>;
const { dependencies = {}, devDependencies = {} } = pkg as any as {
  dependencies: PkgDep;
  devDependencies: PkgDep;
  [key: string]: unknown;
};
errorOnDuplicatesPkgDeps(devDependencies, dependencies);
/**
 * Note that Vite normally starts from `index.html` but the qwikCity plugin makes start at `src/entry.ssr.tsx` instead.
 */

export default defineConfig(({ command, mode }): UserConfig => {
  return {
    plugins: [
      qwikCity(),
      qwikVite(),
      qwikReact(),
      partytownVite({ dest: path.join(import.meta.dirname, "dist", "~partytown") }),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        "~": path.resolve(import.meta.dirname, "./src"),
        // "@mui/icons-material": "@mui/icons-material/esm",
        'node:async_hooks': path.resolve(import.meta.dirname, 'empty-async-hooks.js')
      },
      tsconfigPaths: true,
    },
    // This tells Vite which dependencies to pre-build in dev mode.
    optimizeDeps: {
      // Exclude MUI/Emotion from pre-bundling to avoid pnpm store traversal loops
      exclude: [
        "@mui/material",
        "@mui/icons-material", 
        "@mui/system",
        "@emotion/react",
        "@emotion/styled"
      ],
      // include: [
      //   '@mui/icons-material',
      //   '@mui/material',
      // ],
    },
    ssr: {
      noExternal: [
        "@mui/material",
        "@mui/system",
        "@mui/icons-material",
        "react-transition-group",
        "@emotion/react",
        "@emotion/styled"
      ],
    },
    server: {
      headers: {
        // Don't cache the server response in dev mode
        "Cache-Control": "public, max-age=0",
      },
      //   https: {
      //     key: readFileSync('ssl/tls.key'),
      //     cert: readFileSync('ssl/tls.crt'),
      //   },
    },
    preview: {
      headers: {
        // Do cache the server response in preview (non-adapter production build)
        "Cache-Control": "public, max-age=600",
      },
    },
    // resolve: {
    //   alias: {
    //     "./runtimeConfig": "./runtimeConfig.browser",
    //   },
    // },
    build: {
      chunkSizeWarningLimit: 500,
      rollupOptions: {
        output: {
          sanitizeFileName: (name) => name.replace(/^(\.\.\/)+/, "").replace(/[^a-zA-Z0-9_-]/g, "_"),
          // Intercept chunk names to purge pnpm symlink path traversal
          chunkFileNames: (chunkInfo) => {
            const safeName = path.basename(chunkInfo.name).replace(/[^a-zA-Z0-9_-]/g, "_");
            return `build/${safeName}-[hash].js`;
          },
        },
        onwarn(warning, warn) {
          if (
            warning.code === "MODULE_LEVEL_DIRECTIVES" &&
            warning.message.includes(`"use client"`) ||
            warning.message.includes("Module level directives")
          ) {
            return;
          }
          warn(warning);
        },
      },
    },
  };
});
// *** utils ***
/**
 * Function to identify duplicate dependencies and throw an error
 * @param {Object} devDependencies - List of development dependencies
 * @param {Object} dependencies - List of production dependencies
 */
function errorOnDuplicatesPkgDeps(
  devDependencies: PkgDep,
  dependencies: PkgDep,
) {
  let msg = "";
  // Create an array 'duplicateDeps' by filtering devDependencies.
  // If a dependency also exists in dependencies, it is considered a duplicate.
  const duplicateDeps = Object.keys(devDependencies).filter(
    (dep) => dependencies[dep],
  );
  // include any known qwik packages
  const qwikPkg = Object.keys(dependencies).filter((value) =>
    /qwik/i.test(value),
  );
  // any errors for missing "qwik-city-plan"
  // [PLUGIN_ERROR]: Invalid module "@qwik-city-plan" is not a valid package
  msg = `Move qwik packages ${qwikPkg.join(", ")} to devDependencies`;
  if (qwikPkg.length > 0) {
    throw new Error(msg);
  }
  // Format the error message with the duplicates list.
  // The `join` function is used to represent the elements of the 'duplicateDeps' array as a comma-separated string.
  msg = `
    Warning: The dependency "${duplicateDeps.join(", ")}" is listed in both "devDependencies" and "dependencies".
    Please move the duplicated dependencies to "devDependencies" only and remove it from "dependencies"
  `;
  // Throw an error with the constructed message.
  if (duplicateDeps.length > 0) {
    throw new Error(msg);
  }
}
