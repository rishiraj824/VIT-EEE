(function() {
  'use strict';

 

  var app = angular.module('viteee');
  /*Video*/
  app.controller('VideoCtrl', function($scope){
     $scope.resources = [
            'https://www.jhu.edu/assets/uploads/2016/04/JHU-Loop-17.webmhd.webm',
            '*.ogv',
            '*.mp4',
            '*.swf'
        ];
        $scope.poster = 'assets/images/video-image.jpg';
        $scope.fullScreen = true;
        $scope.muted = true;
        $scope.zIndex = '22';
        $scope.playInfo = {};
        $scope.pausePlay = true;
  });

  
  /*CArousel*/
    app.controller('CarouselCtrl', function($scope){
      $scope.myInterval = 3000;
      $scope.slides = [
    {
      image: 'assets/images/bernhard.jpg',
      testimonial: 'VIT has numerous opportunities for pursuing your sports interests. ',
      name : 'Bernhard Sahungwa, B.Tech. Electrical & Electronics Engineering, Namibia'
    },
    {
      image: 'assets/images/zhao-lu.jpg',
      testimonial: "VIT University has been one of the best decisions in my life. ",
      name : 'Zhao Lu, B.Com. Computer Applications, China'
    },
    {
      image: 'assets/images/HuXiaoyu.jpg',
      testimonial: 'VIT has offered me a lot of opportunities to develop my career and personal skills. ',
      name : 'Hu Xiaoyu, B.Sc.Computer Science, China'
    },
    {
      image: 'assets/images/longyi.jpg',
      testimonial: ' One thing that VIT has taught me is to be independent. ',
      name : 'Long Yi, M.Sc. Computer Science, China'
    },
    {
      image: 'assets/images/pearl.jpg',
      testimonial: "Education aside, VIT has also opened up the world to me",
      name : 'Pearl A. Hazel, B.Sc. Multimedia and Animation, Rwanda'
    }
  ];
});
app.controller('NoticeCtrl', function($scope){
  $scope.notices = [
  {
    type : "Notice",
    title : "VITEEE 2017",
    date : "31 November 2016",
    class : "blue",
    link: "http://www.vit.ac.in/admissions/viteee"
  },
  {
    type : "Notice",
    title : "UG Admissions 2017",
    date : "31 December 2016",
    class : "pink",
    link: "http://www.vit.ac.in/admissions/ug"
  },
  {
    type : "Announcement",
    title : "B. Arch",
    date : "31 December 2016",
    class : "yellow",
    link: "http://www.vit.ac.in/academics/schools/barch/courses"
  },
  {
    type : "Announcement",
    title : "VIT BS",
    date : "31 December 2016",
    class : "yellow",
    link: "http://bschool.vit.ac.in/"
  },
  {
    type : "Notice",
    title : "VITBEE 2016",
    date : "31 December 2016",
    class : "blue",
    link: "http://www.vit.ac.in/admissions/vitbee"
  }
  ];

});
app.controller('ModalCtrl',  function ($scope, $uibModal, $log) {


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


  app.filter('slice', function() {
    return function(arr, start, end) {
      return arr.slice(start, end);
    };
  });
  
   app.controller('CourseModalCtrl',  function ($scope, $uibModal, $log) {
    $scope.programs = [{
      name: "B.Tech ",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod...",
      class : "blue-small",
      programtype : "Undergraduate",
      language: "English",
      duration: "4 Years",
      image : "assets/images/vectors-01.png",
      link : "http://www.vit.ac.in/admissions/ug"
    },
    {
      name: "B.Arch",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod...",
      class : "orange-small",
      programtype : "Undergraduate",
      language: "English",
      duration: "4 Years",
      image : "assets/images/vectors-02.png",
      link : "http://www.vit.ac.in/admissions/ug"
    },
    {
      name: "Law School ",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod...",
      class : "blue-small",
      programtype : "Undergraduate",
      language: "English",
      duration: "4 Years",
      image : "assets/images/vectors-08.png",
      link : "http://www.vit.ac.in/admissions/ug"
    },
    {
      name: "Hotel Management ",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod...",
      class : "pink-small",
      programtype : "Undergraduate",
      language: "English",
      duration: "4 Years",
      image : "assets/images/vectors-05.png",
      link : "http://www.vit.ac.in/admissions/ug"
    },
    {
      name: "Fashion Technology ",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod...",
      class : "green-small",
      programtype : "Undergraduate",
      language: "English",
      duration: "4 Years",
      image : "assets/images/vectors-04.png",
      link : "http://www.vit.ac.in/admissions/ug"
    },
    {
      name: "Arts & Science",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod...",
      class : "pink-small",
      programtype : "Undergraduate",
      language: "English",
      duration: "4 Years",
      image : "assets/images/vectors-09.png",
      link : "http://www.vit.ac.in/admissions/ug"
    }];
    $scope.courses = [{
      name: "B.Tech ",
      school: "School of Copmuter Science & Engineering",
      class : "purple-small",
      link : "http://vit.ac.in/scope"
    },
    {
      name: "M.Tech ",
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
      name: "B. Arch",
      school: "School of Copmuter Science & Engineering",
      class : "blue-small",
      link : "http://vit.ac.in/scope"
    },
    {
      name: "B.Tech Fashion",
      school: "School of Copmuter Science & Engineering",
      class : "yellow-small",
      link : "http://vit.ac.in/scope"
    },
    {
      name: "BBA/MBA",
      school: "School of Copmuter Science & Engineering",
      class : "pink-small",
      link : "http://vit.ac.in/scope"
    },
    {
      name: "Research",
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
      templateUrl: 'myModalContent2.html',
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
    
/*   app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

 
  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});*/
})();
