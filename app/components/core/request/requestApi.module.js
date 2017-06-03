define('requestApi', ['angular', 'components/core/request/requestApi.service'], function (angular, requestApi) {
  angular
    .module( 'boardGame.requestApi', [])
    .constant( 'API_PATH', '/server/api/public' )
    .service('requestApi', requestApi );
});