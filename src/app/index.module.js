(function() {
  'use strict';

  angular
    .module('viteee', ['ui.bootstrap', 'ui.router', 'ngAnimate','ngVidBg','bootstrapLightbox' ])
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

        url: '/about-us/infrastructure',
        templateUrl: 'app/about/infrastructure.html'
      })
      .state('placements', {

        url: '/about-us/placements',
        templateUrl: 'app/about/placements.html'
      })
      .state('international-relations', {

        url: '/about-us/international-relations',
        templateUrl: 'app/about/international-relations.html'
      })
      .state('campus-life', {

        url: '/about-us/campus-life',
        templateUrl: 'app/about/campus-life.html'
      })
      .state('undergrad', {

        url: '/undergrad',
        templateUrl: 'app/ugcourses/undergrad.html'
      })
      .state('engineering', {

        url: '/undergrad/engineering',
        templateUrl: 'app/ugcourses/viteee.html'
      })
      .state('architecture', {

        url: '/undergrad/architecture',
        templateUrl: 'app/ugcourses/architecture.html'
      })
      .state('arts', {

        url: '/undergrad/arts',
        templateUrl: 'app/ugcourses/arts.html'
      })
      .state('fashion', {

        url: '/undergrad/fashion',
        templateUrl: 'app/ugcourses/fashion.html'
      })
      .state('hotelmanagement', {

        url: '/undergrad/hotelmanagement',
        templateUrl: 'app/ugcourses/hotelmanagement.html'
      })
      .state('law', {

        url: '/undergrad/law',
        templateUrl: 'app/ugcourses/law.html'
      })
      .state('postgrad', {

        url: '/postgrad',
        templateUrl: 'app/pgcourses/postgrad.html'
      })
      .state('pgmtech', {

        url: '/postgrad/mtech',
        templateUrl: 'app/pgcourses/mtech.html'
      })
      .state('pgmsc', {

        url: '/postgrad/msc',
        templateUrl: 'app/pgcourses/msc.html'
      })
      .state('pgmca', {

        url: '/postgrad/mca',
        templateUrl: 'app/pgcourses/mca.html'
      })
      .state('pgbusiness', {

        url: '/postgrad/business',
        templateUrl: 'app/pgcourses/business.html'
      })
      .state('pgintegrated', {

        url: '/postgrad/integrated',
        templateUrl: 'app/pgcourses/integrated.html'
      })
      .state('research', {

        url: '/research',
        templateUrl: 'app/research/research.html'
      })
      .state('mtechresearch', {

        url: '/research/mtechresearch',
        templateUrl: 'app/research/mtechresearch.html'
      })
      .state('phd', {

        url: '/research/phd',
        templateUrl: 'app/research/phd.html'
      })
      .state('mphil', {

        url: '/research/mphil',
        templateUrl: 'app/research/mphil.html'
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
