( function () {
  'use strict';
  function configRoutes($locationProvider, $routeProvider) {
    // Префикс урлов
    $locationProvider.hashPrefix('!');
    // Пр умолчанию переадресовывать на
    $routeProvider.otherwise({redirectTo: '/card'});

    $routeProvider.when('/card', {
      templateUrl: 'components/examples/board.html',
      controller: 'cardsCtrl'
    });
  }

  // Конфиг выполняется на этапе инициализации
  angular.module( 'boardGame.config')
    .config( configRoutes )
})();