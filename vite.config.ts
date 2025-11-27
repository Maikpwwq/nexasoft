/**
 * This is the base config for vite.
 * When building, the adapter config is used which loads this file and extends it.
 */
import { defineConfig, type UserConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import { qwikReact } from "@builder.io/qwik-react/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import pkg from "./package.json";
import { partytownVite } from "@qwik.dev/partytown/utils";
import { join } from "path";
import path from 'path';
import tailwindcss from "@tailwindcss/vite";
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
      tsconfigPaths({ root: "." }),
      qwikReact(),
      partytownVite({ dest: join(__dirname, "dist", "~partytown") }),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        // "@mui/icons-material": "@mui/icons-material/esm",
        'node:async_hooks': path.resolve(__dirname, 'empty-async-hooks.js')
      },
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
    },
    /**
     * This is an advanced setting. It improves the bundling of your server code. To use it, make sure you understand when your consumed packages are dependencies or dev depencies. (otherwise things will break in production)
     */
    // ssr:
    //   command === "build" && mode === "production"
    //     ? {
    //         // All dev dependencies should be bundled in the server build
    //         noExternal: Object.keys(devDependencies),
    //         // Anything marked as a dependency will not be bundled
    //         // These should only be production binary deps (including deps of deps), CLI deps, and their module graph
    //         // If a dep-of-dep needs to be external, add it here
    //         // For example, if something uses `bcrypt` but you don't have it as a dep, you can write
    //         // external: [...Object.keys(dependencies), 'bcrypt']
    //         external: Object.keys(dependencies),
    //       }
    //     : undefined,
    ssr: {
      noExternal: ["@mui/icons-material"],
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
        onwarn(warning, warn) {
          if (
            warning.code === "MODULE_LEVEL_DIRECTIVES" ||
            warning.message.includes(`"use client"`) ||
            warning.message.includes("Module level directives")
          ) {
            return;
          }
          warn(warning);
        },
        //       output:{
        //           manualChunks(id) {
        //               if (id.includes('node_modules')) {
        //                   return id.toString().split('node_modules/')[1].split('/')[0].toString();
        //               }
        //           }
        //       }
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
