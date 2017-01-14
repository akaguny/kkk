'use strict';

angular.module('boardGame.card', ['ngRoute'])
  // настройка переадресации
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/card', {
      templateUrl: 'components/examples/card.html'
    });
  }]);