import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import rollupTs from 'rollup-plugin-typescript2';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({ insertTypesEntry: true }),
        // only for type checking
        {
            ...rollupTs({
                check: true,
                tsconfig: './tsconfig.json',
                tsconfigOverride: {
                    noEmits: true,
                },
            }),
            // run before build
            enforce: 'pre',
        },
  ],
  resolve: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
  build: {
    sourcemap: true,
    target: 'esnext',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'GssArtCommonLib',
      fileName: (format: any) => `gss-art-common-lib.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', 'jquery', 'numbro', 'axios', 'lodash', 'moment'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
          jQuery: 'JQuery',
          $: '$',
          _: 'lodash',
          moment: 'moment',
          numbro: 'numbro',
          NF: 'NF',
          axios: 'axios'
        },
      },
    },
  },
});
