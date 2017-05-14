'use strict';

define([
  'angular',
  'components/core/requestMock/requestApiMock.module',
  'components/core/config.module',
  'components/core/request/requestApi.module',
  'components/core/user/userApi.module',
  'components/examples/playRoom/playRoom.config',
  'components/examples/playRoomList/playRoomList.config',
  'components/examples/playBoard/playBoard.config',
  'components/examples/playCard/card.config',
  'components/examples/welcome/welcomePage.config'
], function () {
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

