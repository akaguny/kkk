define(['angular','./requestApi.service'], function (angular, requestApi) {
  angular
    .module( 'boardGame.requestApi', ['$http'])
    .constant( 'API_PATH', '/server/api/public' )
    .service('requestApi', requestApi );
});