define(['./requestApi.config', './requestApi.service'],function () {
'use strict';

angular
  .module('boardGame.playRoomList')
  // Логика, не связанная с представлением
  .controller('playRoomListCtrl', playRoomListCtrl);
function playRoomListCtrl(playRoomListDataService, requestApi) {

}
})