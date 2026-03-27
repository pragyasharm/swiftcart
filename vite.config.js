import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
export default defineConfig({
  base: "/swiftcart/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
      },
      manifest: {
        name: "SwiftCart",
        short_name: "SwiftCart",
        description: "E-commerce React App",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/swiftcart/",
        scope: "/swiftcart/",
        icons: [
          {
            src: "/swiftcart/logo-swiftcart-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/swiftcart/logo-swiftcart-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
