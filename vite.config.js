import { defineConfig } from "vite";
export default defineConfig({
  base: "/april-island/",
  server: { watch: { ignored: ["**/analysis/**"] } },
  build: { rollupOptions: { output: { manualChunks: { three: ["three"] } } } },
});
