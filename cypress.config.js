const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4neccq",
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br",
    setupNodeEvents(on, config) {},
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    
  },
});
