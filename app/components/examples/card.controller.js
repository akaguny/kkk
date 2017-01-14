'use strict';

angular
  .module('boardGame.card')
  // Логика, не связанная с представлением
  .controller('cardsCtrl', cardsCtrl);

function cardsCtrl($scope , CardDataService) {
  // Карты, выбранные в данный момент
  var cardsCheckedAtTheMoment = [];

  /**
   * Получить карты, выбранные в данный момент
   * @return {Array}
   */
  $scope.getCardsCheckedAtTheMoment = function () {
    return cardsCheckedAtTheMoment;
  }

  /**
   * Массив карт
   * @type {*[]}
   */
  $scope.cards = CardDataService.getPlayCards().slice();

  /**
   * Массив плейсхолдеров для карт
   * @type {*[]}
   */
  $scope.placeHolders = CardDataService.getHolders().slice();

  /**
   * Переместить карту в плейсхолдер
   * @param {object} holder
   * @param {object[]} _cardsCheckedAtTheMoment
   */
  $scope.putCardInPlaceholder = function (holder, _cardsCheckedAtTheMoment) {
    var len = _cardsCheckedAtTheMoment.length;
    // Если есть выбранные карты
    if (len != 0){
      // Если их больше чем 1
      if (len > 1){
        _cardsCheckedAtTheMoment.forEach(function (item) {
          $scope.putCardInPlaceholder(holder, [item]);
        })
      }
      // Поменять флаг "захолденности" (карта привязана к картхолдеру)
      _cardsCheckedAtTheMoment[0].holder = holder.name;
      _cardsCheckedAtTheMoment[0].layer = holder.layer;
    }
    // Сбросить хранилище выбранных в текущий момент карт
    _cardsCheckedAtTheMoment.forEach(function (item) {
      $scope.changeCheckState(item);
    });

  }

  /**
   * Изменить статус выбора
   * @param {object} card
   */
  $scope.changeCheckState = function (card) {
    card.checked = !card.checked;
    card.checked ? cardsCheckedAtTheMoment.push(card) :
      cardsCheckedAtTheMoment.splice($scope.getCardsCheckedAtTheMoment().indexOf(card),1);
  };

  /**
   * Вычисляет стиль
   * @param {object} card
   * @return {string}
   */
  $scope.getCardClass = function (card) {
    var cardStyle = '',
      checkedStyle = '';

    if (card.type === 'playCard'){
      cardStyle += 'playCard '
      checkedStyle = card.checked ? 'playCard playCardChecked' : 'playCard';
      cardStyle += checkedStyle + ' ' + card.holder;
    }
    else{
      cardStyle += card.name;
    }

    return cardStyle;
  };

  /**
   * Получить отступ карты
   * @param {number} currentCardIndex
   * @param {object} card
   * @return {{margin-left: string}}
   */
  $scope.getCardStyle = function (currentCardIndex, card) {
    var style = {};

    if (card.holder === 'cardsDeck'){
      style = {'margin-left' : 5 * currentCardIndex + 'px'};
    }
    else {
      style = {'z-index' : card.layer}
    }
    return style;
  };
}