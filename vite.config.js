import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  // ...existing code...
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        booking: path.resolve(__dirname, "booking.html"),
      },
    },
  },
});
