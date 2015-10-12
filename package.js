Package.describe({
  name: "angular-babel",
  summary: "Babel compiler and ng-annotate all in the one package for Meteor 1.2+",
  version: "0.0.1",
  git: "https://github.com/pbastowski/angular-babel.git"
});

Package.registerBuildPlugin({
  name: 'compileNGScript',
  sources: [
    'plugin/ng-script-compiler.js'
  ],
  npmDependencies: {
    'babel-core':  '5.8.25',
    'ng-annotate': '1.0.2'
  }
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2.0.1');

  api.use('isobuild:compiler-plugin@1.0.0'); // Used for compilers

  // Files to load in Client only.
  api.add_files([
    // Babel files
    'lib/core-js-no-number.js',
    'lib/runtime.js',
  ], 'client');
});

Package.onTest(function(api) {
});
