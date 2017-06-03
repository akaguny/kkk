define(['angular', './card.controller', './card.service', 'requestApi'], function (angular, cardsCtrl, CardDataService) {
  'use strict';

  angular.module('boardGame.card', ['boardGame.requestApi'])
    .service('CardDataService', CardDataService)
    .controller('cardsCtrl', cardsCtrl);
});