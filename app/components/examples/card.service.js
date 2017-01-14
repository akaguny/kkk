'use strict';

angular
  .module('boardGame.card')
  // Логика, не связанная с представлением
  .service('CardDataService', CardDataService)

function CardDataService() {
  /**
   * Получть игровые карты
   * @return {object[]}
   */
  this.getPlayCards = function (){
    return [
      {type : "playCard", checked : false, holder: "cardsDeck"},
      {type : "playCard", checked : false, holder: "cardsDeck"},
      {type : "playCard", checked : false, holder: "cardsDeck"}
    ]
  }

  /**
   * Получть холдеры
   * @return {object[]}
   */
  this.getHolders=function (){
    return [
      {type : "placeHolder", name: "cardPlaceLeftHand",layer: 0},
      {type : "placeHolder", name: "cardPlaceRightHand",layer: 0},
      {type : "placeHolder", name: "cardPlaceTwoHand",layer:1},
      {type : "placeHolder", name: "cardsDeck",layer: 0}
    ]
  }
}

