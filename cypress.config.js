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
    retries: {
      runMode: 1,
      openMode: 1
    },
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    baseUrl:
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    chromeWebSecurity: false,
    //experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: false,
    trashAssetsBeforeRuns: true,
    //video: false,
    //videoUploadOnPasses: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
});
