module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  extends: ['airbnb-base', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    ItemSheet: 'readonly',
    game: 'readonly',
    mergeObject: 'readonly',
    CONFIG: 'writable',
    duplicate: 'readonly',
    $: 'readonly',
    Tabs: 'readonly',
    Hooks: 'readonly',
    Items: 'readonly',
    loadTemplates: 'readonly',
    Combat: 'writable',
    canvas: 'readonly',
    ActorSheet: 'readonly',
    Actor: 'readonly',
    Actors: 'readonly',
    fetchSpell: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
      'prettier/prettier': 'error',
      'no-restricted-syntax': 'off',
      'no-new': 'off',
      'no-underscore-dangle': 'off',
      'no-console': 'off',
      'class-methods-use-this': 'off',
      'max-classes-per-file': 'off',
      'import/extensions': 'off',
      'no-param-reassign': 'off',
      'prefer-destructuring': 'off',
      'no-plusplus': ['error', { "allowForLoopAfterthoughts": true }],
      'lines-between-class-members': ['error', 'always', {'exceptAfterSingleLine': true}],
      'import/prefer-default-export': 'warn',
      'no-continue': 'off',
      'no-constant-condition': ['error', { "checkLoops": false }],
      'import/prefer-default-export': 'off',
      'no-else-return': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', {'args': 'none'}]
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src', '', 'dist'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
  plugins: ['jest', 'prettier', '@typescript-eslint'],
  overrides: [
    {
      files: 'tests/**/*',
      rules: {
        'global-require': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
};
