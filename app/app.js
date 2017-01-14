'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'boardGame.card'])
  // Конфиг выполняется на этапе инициализации
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  // Префикс урлов
  $locationProvider.hashPrefix('!');
  // Пр умолчанию переадресовывать на
  $routeProvider.otherwise({redirectTo: '/card'});
}]);
