// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
const { exec } = require('child_process');
/**
 * @type { import("protractor").Config }
 */

var jsonServerPid;

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/app.e2e-spec.ts',
    './src/**/pesquisa.e2e-spec.ts',
  ],
  ngApimockOpts: {
    angularVersion: 2,
    hybrid: false
  },
  capabilities: {
    browserName: 'chrome',
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () { }
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    // Start json server
    jsonServerPid = exec('json-server ./e2e/e2emock.json --routes ./e2e/routes.json');
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  },
  onCleanUp() {
    // Stop json process
    jsonServerPid.kill('SIGINT');
  }
};
