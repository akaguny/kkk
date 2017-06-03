define(['angular', './playRoom.controller'], function (angular, playRoom) {
  'use strict';

  angular.module('boardGame.playRoom', [])
    .controller('playRoomCtrl', playRoom);
});