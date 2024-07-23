import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
  ...compat.extends("eslint:recommended"),
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.jquery,
      },
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        jest: true,
      },
    },
    rules: {
      "no-multiple-empty-lines": "warn",
      "no-var": "error",
      "prefer-const": "error",
    },
  },
];
// TODO: Fix ESlint ignore pattern
// npx eslint . --ignore-pattern "public/contrib/*" works
// video - 3. -> running a test suite with jest
// https://www.npmjs.com/package/eslint-config-myconfig-test-1?activeTab=code
// Set up locally public eslint config. Follow the guide https://eslint.org/docs/latest/extend/shareable-configs
