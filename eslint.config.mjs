import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  includeIgnoreFile(gitignorePath),
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  { rules: { "react/react-in-jsx-scope": "off", "react/prop-types": 0 } },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
