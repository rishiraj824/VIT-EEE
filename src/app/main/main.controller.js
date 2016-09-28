(function() {
  'use strict';

 

  var app = angular.module('viteee');
  /*Video*/
  app.controller('VideoCtrl', function($scope){
     $scope.resources = [
            'assets/images/vit.webm',
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

  /*VITEEE Tabs*/
  app.controller('TabCtrl', function($scope){
    $scope.changeTab = function(tab) {
    $scope.view_tab = tab;
}
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
    link: "#/undergrad/viteee"
  },
  {
    type : "Notice",
    title : "VITBEE 2017",
    date : "31 December 2016",
    class : "pink",
    link: "#/undergrad"
  },
  {
    type : "Announcement",
    title : "B. Arch",
    date : "31 December 2016",
    class : "yellow",
    link: "#/undergrad/architecture"
  },
  {
    type : "Announcement",
    title : "VIT BS",
    date : "31 December 2016",
    class : "yellow",
    link: "#/undergrad/business"
  },
  {
    type : "Notice",
    title : "VITMEE 2017",
    date : "31 December 2016",
    class : "blue",
    link: "#/postgrad"
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
  
   app.controller('CourseModalCtrl',  function ($scope, $location, $anchorScroll) {
    $scope.scrollTo = function(id) {
         $location.hash(id);
         $anchorScroll();
    }
    /*International Programs*/
    $scope.internationals = [{
      name: "Undergaduate Programs",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
      shortdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      class : "blue-small",
      programtype : "Undergraduate",
      language: "English",
      duration: "5 Years",
      image : "assets/images/vectors-01.png",
      imagehome : "assets/images/btech.jpg",
      anchor : "undergrad",
      link : "http://www.vit.ac.in/admissions/international/ug"
    },
    {
      name: "Postgaduate Programs",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
      shortdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      class : "blue-small",
      programtype : "Postgraduate",
      language: "English",
      duration: "3 Years",
      image : "assets/images/vectors-01.png",
      imagehome : "assets/images/btech.jpg",
      anchor : "postgrad",
      link : "http://www.vit.ac.in/admissions/international/pg"
    },
    {
      name: "Integrated Programs",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
      shortdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      class : "pink-small",
      programtype : "Research",
      language: "English",
      duration: "4 Years",
      image : "assets/images/vectors-08.png",
      imagehome : "assets/images/btech.jpg",
      anchor : "integratedprogram",
      link : "http://www.vit.ac.in/admissions/international/integrated"
    }];
    /* B.Tech*/
    $scope.programs = [{
      name: "B.Tech ",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod...",
      shortdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      class : "blue-small",
      programtype : "Undergraduate",
      language: "English",
      duration: "4 Years",
      image : "assets/images/vectors-01.png",
      imagehome : "assets/images/btech.jpg",
      anchor : "btech",
      link : "http://www.vit.ac.in/admissions/ug"
    },
    {
      name: "B.Arch",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod...",
      shortdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      class : "orange-small",
      programtype : "Undergraduate",
      language: "English",
      duration: "4 Years",
      image : "assets/images/vectors-02.png",
      anchor : "arch",
      imagehome : "assets/images/architecture.jpg",
      link : "http://www.vit.ac.in/admissions/ug"
    },
    {
      name: "Law School ",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod...",
      shortdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      class : "blue-small",
      programtype : "Undergraduate",
      language: "English",
      duration: "4 Years",
      image : "assets/images/vectors-08.png",
      imagehome : "assets/images/law.jpg",
      anchor : "law",
      link : "http://www.vit.ac.in/admissions/ug"
    },
    {
      name: "Hotel Management ",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod...",
      shortdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      class : "pink-small",
      programtype : "Undergraduate",
      language: "English",
      duration: "4 Years",
      image : "assets/images/vectors-05.png",
      imagehome : "assets/images/btech.jpg",
      anchor : "hotel",
      link : "http://www.vit.ac.in/admissions/ug"
    },
    {
      name: "Fashion Technology ",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod...",
      shortdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      class : "green-small",
      programtype : "Undergraduate",
      language: "English",
      duration: "4 Years",
      image : "assets/images/vectors-04.png",
      imagehome : "assets/images/btech.jpg",
      anchor : "fashion",
      link : "http://www.vit.ac.in/admissions/ug"
    },
    {
      name: "Arts & Science",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod...",
      shortdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      class : "pink-small",
      programtype : "Undergraduate",
      language: "English",
      duration: "4 Years",
      image : "assets/images/vectors-09.png",
      imagehome : "assets/images/btech.jpg",
      anchor : "arts",
      link : "http://www.vit.ac.in/admissions/ug"
    }];
    /*PostGrad*/
    $scope.postgrads = [{
      name: "M.Tech/MSc/MCA",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod...",
      shortdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      class : "blue-small",
      programtype : "Postgraduate",
      language: "English",
      duration: "5 Years",
      image : "assets/images/vectors-01.png",
      imagehome : "assets/images/mtech.jpg",
      anchor : "mtech",
      link : "http://www.vit.ac.in/admissions/pg"
    },
    {
      name: "Management",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod...",
      shortdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      class : "orange-small",
      programtype : "Postgraduate",
      language: "English",
      duration: "5 Years",
      image : "assets/images/vectors-06.png",
      imagehome : "assets/images/btech.jpg",
      anchor : "management",
      link : "http://www.vit.ac.in/admissions/pg"
    },
    {
      name: "Integrated Programs",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod...",
      shortdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      class : "blue-small",
      programtype : "Postgraduate",
      language: "English",
      duration: "5 Years",
      image : "assets/images/vectors-05.png",
      imagehome : "assets/images/mtech.jpg",
      anchor : "integratedprogram",
      link : "http://www.vit.ac.in/admissions/pg"
    }];
    /*Research*/
    $scope.researches = [{
      name: "M.Phil",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod...",
      shortdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      class : "blue-small",
      programtype : "Research",
      language: "English",
      duration: "5 Years",
      image : "assets/images/vectors-05.png",
      imagehome : "assets/images/research.jpg",
      anchor : "mphil",
      link : "http://www.vit.ac.in/admissions/research"
    },
    {
      name: "M.Tech by Research",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod...",
      shortdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      class : "pink-small",
      programtype : "Research",
      language: "English",
      duration: "5 Years",
      image : "assets/images/vectors-05.png",
      imagehome : "assets/images/btech.jpg",
      anchor : "mtech",
      link : "http://www.vit.ac.in/admissions/research"
    },
    {
      name: "Ph.D.",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod...",
      shortdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      class : "blue-small",
      programtype : "Research",
      language: "English",
      duration: "5 Years",
      image : "assets/images/vectors-05.png",
      imagehome : "assets/images/btech.jpg",
      anchor : "phd",
      link : "http://www.vit.ac.in/admissions/research"
    }]

});
})();
