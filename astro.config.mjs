// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://portfolio.tailwindtemplate.net",
  base: "/",

  integrations: [
    mdx(),
    icon({
      include: {
        "fa6-solid": [
          // Navigation & UI
          "house",
          "newspaper",
          "bars",
          "xmark",
          "arrow-right",
          "chevron-left",
          "chevron-right",
          "check",
          "link",
          // Contact
          "envelope",
          "phone",
          "location-dot",
          // Blog metadata
          "calendar",
          "user",
          "clock",
          // Services & Features
          "brain",
          "comment",
          "eye",
          "paintbrush",
          "cloud",
          "chart-line",
          "lightbulb",
          "expand",
          "users",
          "rocket",
          "globe",
          // Misc
          "quote-left",
        ],
        "fa6-brands": [
          "github",
          "linkedin",
          "twitter",
          "facebook",
        ],
      },
    }),
  ],

  fonts: [
    {
      name: "Poppins",
      cssVariable: "--font-poppins",
      provider: fontProviders.google(),
      weights: ["400", "500", "600", "700"],
    },
    {
      name: "Orbitron",
      cssVariable: "--font-orbitron",
      provider: fontProviders.google(),
      weights: ["400", "500", "600", "700"],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
