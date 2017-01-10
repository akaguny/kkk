'use strict';

angular.module('myApp.card', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/card', {
      templateUrl: 'components/examples/card.html',
      controller: 'CardCtrl'
    });
  }])

  .controller('CardCtrl', [function() {

  }]);