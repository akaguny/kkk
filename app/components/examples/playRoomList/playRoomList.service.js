'use strict';

angular
  .module('boardGame.playRoomList')
  // Логика, не связанная с представлением
  .service('playRoomListDataService', playRoomListDataService)

function playRoomListDataService(requestApi) {
  /**
   * Получть холдеры
   * @return {object[]}
   */
  this.getCards=function (type){
    var cardholders = {};

    return requestApi.getCards(type)
      .then(function (response) {
        cardholders = response.data;
      }).then(function () {
      return cardholders;
    });

    // return [
    //   {type : "placeHolder", name: "cardPlaceLeftHand",layer: 0},
    //   {type : "placeHolder", name: "cardPlaceRightHand",layer: 0},
    //   {type : "placeHolder", name: "cardPlaceTwoHand",layer:1},
    //   {type : "placeHolder", name: "cardsDeck",layer: 0}
    // ]
  }
}

