define([], function () {
  'use strict';

  function welcomePageCtrl(userApiService) {
    var vm = this;

    //Маппинг функций, доступных из отображения на функции контроллера
    vm.updateUserState = updateUserState;
    //Локальные переменные
    vm.userState;
    vm.user;

    /**
     * Получить состояние пользователя
     * @return {string} user имя
     */
    function updateUserState(user) {
      userApiService.getUserState(user).then(function (_userState) {
        vm.userState = _userState.data['0'].status;
        console.log(vm.userState);
      });
    }

    (function () {
      // Значение при инициализации
      vm.user = 'user1-entered';
      updateUserState('user1-entered');
    })();

  }

  return welcomePageCtrl;
});