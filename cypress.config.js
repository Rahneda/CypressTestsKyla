const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 5000,
  viewportWidth: 1366,
  viewportHeight: 768,

  e2e: {
    baseUrl: 'https://actionurgentcare.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
