(function () {
  function requestApi($http,$window) {

    /**
     * Логин
     */
    this.isLogin = function () {
      $http.get('/server/api/public/' + 'is_login')
        .success(function (data) {
          $window.alert(data);
        })
    }

    /**
     * Логин
     */
    this.login = function () {
      $http.post('/server/api/public/' + 'login')
        .then(function (data) {
          $window.alert(data);
        })
    }

    /**
     * Получение набор
     * @param {String} type
     */
    this.getCards = function (type) {
      var response;

      // TODO: модифицировать API и передавать тип в качестве параметра GET
      return this.sendRequest('get', '/server/api/public/' + type + 'cards')
          .then(function (_response) {
            response = _response;
          })
        .then(function () {
          return response
        })
      };

    /**
     * Отправка запроса
     * @param type
     * @param request
     * @param config
     * @param data
     * @return {*|wdpromise.Promise<any>|!webdriver.promise.Promise}
     */
    this.sendRequest = function (type, request, config, data) {
      var request;

      switch (type){
        case 'get':
          request = $http.get(request, config);
          break;
        case 'post':
          request = $http.post(request, config, data);
          break;
        default:
          console.log('sendRequest не поддерживается '+type);
      }

      return request.then(function (response) {
        return response;
      })

    }
  }

  angular
    .module( 'boardGame.requestApi', [])
    .service('requestApi', requestApi );
})();