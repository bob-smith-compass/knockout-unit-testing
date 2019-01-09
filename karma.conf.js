// Karma configuration
// Generated on Tue Jan 08 2019 15:04:24 GMT-0600 (Central Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    // frameworks: ['jasmine', 'requirejs'], // If you want a script tag to be added before requirejs (to load an amd compatible script before requirejs) then you must add the requirejs and adapter script to the files list and remove requirejs from the frameworks list. This allows you to control the order. For instance to load knockout.js before requirejs...
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'lib/knockout/knockout.js',

      'lib/requirejs/require.js',
      'node_modules/karma-requirejs/lib/adapter.js',


      'test/test-main.js',

      { pattern: 'lib/**/*.js', included: false },
      { pattern: 'src/**/*.js', included: false },
      { pattern: 'test/**/*Spec.js', included: false },

      'test/firstSpec.js'
    ],

    // list of files / patterns to exclude
    exclude: [
      '**/*.swp',
      'src/main.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}


/** 
 * Unmodified Official AngularJS karma.config.js file
 */
//jshint strict: false

// module.exports = function(config) {
//   config.set({

//     basePath: './src',

//     files: [
//       'lib/angular/angular.js',
//       'lib/angular-animate/angular-animate.js',
//       'lib/angular-resource/angular-resource.js',
//       'lib/angular-route/angular-route.js',
//       '../node_modules/angular-mocks/angular-mocks.js',
      
//       '**/*.module.js',
//       '*!(.module|.spec).js',
//       '!(lib)/**/*!(.module|.spec).js',
//       '**/*.spec.js',
//       '**/*[Ss]pec.js'
//     ],

//     autoWatch: true,

//     frameworks: ['jasmine'],

//     browsers: ['Chrome', 'Firefox'],

//     autoWatch: true,


//     plugins: [
//       'karma-chrome-launcher',
//       'karma-firefox-launcher',
//       'karma-jasmine'
//     ]

//   });
// };
