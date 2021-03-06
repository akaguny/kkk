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
requirejs.config({
  paths : {
    angular : 'bower_components/angular/angular',
    angularRoute : 'bower_components/angular-route/angular-route',
    angularMocks : 'bower_components/angular-mocks/angular-mocks',
    text : 'bower_components/text/text',
    app : 'components/core/app'
  },
  shim: {
    'angular' : {'exports' : 'angular'},
    'angularRoute': ['angular'],
    'exports':'angular.route',
    'angularMocks': {
      deps:['angular'],
      'exports':'angular.mock'
    },
    'app' : {
      deps:['angular']
    }
  },
  priority: [
    'angular'
  ]
});

// Инициализация приложения
requirejs([
  'angular',
  'app'
], function(angular) {
  var $html = angular.element(document.getElementsByTagName('html')[0]);

  angular.element().ready(function() {
    // bootstrap the app manually
    angular.bootstrap(document, ['myApp']);
  });
}
);