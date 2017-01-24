( function () {
  'use strict';
  function configRoutes($locationProvider, $routeProvider) {
    // Префикс урлов
    $locationProvider.hashPrefix('!');
    // Пр умолчанию переадресовывать на
    $routeProvider.otherwise({redirectTo: '/card'});

    $routeProvider.when('/card', {
      templateUrl: 'components/examples/playBoard/board.html',
      controller: 'cardsCtrl',
      controllerAs: 'vm'
    });

    $routeProvider.when('/playRoomList', {
      templateUrl: 'components/examples/playRoomList/playRoomList.html',
      controller: 'playRoomListCtrl',
      controllerAs: 'vm'
    });
  }

  // Конфиг выполняется на этапе инициализации
  angular.module( 'boardGame.config')
    .config( configRoutes )
})();