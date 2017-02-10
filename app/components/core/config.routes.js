( function () {
  'use strict';
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
  }

  // Конфиг выполняется на этапе инициализации
  angular.module( 'boardGame.config')
    .config( configRoutes )
})();