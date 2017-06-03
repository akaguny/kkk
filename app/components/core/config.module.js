define(['angular', 'components/core/config.routes', 'angularRoute'], function (angular, configRoutes) {
  angular.module( 'boardGame.config', ['ngRoute'] )
    .config(configRoutes);
});