// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

process.env.CHROME_BIN =
  process.env.CHROME_BIN || require('puppeteer').executablePath();

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-phantomjs-launcher'),
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    files: [
      './node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js',
    ],
    exclude: [],
    preprocessors: {},
    client: {
      clearContext: false,
    },
    coverageIstanbulReporter: {
      dir: 'coverage/typescript/lcov',
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    // browsers: ['Chrome'],
    browsers: ['Firefox'],
    singleRun: false,
    restartOnFileChange: true,
    concurrency: Infinity,
  });
};
