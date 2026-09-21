import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      /**
       * This site is mostly prose, and prose has apostrophes in it. The real
       * purpose of this rule is catching `>` and `}`, which genuinely break
       * JSX parsing — so we keep it on for those and let apostrophes and
       * quotes be written normally. Escaping every "don't" to "don&apos;t"
       * makes the copy materially harder to read and edit, and Barry will be
       * editing this copy.
       */
      "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
    },
  },
]);

export default eslintConfig;
