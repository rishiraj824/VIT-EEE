(function() {
  'use strict';

  angular
    .module('viteee', ['ui.bootstrap', 'ui.router', 'ngAnimate','ngVidBg','bootstrapLightbox', 'angularModalService' ])
    .config(config);

  function config($stateProvider, $urlRouterProvider) {
    
    $stateProvider
      .state('home', {

        url: '/',
        templateUrl: 'app/main/main.html',
        data : { pageTitle: 'Home',
                  meta :  'keywords etc'
         }
      })
      .state('about', {

        url: '/about-us',
        templateUrl: 'app/about/about-us.html',
        data : { pageTitle: 'About',
                  meta :  'keywords etc'
         }
      })
       .state('infrastructure', {

        url: '/about-us/infrastructure',
        templateUrl: 'app/about/infrastructure.html',
        data : { pageTitle: 'Infrastructure',
                  meta :  'keywords etc'
         }
      })
      .state('placements', {

        url: '/about-us/placements',
        templateUrl: 'app/about/placements.html',
        data : { pageTitle: 'Placements',
                  meta :  'keywords etc'
         }
      })
      .state('international-relations', {

        url: '/about-us/international-relations',
        templateUrl: 'app/about/international-relations.html',
        data : { pageTitle: 'International Relations',
                  meta :  'keywords etc'
         }
      })
      .state('campus-life', {

        url: '/about-us/campus-life',
        templateUrl: 'app/about/campus-life.html',
        data : { pageTitle: 'Campus Life',
                  meta :  'keywords etc'
         }
      })
      .state('undergrad', {

        url: '/undergrad',
        templateUrl: 'app/ugcourses/undergrad.html',
        data : { pageTitle: 'Undergraduate Programs',
                  meta :  'keywords etc'
         }
      })
      .state('engineering', {

        url: '/undergrad/engineering',
        templateUrl: 'app/ugcourses/viteee.html',
        data : { pageTitle: 'Engineering',
                  meta :  'keywords etc'
         }
      })
      .state('architecture', {

        url: '/undergrad/architecture',
        templateUrl: 'app/ugcourses/architecture.html',
        data : { pageTitle: 'Architechture',
                  meta :  'keywords etc'
         }
      })
      .state('arts', {

        url: '/undergrad/arts',
        templateUrl: 'app/ugcourses/arts.html',
        data : { pageTitle: 'Arts & Sciences',
                  meta :  'keywords etc'
         }
      })
      .state('fashion', {

        url: '/undergrad/fashion',
        templateUrl: 'app/ugcourses/fashion.html',
        data : { pageTitle: 'Fashion',
                  meta :  'keywords etc'
         }
      })
      .state('hotelmanagement', {

        url: '/undergrad/hotelmanagement',
        templateUrl: 'app/ugcourses/hotelmanagement.html',
        data : { pageTitle: 'Hotel Management',
                  meta :  'keywords etc'
         }
      })
      .state('law', {

        url: '/undergrad/law',
        templateUrl: 'app/ugcourses/law.html',
        data : { pageTitle: 'Law',
                  meta :  'keywords etc'
         }
      })
      .state('postgrad', {

        url: '/postgrad',
        templateUrl: 'app/pgcourses/postgrad.html',
        data : { pageTitle: 'Postgraduate Programmes',
                  meta :  'keywords etc'
         }
      })
      .state('pgmtech', {

        url: '/postgrad/mtech',
        templateUrl: 'app/pgcourses/mtech.html',
        data : { pageTitle: 'M. Tech',
                  meta :  'keywords etc'
         }
      })
      .state('pgmsc', {

        url: '/postgrad/msc',
        templateUrl: 'app/pgcourses/msc.html',
        data : { pageTitle: 'M.Sc.',
                  meta :  'keywords etc'
         }
      })
      .state('pgmca', {

        url: '/postgrad/mca',
        templateUrl: 'app/pgcourses/mca.html',
        data : { pageTitle: 'M.CA.',
                  meta :  'keywords etc'
         }
      })
      .state('pgbusiness', {

        url: '/postgrad/business',
        templateUrl: 'app/pgcourses/business.html',
        data : { pageTitle: 'M.B.A',
                  meta :  'keywords etc'
         }
      })
      .state('pgintegrated', {

        url: '/postgrad/integrated',
        templateUrl: 'app/pgcourses/integrated.html',
        data : { pageTitle: 'Integrated Programs',
                  meta :  'keywords etc'
         }
      })
      .state('research', {

        url: '/research',
        templateUrl: 'app/research/research.html',
        data : { pageTitle: 'Research',
                  meta :  'keywords etc'
         }
      })
      .state('mtechresearch', {

        url: '/research/mtechresearch',
        templateUrl: 'app/research/mtechresearch.html',
        data : { pageTitle: 'M.Tech by Research',
                  meta :  'keywords etc'
         }
      })
      .state('phd', {

        url: '/research/phd',
        templateUrl: 'app/research/phd.html',
        data : { pageTitle: 'Ph.D.',
                  meta :  'keywords etc'
         }
      })
      .state('mphil', {

        url: '/research/mphil',
        templateUrl: 'app/research/mphil.html',
        data : { pageTitle: 'M.Phil.',
                  meta :  'keywords etc'
         }
      })
      .state('international', {

        url: '/international',
        templateUrl: 'app/foreign/foreign.html',
        data : { pageTitle: 'International',
                  meta :  'keywords etc'
         }
      })
      .state('sap', {

        url: '/international/sap',
        templateUrl: 'app/foreign/sap.html',
        data : { pageTitle: 'SAP',
                  meta :  'keywords etc'
         }
      });
    $urlRouterProvider.otherwise('/');
/*
      $locationProvider.html5Mode(true);*/
  }

})();
