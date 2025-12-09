import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/Shish/",
  plugins: [
    react(),
    tailwindcss({
      config: {
        content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
        theme: {
          extend: {
            colors: {
              background: "#0f0f10",
              accent: "#10F1FF",
              secondary: "#6C63FF",
              text: "#E5E5E5",
            },
            fontFamily: {
              heading: ["Space Grotesk", "sans-serif"],
              body: ["Inter", "sans-serif"],
            },
            container: {
              center: true,
              padding: "1rem",
            },
          },
        },
        plugins: [],
      },
    }),
  ],
});
