import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "*": {
        target: "http://192.168.1.39:5173",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
