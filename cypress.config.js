const { defineConfig } = require("cypress");

const getBaseUrl = (environment) => {
  switch (environment) {
    case "DEV":
      return "https://all.accor.com/";
    case "STG":
      return "https://all.accor.com/";
    case "PROD":
      return "https://all.accor.com/";
    default:
      return "https://all.accor.com/";
  }
};

const getSpecPatternPath = (scopeName) => {
  switch (scopeName) {
    case "BOOKING":
      return "cypress/e2e/booking";
    case "SCOP1":
      return "cypress/e2e/scop1";
    case "SCOP2":
      return "cypress/e2e/scop2";
    default:
      return "cypress/e2e";
  }
};

module.exports = defineConfig({
  e2e: {
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
    numTestsKeptInMemory: 5,
    scrollBehavior: false,
    defaultCommandTimeout: 10000,
    viewportHeight: 900,
    viewportWidth: 1440,
    setupNodeEvents(on, config) {
      config.baseUrl = "https://all.accor.com/"
      config.specPattern = getSpecPatternPath("BOOKING");
      return config;
    },
  },
});
