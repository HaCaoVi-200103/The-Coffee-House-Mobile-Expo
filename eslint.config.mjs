import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
  },
  {
    languageOptions:
    {
      globals:
        { ...globals.browser, ...globals.node }
    }
  }, {
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Tắt quy tắc kiểm tra React trong scope
    },
    overrides: [
      {
        files: ['**/*.{ts,tsx}'],
        parserOptions: {
          ecmaVersion: 2022,
          sourceType: 'module',
        },
      },
    ],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];