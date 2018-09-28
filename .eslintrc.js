module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'import', 'jest'],
  rules: {
    'prettier/prettier': 1,
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'no-prototype-builtins': 0,
    'no-nested-ternary': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
  },
};
