import type { AstroUserConfig } from "astro";

import tailwind from "@astrojs/tailwind";

export default {
    compressHTML: false,
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
    ],
    output: "static",
    server: {
        port: 8080,
    },
    vite: {
        build: {
            assetsInlineLimit: 0,
            minify: false,
            rollupOptions: {
                output: {
                    hashCharacters: "base36",
                },
            },
        },
    },
} satisfies AstroUserConfig;
