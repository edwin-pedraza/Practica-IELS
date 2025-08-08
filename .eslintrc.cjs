module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  plugins: ['react-refresh'],
  settings: {
    react: {
      version: '18.2',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-target-blank': 'off',
  },
};
