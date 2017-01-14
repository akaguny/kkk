'use strict';

angular.module('myApp.card', ['ngRoute'])
  // настройка
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/card', {
      templateUrl: 'components/examples/card.html'
    });
  }])
  //
  .controller('cardsCtrl', ['$scope',function($scope) {
    // Карты, выбранные в данный момент
    var cardsCheckedAtTheMoment = [];
    $scope.getCardsCheckedAtTheMoment = function () {
      return cardsCheckedAtTheMoment;
    }

    // Назначить карте место
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
      }
      // Сбросить хранилище выбранных в текущий момент карт
      _cardsCheckedAtTheMoment.forEach(function (item) {
        $scope.changeCheckState(item);
      });

    }

    $scope.cards = [
      {id: 0, type : "playCard", place: [0,0], checked : false, holder: "cardsDeck"},
      {id: 0 , type : "playCard", place : [0,0], checked : false, holder: "cardsDeck"},
      {id: 0 , type : "playCard", place : [0,0], checked : false, holder: "cardsDeck"}
    ]

    $scope.placeHolders = [
      {type : "placeHolder", name: "cardPlaceLeftHand"},
      {type : "placeHolder", name: "cardPlaceRightHand"},
      {type : "placeHolder", name: "cardPlaceTwoHand"},
      {type : "placeHolder", name: "cardsDeck"}
    ]

    /**
     * Показать алерт с текстом
     * @param text
     */
    $scope.showAlert = function (text) {
      window.alert(''+text);
    };

    /**
     * Изменить статус выбора
     * @param card
     */
    $scope.changeCheckState = function (card) {
      card.checked = !card.checked;
      card.checked ? cardsCheckedAtTheMoment.push(card) :
        cardsCheckedAtTheMoment.splice(cardsCheckedAtTheMoment.indexOf(card),1);
      console.log(cardsCheckedAtTheMoment)
    };

    $scope.getCardStyle = function (card) {
      var cardStyle = '',
        additionalStyle;

      if (card.type === 'playCard'){
        cardStyle += 'playCard '
        if(!card.holder){
          additionalStyle = card.checked ? 'playCard playCardChecked' : 'playCard';
          cardStyle += additionalStyle;
        } else {
          cardStyle += card.holder;
        }
      }
      else{
        cardStyle += card.name;
      }

      return cardStyle;
    };

    $scope.getCardPadding = function (currentCardIndex) {
      return {'margin-left' : 5 * currentCardIndex + 'px'};
    };



    $scope.choosen = false;
  }]);