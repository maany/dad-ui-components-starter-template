import dts from "vite-plugin-dts";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, UserConfig } from "vite";

const MODULE_NAME = "dad-ui-component-library";

export default defineConfig({
  base: "./",
  plugins: [dts({ rollupTypes: true }), react()],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: MODULE_NAME,
      formats: ["es", "cjs", "umd", "iife"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
} satisfies UserConfig);
