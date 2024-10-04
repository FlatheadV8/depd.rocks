import type { Config } from "prettier";

export default {
    plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
    overrides: [
        {
            files: ["./src/**/*.astro"],
            options: {
                parser: "astro",
            },
        },
    ],
} satisfies Config;
