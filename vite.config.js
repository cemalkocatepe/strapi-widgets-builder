import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"), // tüm component'ları dışa aktaran dosya
      name: "StrapiWidgetsBuilder",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "cjs", "umd"], // isteğe göre
    },
    rollupOptions: {
      external: ["react", "react-dom"], // dış bağımlılıklar
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
