(function() {
  'use strict';

 

  var app = angular.module('viteee');
  app.controller('NavbarController', function($scope){
    
  });
  /*CArousel*/
  /*  app.controller('CarouselCtrl', function($scope){
      $scope.myInterval = 3000;
      $scope.captionInterval = 4000;
      $scope.slides = [
    {
      image: 'http://lorempixel.com/1920/700/sports',
      caption: 'The University For Leaders'
    },
    {
      image: 'http://lorempixel.com/1920/700/food',
       caption: 'The University For Leaders'
    },
    {
      image: 'http://lorempixel.com/1920/700/sports',
       caption: 'The University For Leaders'
    },
    {
      image: 'http://lorempixel.com/1920/700/food',
       caption: 'The University For Leaders'
    }
  ];
});*/
app.controller('NoticeCtrl', function($scope){
  $scope.notices = [
  {
    type : "Notice",
    title : "VITEEE 2016",
    date : "31 December 2016",
    class : "blue"
  },
  {
    type : "Announcement",
    title : "VITEEE 2016",
    date : "31 December 2016",
    class : "green"
  },
  {
    type : "Notice",
    title : "VITEEE 2016",
    date : "31 December 2016",
    class : "pink"
  }];

});
})();
