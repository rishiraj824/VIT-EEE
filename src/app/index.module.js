(function() {
  'use strict';

  angular
    .module('viteee', ['ui.bootstrap', 'ui.router', 'ngAnimate' ])
    .config(config);

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {

        url: '/',
        templateUrl: 'app/main/main.html'
      });


    $urlRouterProvider.otherwise('/');
  }

})();
