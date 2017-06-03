define(['angular', './playBoard.controller',
  './playBoard.service'], function (angular, playBoardCtrl, playBoardService) {

  'use strict';

  angular.module('boardGame.playBoard', ['boardGame.requestApi'])
    .service('playBoardService', playBoardService)
    .controller('playBoardCtrl', playBoardCtrl);

});