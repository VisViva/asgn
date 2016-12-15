const webpack_config = require('../webpack/webpack.test.config.js')

module.exports = {
    basePath: '',
    frameworks: ['jasmine', 'sinon', 'chai'],
    files: [
        '../test/**/*.spec.js'
    ],
    exclude: [],
    preprocessors: {
        '../test/**/*.spec.js': ['webpack']
    },
    webpack: {
        resolve: webpack_config.resolve,
        module: webpack_config.module
    },
    port: 8090,
    colors: true,
    concurrency: Infinity,
    phantomjsLauncher: {
        exitOnResourceError: true
    },
    options: {
        windowName: 'Assignment - Abdulali Gasimov - Tests',
        settings: {
            webSecurityEnabled: false
        }
    }
};
