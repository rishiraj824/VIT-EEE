(function() {
  'use strict';

  angular
    .module('viteee', ['ui.bootstrap', 'ui.router', 'ngAnimate','ngVidBg' ])
    .config(config);

  function config($stateProvider, $urlRouterProvider) {
    
    $stateProvider
      .state('home', {

        url: '/',
        templateUrl: 'app/main/main.html'
      })
      .state('about', {

        url: '/about-us',
        templateUrl: 'app/about/about-us.html'
      })
       .state('infrastructure', {

        url: '/about/infrastructure',
        templateUrl: 'app/about/infrastructure.html'
      })
      .state('about/placements', {

        url: '/placements',
        templateUrl: 'app/about/placements.html'
      })
      .state('about/internatinal-relations', {

        url: '/about-us/internatinal-relations',
        templateUrl: 'app/about/internatinal-relations.html'
      })
      .state('about/campus-life', {

        url: '/about-us/campus-life',
        templateUrl: 'app/about/campus-life.html'
      })
      .state('undergrad', {

        url: '/undergrad',
        templateUrl: 'app/ugcourses/undergrad.html'
      })
      .state('undergrad/viteee', {

        url: '/undergrad/viteee',
        templateUrl: 'app/ugcourses/viteee.html'
      })
      .state('postgrad', {

        url: '/postgrad',
        templateUrl: 'app/pgcourses/postgrad.html'
      })
      .state('research', {

        url: '/research',
        templateUrl: 'app/research/research.html'
      })
      .state('international', {

        url: '/international',
        templateUrl: 'app/foreign/foreign.html'
      })
      .state('sap', {

        url: '/international/sap',
        templateUrl: 'app/foreign/sap.html'
      });
    $urlRouterProvider.otherwise('/');
/*
      $locationProvider.html5Mode(true);*/
  }

})();
