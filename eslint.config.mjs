import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = [eslintPluginPrettierRecommended];
/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  {
    ignores: ['node_modules', 'dist'],
    rules: {
      eqeqeq: 'off',
      'no-unused-vars': 'error',
      'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
      'no-console': 'warn',
      'no-undef': 'error',
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
