'use strict';
(function () {
  var allTestFiles, TEST_REGEXP, pathToModule;

  if (window.__karma__) {
    allTestFiles = [];
    TEST_REGEXP = /spec\.js$/;
    // в карме пути к путям у файлов прибавляется /base
    pathToModule = function(path) {
      return path.replace(/^\/base\/app\//, '').replace(/\.js$/, '');
    };

    Object.keys(window.__karma__.files).forEach(function(file) {
      if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
      }
    });
  }
})();


// Configuration Options
require.config({
  paths : {
    definejs: 'define',
    angular : 'bower_components/angular/angular',
    angularRoute : 'bower_components/angular-route/angular-route',
    angularMocks : 'bower_components/angular-mocks/angular-mocks',
    text : 'bower_components/text/text'
  }
  // },
  // // shim: makes external libraries reachable
  // shim : {
  //   angular : {
  //     exports : 'angular'
  //   },
  //   angularRoute : ['angular'],
  //   angularMocks : {
  //     deps : ['angular'],
  //     exports : 'angular.mock'
  //   },
  //   priority: [
  //     'angular'
  //   ],
  //   deps: window.__karma__ ? allTestFiles : [],
  //   callback: window.__karma__ ? window.__karma__.start : null,
  //   baseUrl: window.__karma__ ? '/base/app' : ''
  // }
});

// Инициализация приложения
require([
  'definejs',
  'angular',
  'boardGame'
], function(angular, app) {
  var $html = angular.element(document.getElementsByTagName('html')[0]);

  angular.element().ready(function() {
      // bootstrap the app manually
    angular.bootstrap(document, ['myApp']);
  });
}
);