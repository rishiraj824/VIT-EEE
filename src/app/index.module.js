(function() {
  'use strict';

  angular
    .module('viteee', ['ui.bootstrap', 'ui.router', 'ngAnimate' ])
    .config(config);

  function config($stateProvider, $locationProvider) {
    
    $stateProvider
      .state('home', {

        url: '/',
        templateUrl: 'app/main/main.html'
      });

      $locationProvider.html5Mode(true);
  }

})();
