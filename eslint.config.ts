import type { TSESLint } from "@typescript-eslint/utils";
import type { Linter } from "eslint";

import jseslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
    jseslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    ...eslintPluginAstro.configs.recommended,
    eslintConfigPrettier,
    {
        files: [
            "./src/**/*.{js,jsx,ts,tsx,astro,vue,svelte}",
            "./**/*.config.{ts,js}",
        ],
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
] satisfies Linter.Config[] | TSESLint.FlatConfig.ConfigFile;
