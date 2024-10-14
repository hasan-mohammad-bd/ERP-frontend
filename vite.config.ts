import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    // host: "0.0.0.0", // Accepts connections from any IP
    port: 3000,
    strictPort: true, // Ensures the port is not changed
    open: true, // Opens browser on start (optional)
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
