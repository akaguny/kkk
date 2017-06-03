'use strict';

define([
  'angular',
  'components/core/config.module',
  'components/core/requestMock/requestApiMock.module',
  'components/core/request/requestApi.module',
  'components/core/user/userApi.module',
  'components/examples/playRoom/playRoom.module',
  'components/examples/playRoomList/playRoomList.module',
  'components/examples/playBoard/playBoard.module',
  'components/examples/welcome/welcomePage.module',
  'components/examples/playCard/card.module'
], function () {
  // Объявление всех необходимых зависимостей
  return angular.module('myApp', [
    'boardGame.requestApiMock',
    'boardGame.config',
    'boardGame.requestApi',
    'boardGame.userApi',
    'boardGame.playRoomList',
    'boardGame.playRoom',
    'boardGame.playBoard',
    'boardGame.welcomePage',
    'boardGame.card'
  ]);

});

