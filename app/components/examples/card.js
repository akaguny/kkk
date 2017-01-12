'use strict';

angular.module('myApp.card', ['ngRoute'])
  // настройка
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/card', {
      templateUrl: 'components/examples/card.html'
    });
  }])
  //
  .controller('GetCardsCtrl', ['$scope',function($scope) {
    $scope.cards = [
    {"name" : 'Бешеная собака', 'power' : '+100500'},
    {"name" : 'Василий Иванович', 'power' : 'over9999'},
    {"name" : 'Чупик', 'power' : '10'}
    ]
    /**
     * Показать алерт с текстом
     * @param text
     */
    $scope.showAlert = function (text) {
      window.alert(''+text);
    };
  }]);