define(['./requestApi.config', './requestApi.service'],function () {
  'use strict';

  angular
    .module('boardGame.card')
    // Логика, не связанная с представлением
    .controller('playRoomCtrl', playRoomCtrl);
  function playRoomCtrl() {
  }
})