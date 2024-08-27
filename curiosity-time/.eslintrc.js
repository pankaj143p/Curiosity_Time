// .eslintrc.js
module.exports = {
    parser: '@typescript-eslint/parser', // If you're using TypeScript
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended', // If you're using TypeScript
    ],
    parserOptions: {
      ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
      sourceType: 'module', // Allows for the use of imports
      ecmaFeatures: {
        jsx: true, // Allows for the parsing of JSX
      },
    },
    rules: {
      // Add your custom rules here
    },
  };
  