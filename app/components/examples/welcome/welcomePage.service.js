define(['./requestApi.config', './requestApi.service'],function () {
  'use strict';

  angular
    .module('boardGame.welcomePage')
    // Логика, не связанная с представлением
    .service('welcomePageService', welcomePageService);

  function welcomePageService() {
  }

})