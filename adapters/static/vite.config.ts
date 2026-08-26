import { staticAdapter } from '@builder.io/qwik-city/adapters/static/vite';
import { defineConfig, mergeConfig, type UserConfig } from 'vite';
import baseConfig from '../../vite.config';

export default defineConfig((env) => {
  // 1. Resolvemos el objeto base evaluando la función exportada en vite.config.ts
  const resolvedBaseConfig =
    typeof baseConfig === 'function'
      ? (baseConfig as any)(env)
      : baseConfig;

  // 2. Fusionamos de manera limpia sin sobreescribir entradas ni forzar ssr manualmente
  return mergeConfig(resolvedBaseConfig as UserConfig, {
    plugins: [
      staticAdapter({
        origin: 'https://nexasoft.netlify.app',
      }),
    ],
  });
});