module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  plugins: [
    'promise',
    'compat',
    'import',
    'react',
  ],
  extends: [
    'eslint:recommended',
    'plugin:promise/recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': ['warn'],
    'no-console': 0,
    'compat/compat': 2,
    'import/no-unresolved': 0,
  },
};
