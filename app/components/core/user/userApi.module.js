define(['./userApi.service', 'components/core/request/requestApi.module'], function (user) {
  angular
    .module( 'boardGame.userApi', ['boardGame.requestApi'])
    .service('userApiService', user);;
});