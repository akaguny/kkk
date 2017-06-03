define(['angular', './playRoomList.controller', './playRoomList.service'], function (angular, playRoomListCtrl, playRoomListDataService) {

  'use strict';

  angular.module('boardGame.playRoomList', ['boardGame.requestApi'])
    .service('playRoomListDataService', playRoomListDataService)
    .controller('playRoomListCtrl', playRoomListCtrl);

});