define(['./requestApiMock.run', 'angularMocks'], function (requestApiMocksRun) {
  angular
    .module( 'boardGame.requestApiMock', ['ngMockE2E'])
    .run( requestApiMocksRun );
});