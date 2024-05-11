const {defineConfig} = require("cypress");
const {beforeRunHook, afterRunHook} = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
    screenshotsFolder: 'cypress/screenshots',
    screenshots: true,
    videosFolder: 'cypress/videos',
    video: true,
    screenshotOnRunFailure: true,
    reporter: 'cypress-mochawesome-reporter', reporterOptions: {
        charts: true,
        reportPageTitle: 'custom-title',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
    },

    env: {}, projectId: '5r89t6', e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
            require('cypress-mochawesome-reporter/plugin')(on);
            on('before:run', async (details) => {
                console.log('override before:run');
                await beforeRunHook(details);
            });

            on('after:run', async () => {
                console.log('override after:run');
                await afterRunHook();
            });
        },
    },
});
