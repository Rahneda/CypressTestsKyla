const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 5000,
  viewportWidth: 1366,
  viewportHeight: 768,
  video: false,
  e2e: {
    baseUrl: 'https://actionurgentcare.com/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
