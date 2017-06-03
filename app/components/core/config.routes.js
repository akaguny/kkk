'use strict';
define(['angular'], function (angular) {


  // angular.$inject(['$locationProvider', '$routeProvider']);
  /**
   * Конфигурация роутинга
   * @param {Object} $locationProvider - провайдер, отвечающий за URL
   * @param {Object} $routeProvider - провайдер, непосредственно отвечающий за роутинг
   */
  function configRoutes($locationProvider, $routeProvider) {
    // Префикс урлов
    $locationProvider.hashPrefix('!');
    // Пр умолчанию переадресовывать на
    $routeProvider.otherwise({redirectTo: '/card'});

    $routeProvider.when('/card', {
      templateUrl: 'components/examples/playCard/card.html',
      controller: 'cardsCtrl',
      controllerAs: 'vm'
    });

    $routeProvider.when('/playRoom', {
      templateUrl: 'components/examples/playRoom/playRoom.html',
      controller: 'playRoomCtrl',
      controllerAs: 'vm'
    });

    $routeProvider.when('/playRoomList', {
      templateUrl: 'components/examples/playRoomList/playRoomList.html',
      controller: 'playRoomListCtrl',
      controllerAs: 'vm'
    });

    $routeProvider.when('/playBoard', {
      templateUrl: 'components/examples/playCard/card.html',
      controller: 'playBoardCtrl',
      controllerAs: 'vm'
    });

    $routeProvider.when('/welcomePage', {
      templateUrl: 'components/examples/welcome/welcomePage.html',
      controller: 'welcomePageCtrl',
      controllerAs: 'vm'
    });
  }

  return configRoutes;
});