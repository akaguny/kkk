'use strict';

define([
  'angular',
  'boardGame.requestApiMock',
  'boardGame.config',
  'boardGame.playRoomList',
  'boardGame.playRoom',
  'boardGame.playBoard',
  'boardGame.card',
  'boardGame.requestApi',
  'boardGame.userApi',
  'boardGame.welcomePage'
], function (angular) {
  // Объявление всех необходимых зависимостей
  return angular.module('myApp', [
    'boardGame.requestApiMock',
    'boardGame.config',
    'boardGame.playRoomList',
    'boardGame.playRoom',
    'boardGame.playBoard',
    'boardGame.card',
    'boardGame.requestApi',
    'boardGame.userApi',
    'boardGame.welcomePage'
  ]);

});

