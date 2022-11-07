import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import rollupTs from "rollup-plugin-typescript2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({ insertTypesEntry: true }),
        // only for type checking
        {
            ...rollupTs({
                check: true,
                tsconfig: "./tsconfig.json",
                tsconfigOverride: {
                    noEmits: true,
                    sourceMap: true,
                    declaration: true,
                    declarationMap: true,
                    exclude: ["vite.config.ts", "main.ts", "env.d.ts"]
                },
            }),
            // run before build
            enforce: "pre",
        },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: true,
    target: "esnext",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ViteLibTsBase",
      fileName: (format: any) => `index.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn"t be bundled
      // into your library
      external: ["vue"],
      // input: [
      //   path.resolve(__dirname, "./src/classes"),
      //   path.resolve(__dirname, "./src/components"),
      //   path.resolve(__dirname, "./src/interfaces"),
      //   path.resolve(__dirname, "./src/util")
      // ],
      output: {
        preserveModules: false,
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue"          
        },
      },
    },
  },
});
