//TODO Est ce vraiment necessaire de disable les regles eslint?
/* eslint-disable */

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4173'
  }
});
