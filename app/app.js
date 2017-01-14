'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.card']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  // Префикс урлов
  $locationProvider.hashPrefix('!');
  // Пр умолчанию переадресовывать на
  $routeProvider.otherwise({redirectTo: '/card'});
}]);
