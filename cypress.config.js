const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  projectId: "s9obpt",
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    specPattern: "cypress/e2e/**/*.{js,feature}",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    baseUrl:
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    watchForFileChanges: false,
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: false,
    video: false,
  },
});
