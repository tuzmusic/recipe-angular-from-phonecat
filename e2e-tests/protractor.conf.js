//jshint strict: false
exports.config = {
  allScriptsTimeout: 11000,

  specs: ["*.js"],

  capabilities: {
    directConnect: true,
    browserName: "chrome",
    chromeOptions: {
      args: ["--headless", "--disable-gpu", "--window-size=800x600"]
    }
  },

  baseUrl: "http://0.0.0.0:8000",

  framework: "jasmine",

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
