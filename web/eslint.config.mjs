import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import jsxA11y from "eslint-plugin-jsx-a11y";
import eslintConfigPrettier from "eslint-config-prettier/flat";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // eslint-config-next already registers the jsx-a11y plugin, so we only
  // layer in its recommended ruleset instead of redefining the plugin.
  {
    name: "jsx-a11y/recommended",
    rules: jsxA11y.flatConfigs.recommended.rules,
  },
  // Disable ESLint rules that conflict with Prettier. Must stay last.
  eslintConfigPrettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Generated PWA / sitemap artifacts.
    "public/sw.js",
    "public/swe-worker-*.js",
    "public/workbox-*.js",
  ]),
]);

export default eslintConfig;
