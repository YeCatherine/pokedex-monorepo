const { defineConfig } = require('cypress');

const { lighthouse, prepareAudit } = require('@cypress-audit/lighthouse');
const { pa11y } = require('@cypress-audit/pa11y');
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');

module.exports = defineConfig({
  lighthouse: {
    options: {
      formFactor: 'desktop',
      screenEmulation: {
        width: 500,
        height: 940,
        deviceScaleRatio: 1,
        mobile: false,
        disable: false,
      },
    },
    thresholds: {
      performance: 60,
      accessibility: 80,
      'best-practices': 80,
      seo: 80,
      pwa: 0,
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3002/', // this is your app
    screenshotsFolder: './cypress/snapshots/actual',
    trashAssetsBeforeRuns: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:browser:launch', (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });
      require('@cypress/code-coverage/task')(on, config);
      on('task', {
        lighthouse: lighthouse(),
        pa11y: pa11y(console.log.bind(console)),
      });

      getCompareSnapshotsPlugin(on, config);
    },
  },
});
