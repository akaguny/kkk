define('userApi', ['angular', 'components/core/user/userApi.service', 'requestApi'], function (angular, userApiService) {

  angular
    .module( 'boardGame.userApi', ['boardGame.requestApi'])
    .service('userApiService', userApiService);
});