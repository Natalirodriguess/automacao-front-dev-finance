const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://dev-finance.netlify.app/',
    supportFile: 'cypress/support/e2e.js'
  },
});
