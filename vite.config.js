import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
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
