import {defineConfig, globalIgnores} from "eslint/config";
import globals from "globals";
import eslintJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintReact from "@eslint-react/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import {reactRefresh} from "eslint-plugin-react-refresh";

export default defineConfig([
    globalIgnores(["**/dist/", "**/node_modules/"]),
    // global
    {
        files: ["**/src/**/*.{ts,tsx}"],
        extends: [
            eslintJs.configs.recommended,
            tseslint.configs.recommended,
        ],
    },
    // backend + api
    {
        files: ["{backend,api}/**/*.ts"],
        languageOptions:{
            globals: globals.node
        },
    },
    // frontend
    {
        files: ["frontend/**/*.{ts,tsx}"],
        extends: [
            eslintReact.configs["recommended-typescript"],
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite(),
        ],
        languageOptions:{
            globals: globals.browser,
        },
    },
]);