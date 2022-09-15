const { defineConfig } = require('cypress');

// const getCompareSnapshotsPlugin =
// require('cypress-image-diff-js/dist/plugin')
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');
const { lighthouse, prepareAudit } = require('cypress-audit');

// import {getCompareSnapshotsPlugin} from ('cypress-image-diff-js');
module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 660,
  e2e: {
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
      on('before:browser:launch', (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);

        // let's increase the browser window size when running headlessly
        // this will produce higher resolution images and videos
        // https://on.cypress.io/browser-launch-api
        console.log(
          'launching browser %s is headless? %s',
          browser.name,
          browser.isHeadless
        );

        // the browser width and height we want to get
        // our screenshots and videos will be of that resolution
        const width = 1000;
        const height = 660;

        console.log(
          'setting the browser window size to %d x %d',
          width,
          height
        );

        if (browser.name === 'chrome' && browser.isHeadless) {
          launchOptions.args.push(`--window-size=${width},${height}`);

          // force screen to be non-retina and just use our given resolution
          launchOptions.args.push('--force-device-scale-factor=1');
        }

        if (browser.name === 'electron' && browser.isHeadless) {
          // might not work on CI for some reason
          launchOptions.preferences.width = width;
          launchOptions.preferences.height = height;
        }

        if (browser.name === 'firefox' && browser.isHeadless) {
          launchOptions.args.push(`--width=${width}`);
          launchOptions.args.push(`--height=${height}`);
        }

        // IMPORTANT: return the updated browser launch options
        return launchOptions;
      });

      on('task', {
        async lighthouse(allOptions) {
          let txt;
          // calling the function is important
          const lighthouseTask = lighthouse();
          // const lighthouseTask = lighthouse((lighthouseReport) => {
          //   let lighthouseScoreText = '';
          //   const lighthouseResult = lighthouseReport?.lhr?.categories;
          //   const lighthousePerformance =
          //     'Performance: ' + lighthouseResult?.performance?.score + '\n';
          //   const lighthouseAccessibility =
          //     'Accessibility: ' + lighthouseResult?.accessibility?.score + '\n';
          //   const lighthouseBestPractices =
          //     'Best Practices: ' +
          //     lighthouseResult?.['best-practices']?.score +
          //     '\n';
          //   const lighthouseSEO = 'SEO: ' + lighthouseResult?.seo?.score + '\n';
          //   lighthouseScoreText =
          //     lighthousePerformance +
          //     lighthouseAccessibility +
          //     lighthouseBestPractices +
          //     lighthouseSEO;
          //
          //   console.log(lighthouseScoreText);
          //   txt = lighthouseScoreText;
          // });

          const report = await lighthouseTask(allOptions);
          // insert the text into the report returned the test
          report.txt = txt;
          return report;
        },
      });
    },
  },
});
