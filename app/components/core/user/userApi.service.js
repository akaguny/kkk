(function () {
  function user(requestApi) {
    var that = this;

    that.getUserState = getUserState;
    that.changeUserState = changeUserState;
    // Не реализовано
    // that.getUserData;

    /**
     * Получить состояние пользователя
     * @param {String} userId id пользователя
     * @return {Promise<JSON>} Данные пользователя
     */
    function getUserState(userId) {
      return requestApi.sendRequest(
        'get',
        '/server/api/public/get-user-state?user=' + userId);
    }

    /**
     * Изменить состояние пользователя
     * @param {String} userId id пользователя
     * @param {String} state новое состояние пользователя
     * @return {Promise<JSON>} Данные пользователя
     */
    function changeUserState(userId, state) {
      return requestApi.sendRequest(
        'get',
        '/server/api/public/get-user-state?user=' + userId + '&state=' + state);
    }
  }

  angular
    .module('boardGame.userApi', [])
    .service('userApiService', user);
})();