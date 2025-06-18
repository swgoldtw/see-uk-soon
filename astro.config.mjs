// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    i18n: {
        defaultLocale: "zh",
        locales: ["en", "zh"],
        routing: {
            prefixDefaultLocale: false,
        },
    },
});