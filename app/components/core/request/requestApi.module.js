define(['./requestApi.config', './requestApi.service'],function () {
  angular
    .module( 'boardGame.requestApi', ['$http'])
    .constant( 'API_PATH', '/server/api/public' );
});