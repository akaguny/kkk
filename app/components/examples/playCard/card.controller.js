define(['./requestApi.config', './requestApi.service'],function () {
  'use strict';

  angular
    .module('boardGame.card')
    // Логика, не связанная с представлением
    .controller('cardsCtrl', cardsCtrl);
//TODO: разделить на 2 контроллера: placeHolderCardCtrl и playingCardCtrl
  function cardsCtrl(CardDataService) {

    var vm = this;

    //Маппинг функций, доступных из отображения на функции контроллера
    vm.getCardsCheckedAtTheMoment = getCardsCheckedAtTheMoment;
    vm.putCardInPlaceholder = putCardInPlaceholder;
    vm.changeCheckState = changeCheckState;
    vm.getCardClass = getCardClass;
    vm.getCardStyle = getCardStyle;

    /**
     * Массив плейсхолдеров для карт
     */
    CardDataService.getCards('placeholder')
      .then(function (data) {
        console.log(data);
        vm.placeHolders = data;
      });

    /**
     * Массив плейсхолдеров для карт
     */
    CardDataService.getCards('play')
      .then(function (data) {
        console.log(data);
        vm.cards = data;
      });

    // Карты, выбранные в данный момент
    var cardsCheckedAtTheMoment = [];

    /**
     * Получить карты, выбранные в данный момент
     * @return {Array}
     */
    function getCardsCheckedAtTheMoment() {
      return cardsCheckedAtTheMoment;
    }

    /**
     * Переместить карту в плейсхолдер
     * @param {object} holder
     * @param {object[]} _cardsCheckedAtTheMoment
     */
    function putCardInPlaceholder(holder, _cardsCheckedAtTheMoment) {
      var len = _cardsCheckedAtTheMoment.length;
      // Если есть выбранные карты

      if (len !== 0) {
        // Если их больше чем 1
        if (len > 1) {
          _cardsCheckedAtTheMoment.forEach(function (item) {
            vm.putCardInPlaceholder(holder, [item]);
          });
        }
        // Поменять флаг "захолденности" (карта привязана к картхолдеру)
        _cardsCheckedAtTheMoment[0].holder = holder.name;
        _cardsCheckedAtTheMoment[0].layer = holder.layer;
      }
      // Сбросить хранилище выбранных в текущий момент карт
      _cardsCheckedAtTheMoment.forEach(function (item) {
        vm.changeCheckState(item);
      });

    }

    /**
     * Изменить статус выбора
     * @param {object} card
     */
    function changeCheckState(card) {
      card.checked = !card.checked;
      card.checked ?
        cardsCheckedAtTheMoment.push(card) :
        cardsCheckedAtTheMoment.splice(vm.getCardsCheckedAtTheMoment().indexOf(card), 1);
    }

    /**
     * Вычисляет стиль
     * @param {object} card
     * @return {string}
     */
    function getCardClass(card) {
      var cardStyle = '',
        checkedStyle = '';

      if (card.type === 'playCard') {
        cardStyle += 'playCard ';
        checkedStyle = card.checked ?
          'playCard playCardChecked' :
          'playCard';
        cardStyle += checkedStyle + ' ' + card.holder;
      } else {
        cardStyle += card.name;
      }

      return cardStyle;
    }

    /**
     * Получить отступ карты
     * @param {number} currentCardIndex
     * @param {object} card
     * @return {{margin-left: string}}
     */
    function getCardStyle(currentCardIndex, card) {
      var style = {};

      if (card.holder === 'cardsDeck') {
        style = {'margin-left' : 5 * currentCardIndex + 'px'};
      } else {
        style = {'z-index' : card.layer};
      }
      return style;
    }
  }
})