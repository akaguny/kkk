define(['./requestApi.config', './requestApi.service'],function () {

  function requestApi($http, $window) {

    this.getCards = getCards;
    this.sendRequest = sendRequest;

      /**
     * Получение набор
     * @param {String} type тип карточки
     * @return {Promise<JSON>}
     */
    function getCards(type) {
      var response;

      // TODO: модифицировать API и передавать тип в качестве параметра GET
      return this.sendRequest('get', '/server/api/public/cards/'+type)
          .then(function (_response) {
            response = _response;
          })
        .then(function () {
          return response;
        });
    }

    /**
     * Отправка запроса
     * @param type
     * @param request
     * @param config
     * @param data
     * @return {*|wdpromise.Promise<any>|!webdriver.promise.Promise}
     */
    function sendRequest(type, request, config, data) {
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
      });

    }
  }

  angular
    .module( 'boardGame.requestApi', [])
    .service('requestApi', requestApi );

});