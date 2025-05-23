import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    plugins: ["simple-import-sort", "prettier", "import"],
    rules: {
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
    },
    overrides: [
      {
        files: ["*.js"],
      },
    ],
  }),
];

export default eslintConfig;
