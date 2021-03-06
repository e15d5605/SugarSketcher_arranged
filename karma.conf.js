// Karma configuration
module.exports = function(config) {

    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['qunit','browserify'],

        plugins: ['karma-qunit','karma-browserify','karma-phantomjs-launcher','karma-chrome-launcher', 'karma-coverage', 'karma-coveralls'],

        browserify : {
            debug: true,
            transform : [['babelify', { 'presets': ['es2015'] }]]
        },

        // list of files / patterns to load in the browser
        // Load in our transpiled files first, to make sure
        // that the polyfills are loaded, ready for the tests.
        files: [
            'node_modules/babel-polyfill/dist/polyfill.js',
            'src/js/**/*.js',
            'src/test/**/*.js'
        ],


        // list of files to exclude
        // Warning: Exclude views from test! (Possible change in the future).
        exclude: [
            'src/js/views/**/*.js'
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/js/**/*.js' : ['browserify','coverage'],
            'src/test/**/*.js' : ['browserify'],
            'src/test/test.js' : ['browserify']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress','coverage','coveralls'],

        coverageReporter: {
            type: 'lcov', // lcov or lcovonly are required for generating lcov.info files
            dir: 'coverage/'
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        customLaunchers: {
            'PhantomJS_debug': {
                base: 'PhantomJS',
                options: {
                    windowName: 'my-window',
                    settings: {
                        webSecurityEnabled: false
                    },
                },
                flags: ['--load-images=true'],
                debug: true
            }
        },
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};