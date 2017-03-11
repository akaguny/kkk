'use strict';

angular
  .module('boardGame.card')
  // Логика, не связанная с представлением
  .controller('welcomePageCtrl', welcomePageCtrl);

function welcomePageCtrl() {
  var vm = this,
      userState;

  //Маппинг функций, доступных из отображения на функции контроллера
  vm.getUserState = getUserState;

  //Локальные переменные
  vm.userState = userState;

  function getUserState() {
    return userState;
  }

}