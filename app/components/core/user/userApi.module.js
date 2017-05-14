define(['angular', './userApi.config', './userApi.service'], function () {
  angular
    .module( 'boardGame.userApi', ['boardGame.requestApi']);
});