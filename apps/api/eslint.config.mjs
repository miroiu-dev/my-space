import { apiConfig } from "@workspace/eslint-config/api";

/** @type {import("eslint").Linter.Config} */
const nestJsConfig = [
  ...apiConfig,
  {
    languageOptions: {
      sourceType: "commonjs",
      parserOptions: {
        projectService: true,
        project: "tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];

export default nestJsConfig;
