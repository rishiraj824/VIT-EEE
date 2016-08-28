(function() {
  'use strict';

 

  var app = angular.module('viteee');
  
  /*CArousel*/
    app.controller('CarouselCtrl', function($scope){
      $scope.myInterval = 3000;
      $scope.slides = [
    {
      image: 'http://lorempixel.com/1920/900/',
      caption: 'The University For Leaders'
    },
    {
      image: 'http://lorempixel.com/1920/900/',
      caption: 'The University For Leaders'
    }
  ];
});
app.controller('NoticeCtrl', function($scope){
  $scope.notices = [
  {
    type : "Notice",
    title : "VITEEE 2016",
    date : "31 December 2016",
    class : "blue",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
  },
  {
    type : "Notice",
    title : "VITEEE 2016",
    date : "31 December 2016",
    class : "pink",
    description: " quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
  },
  {
    type : "Notice",
    title : "VITEEE 2016",
    date : "31 December 2016",
    class : "yellow",
    description: " quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
  }];

});
  
   app.controller('CourseModalCtrl',  function ($scope, $uibModal, $log) {

    $scope.courses = [{
      name: "B.Tech in Computer Science & Engineering",
      school: "School of Copmuter Science & Engineering",
      class : "blue-small",
      link : "http://vit.ac.in/scope"
    },
    {
      name: "B.Tech in Computer Science & Engineering",
      school: "School of Copmuter Science & Engineering",
      class : "blue-small",
      link : "http://vit.ac.in/scope"
    },
    {
      name: "MCA in Computer Science & Engineering",
      school: "School of Copmuter Science & Engineering",
      class : "pink-small",
      link : "http://vit.ac.in/scope"
    },
    {
      name: "M.Tech in Computer Science & Engineering",
      school: "School of Copmuter Science & Engineering",
      class : "blue-small",
      link : "http://vit.ac.in/scope"
    },
    {
      name: "B.Tech in Computer Science & Engineering",
      school: "School of Copmuter Science & Engineering",
      class : "yellow-small",
      link : "http://vit.ac.in/scope"
    },
    {
      name: "BBA in Computer Science & Engineering",
      school: "School of Copmuter Science & Engineering",
      class : "pink-small",
      link : "http://vit.ac.in/scope"
    },
    {
      name: "B.Tech in Computer Science & Engineering",
      school: "School of Copmuter Science & Engineering",
      class : "yellow-small",
      link : "http://vit.ac.in/scope"
    },
    {
      name: "B.Tech in Computer Science & Engineering",
      school: "School of Copmuter Science & Engineering",
      class : "blue-small",
      link : "http://vit.ac.in/scope"
    },
    {
      name: "B.Tech in Computer Science & Engineering",
      school: "School of Copmuter Science & Engineering",
      class : "yellow-small",
      link : "http://vit.ac.in/scope"
    }
    ]
  $scope.animationsEnabled = true;

  $scope.open = function (size) {
 
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});
    
   app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

 
  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
})();
