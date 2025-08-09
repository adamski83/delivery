import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {},
});

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      ".turbo/**",
      "dist/**",
      "build/**",
      "coverage/**",
      ".nyc_output/**",
      "out/**",
      ".vercel/**",
      ".swc/**",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Usuwa niepotrzebne białe znaki w JSX
      "react/jsx-curly-spacing": ["error", "never"],
      "react/jsx-equals-spacing": ["error", "never"],
      "react/jsx-props-no-multi-spaces": "error",
      "react/jsx-tag-spacing": [
        "error",
        {
          closingSlash: "never",
          beforeSelfClosing: "always",
          afterOpening: "never",
          beforeClosing: "never",
        },
      ],
      // Usuwa niepotrzebne fragmenty tekstowe w JSX
      "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
      // Kontroluje wieloliniowe wyrażenia JSX
      "react/jsx-wrap-multilines": [
        "error",
        {
          declaration: "parens-new-line",
          assignment: "parens-new-line",
          return: "parens-new-line",
          arrow: "parens-new-line",
          condition: "parens-new-line",
          logical: "parens-new-line",
          prop: "parens-new-line",
        },
      ],
      // Usuwa niepotrzebne puste linie
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0, maxBOF: 0 }],
      "no-trailing-spaces": "error",
      "eol-last": ["error", "always"],
      // Usuwa niepotrzebne importy
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
];

export default eslintConfig;
