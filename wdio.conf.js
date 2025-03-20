export const config = {
    runner: 'local',
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    specs: [
        // './test/specs/**/*.js'
        './test/specs/webview.spec.js'
    ],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
        platformName: 'Android',
        browserName: 'Chrome',
        deviceName: 'Samsung Galaxy S22 Ultra',
        platformVersion: '12.0',
        app: process.env.BROWSERSTACK_APP_ID,
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 15000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 150000
    },
}
