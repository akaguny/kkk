define([], function () {
  'use strict';

  function playRoomListDataService(requestApi) {
    /**
     * Получть холдеры
     * @return {object[]}
     */
    this.getCards = function (type) {
      var cardholders = {};

      return requestApi.getCards(type)
        .then(function (response) {
          cardholders = response.data;
        }).then(function () {
          return cardholders;
        });
    };
  }

  return playRoomListDataService;
});