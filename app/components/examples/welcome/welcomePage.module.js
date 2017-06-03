define(['angular', './welcomePage.controller', 'userApi'], function (angular, welcomePageCtrl) {

  'use strict';
  angular.module('boardGame.welcomePage', ['boardGame.userApi'])
    .controller('welcomePageCtrl', welcomePageCtrl);

});