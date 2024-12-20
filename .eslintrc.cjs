/* eslint-env node */
module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@figma/figma-plugins/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './src-code/tsconfig.json',
    },
    root: true
  }