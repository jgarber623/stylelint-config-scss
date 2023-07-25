const config = require('@jgarber/eslint-config');
const globals = require('globals');

module.exports = [
  ...config,
  {
    files: ['spec/**/*[sS]pec.?(m)js'],
    languageOptions: {
      globals: {
        ...globals.jasmine
      }
    }
  }
];
