(function () {
  'use strict';
  // Объявление всех необходимых зависимостей
  angular.module('myApp', [
    'boardGame.requestApiMock',
    'boardGame.config',
    'boardGame.playRoomList',
    'boardGame.playRoom',
    'boardGame.playBoard',
    'boardGame.card',
    'boardGame.requestApi',
    'boardGame.welcomePage'
    ]);
})();

