import { staticAdapter } from '@builder.io/qwik-city/adapters/static/vite';
import { extendConfig } from '@builder.io/qwik-city/vite';
import baseConfig from '../../vite.config';

export default extendConfig(baseConfig, () => {
  return {
    plugins: [
      staticAdapter({
        origin: 'https://nexasoft.netlify.app',
      }),
    ],
  };
});