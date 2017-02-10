( function () {
  'use strict';
  function requestApiMocksRun($httpBackend) {
    $httpBackend.whenGET(/.*\/server\/api\/public\/cards\/play.*/i).respond(200,
      [{"id":"0","type":"playCard","holder":"cardsDeck"},{"id":"1","type":"playCard","holder":"cardsDeck"},{"id":"2","type":"playCard","holder":"cardsDeck"}]
    );
    $httpBackend.whenGET(/.*\/server\/api\/public\/cards\/placeholder.*/i).respond(200,
      [{"id":"0","type":"placeHolder","name":"cardPlaceLeftHand","layer":"0"},{"id":"1","type":"placeHolder","name":"cardPlaceRightHand","layer":"0"},{"id":"2","type":"placeHolder","name":"cardPlaceTwoHand","layer":"1"},{"id":"3","type":"placeHolder","name":"cardsDeck","layer":"0"}]
    );

    // Пропускать все остальные запросы
    angular.forEach(['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], function (method) {
      $httpBackend.when(method, /.*/i).passThrough();
    });
  }

  // Конфиг выполняется на этапе инициализации
  angular.module( 'boardGame.requestApiMock')
    .run( requestApiMocksRun )
})();