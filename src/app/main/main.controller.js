(function() {
  'use strict';

 

  var app = angular.module('viteee');
  /*Video*/
  app.controller('VideoCtrl', function($scope){

            /*'https://www.jhu.edu/assets/uploads/2016/04/JHU-Loop-17.webmhd.webm',*/
        $scope.resources = [
            'https://www.jhu.edu/assets/uploads/2016/04/JHU-Loop-17.webmhd.webm',
            '*.ogv',
            '*.mp4',
            '*.swf'
        ];
        $scope.poster = 'assets/images/placeholder.jpg  ';
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
      $scope.myInterval = 4000;
      $scope.achievements = [{
        number: "1st",
        text: "Among all Private Engineering Institutions of India by MHRD, Govt. of India Ranking 2016"
      },
      {
        number: "17th",
        text: "Among all B – Schools of India"
      },
      {
        number: "1st",
        text: "Among all Private Engineering Institutes of India by CAREERS360 - 2014/2015/2016"
      },
      {
        number: "201-250",
        text: "BRICS Ranking"
      },
      {
        number: "201-250",
        text: "BRICS Ranking"
      }];
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
  
   app.controller('CourseModalCtrl',  function ($scope) {
    
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
      class : "pink-small",
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
      image : "assets/images/vectors-11.png",
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
      class : "pink-small",
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
      class : "green-small",
      programtype : "Undergraduate",
      language: "English",
      duration: "4 Years",
      image : "assets/images/vectors-08.png",
      imagehome : "assets/images/law.jpg",
      anchor : "law",
      link : "http://www.vit.ac.in/files/llb/index.html"
    },
    {
      name: "Hotel Management ",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod...",
      shortdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      class : "yellow-small",
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
      class : "orange-small",
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
      class : "orange-small",
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
      class : "orange-small",
      programtype : "Postgraduate",
      language: "English",
      duration: "5 Years",
      image : "assets/images/vectors-11.png",
      imagehome : "assets/images/mtech.jpg",
      anchor : "integratedprogram",
      link : "http://www.vit.ac.in/admissions/pg"
    }];
    /*Research*/
    $scope.researches = [{
      name: "M.Phil",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod...",
      shortdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      class : "green-small",
      programtype : "Research",
      language: "English",
      duration: "5 Years",
      image : "assets/images/vectors-10.png",
      imagehome : "assets/images/research.jpg",
      anchor : "mphil",
      link : "http://www.vit.ac.in/admissions/research"
    },
    {
      name: "M.Tech by Research",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod...",
      shortdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      class : "green-small",
      programtype : "Research",
      language: "English",
      duration: "5 Years",
      image : "assets/images/vectors-27.png",
      imagehome : "assets/images/research.jpg",
      anchor : "mtech",
      link : "http://www.vit.ac.in/admissions/research"
    },
    {
      name: "Ph.D.",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod...",
      shortdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      class : "green-small",
      programtype : "Research",
      language: "English",
      duration: "5 Years",
      image : "assets/images/vectors-28.png",
      imagehome : "assets/images/research.jpg",
      anchor : "phd",
      link : "http://www.vit.ac.in/admissions/research"
    }]

});
  app.controller('CourseListCtrl',function($scope) {
    $scope.data = {
     availableOptions: [
       {
      name : "School of Computer Engineering (SCOPE)",
      id : "scope",
      course : [
            {
              name: "B.Tech. Computer Science and Engineering *",
              duration : "4 Years",
              class: "blue",
              curriculumlink : "http://"
            },{

              name: "B.Tech. Computer Science and Engg (Spec. in Bioinformatics)",
              duration : "4 Years",
               class: "blue",
              curriculumlink : "http://"
            },{
              name: "B.Tech. Computer Science and Engineering with Spec. in Information Security",
              duration : "4 Years",
               class: "blue",
              curriculumlink : "http://"
            
      }]
      },
       {
      name : "School of Civil and Chemical Engineering (SCALE)",
      id : "scale",
      course : [
            {
              name: "B.Tech - Civil Engineering *",
              duration : "4 Years",
              curriculumlink : "http://"
            },{

              name: "B.Tech - Chemical Engineering",
              duration : "4 Years",
              curriculumlink : "http://"
            }]
      },
      {
      name : "School of Mechanical Engineering(SMEC)",
      id : "smec",
      course : [
            {
              name: "B.Tech - Mechanical Engineering *",
              duration : "4 Years",
              curriculumlink : "http://"
            },{

              name: "B.Tech - Mechanical with specialization in Energy Engineering",
              duration : "4 Years",
              curriculumlink : "http://"
            },{
              name: "B.Tech - Mechanical with specialization in Automotive Engineering",
              duration : "4 Years",
              curriculumlink : "http://"
            
      },{
        name: "B.Tech - Production and Industrial Engineering",
        duration : "4 Years",
        curriculumlink : "http://"
      }]
      },{
      name : "School of Bio Sciences and Technology ( SBST )",
      id : "sbst",
      course : [
        {
          name: "B. Tech. Biotechnology",
          duration : "4 Years",
          curriculumlink : "http://"
        }
      ]
    },{
      name : "School of Electrical Engineering (SELECT)",
      id : "select",
      course : [{
        name: "B.Tech. Electrical and Electronics Engineering *",
        duration : "4 Years",
        curriculumlink : "http://"
        },{
        name: "B.Tech. Electronics and Instrumentation Engineering",
        duration : "4 Years",
        curriculumlink : "http://"
      }]
    },{
      name : "School of Information Technology and Engineering (SITE)",
      id : "site",
      course : [{
        name : "B.Tech. Information Technology",
        duration : "4 Years",
        curriculumlink : "http://"

      }]
    },{
      name : "School of Electronics Engineering (SENSE)",
      id : "sense",
      course : [{
        name: "B.Tech. Biomedical Engineering",
        duration: "4 Years",
        curriculumlink: "http://"
      },
      {
        name: "B.Tech. Electronics and Communication Engineering",
        duration: "4 Years",
        curriculumlink: "http://"
      },
      {
        name: "B.Tech. Electronics and Communication Engineering with Spec. in Internet of Things and Sensor",
        duration: "4 Years",
        curriculumlink: "http://"
      }]
    } ],
     selectedOption: 
       {
      name : "School of Computer Engineering (SCOPE)",
      id : "scope",
      course : [
            {
              name: "B.Tech. Computer Science and Engineering *",
              duration : "4 Years",
              curriculumlink : "http://"
            },{

              name: "B.Tech. Computer Science and Engg (Spec. in Bioinformatics)",
              duration : "4 Years",
              curriculumlink : "http://"
            },{
              name: "B.Tech. Computer Science and Engineering with Spec. in Information Security",
              duration : "4 Years",
              curriculumlink : "http://"
            
      }]
      }//This sets the default value of the select in the ui
     };


     $scope.cluster = {
     availableOptions: [
       {
      name : "School of Computer Engineering (SCOPE)",
      id : "scope",
      course : [
            {
              name: "M.Tech. Computer Science and Engineering *",
              duration : "5 Years",
              class: "blue",
              curriculumlink : "http://"
            },{

              name: "M.Tech. Computer Science and Engg (Spec. in Bioinformatics)",
              duration : "5 Years",
               class: "blue",
              curriculumlink : "http://"
            },{
              name: "M.Tech. Computer Science and Engineering with Spec. in Information Security",
              duration : "5 Years",
               class: "blue",
              curriculumlink : "http://"
            
      }]
      },
       {
      name : "School of Civil and Chemical Engineering (SCALE)",
      id : "scale",
      course : [
            {
              name: "M.Tech - Civil Engineering *",
              duration : "5 Years",
              curriculumlink : "http://"
            },{

              name: "M.Tech - Chemical Engineering",
              duration : "5 Years",
              curriculumlink : "http://"
            }]
      },
      {
      name : "School of Mechanical Engineering(SMEC)",
      id : "smec",
      course : [
            {
              name: "M.Tech - Mechanical Engineering *",
              duration : "5 Years",
              curriculumlink : "http://"
            },{

              name: "M.Tech - Mechanical with specialization in Energy Engineering",
              duration : "5 Years",
              curriculumlink : "http://"
            },{
              name: "M.Tech - Mechanical with specialization in Automotive Engineering",
              duration : "5 Years",
              curriculumlink : "http://"
            
      },{
        name: "M.Tech - Production and Industrial Engineering",
        duration : "5 Years",
        curriculumlink : "http://"
      }]
      },{
      name : "School of Bio Sciences and Technology ( SBST )",
      id : "sbst",
      course : [
        {
          name: "B. Tech. Biotechnology",
          duration : "5 Years",
          curriculumlink : "http://"
        }
      ]
    },{
      name : "School of Electrical Engineering (SELECT)",
      id : "select",
      course : [{
        name: "M.Tech. Electrical and Electronics Engineering *",
        duration : "5 Years",
        curriculumlink : "http://"
        },{
        name: "M.Tech. Electronics and Instrumentation Engineering",
        duration : "5 Years",
        curriculumlink : "http://"
      }]
    },{
      name : "School of Information Technology and Engineering (SITE)",
      id : "site",
      course : [{
        name : "M.Tech. Information Technology",
        duration : "5 Years",
        curriculumlink : "http://"

      }]
    },{
      name : "School of Electronics Engineering (SENSE)",
      id : "sense",
      course : [{
        name: "M.Tech. Biomedical Engineering",
        duration: "5 Years",
        curriculumlink: "http://"
      },
      {
        name: "M.Tech. Electronics and Communication Engineering",
        duration: "5 Years",
        curriculumlink: "http://"
      },
      {
        name: "M.Tech. Electronics and Communication Engineering with Spec. in Internet of Things and Sensor",
        duration: "5 Years",
        curriculumlink: "http://"
      }]
    } ],
     selectedOption: 
       {
      name : "School of Computer Engineering (SCOPE)",
      id : "scope",
      course : [
            {
              name: "M.Tech. Computer Science and Engineering *",
              duration : "5 Years",
              curriculumlink : "http://"
            },{

              name: "M.Tech. Computer Science and Engg (Spec. in Bioinformatics)",
              duration : "5 Years",
              curriculumlink : "http://"
            },{
              name: "M.Tech. Computer Science and Engineering with Spec. in Information Security",
              duration : "5 Years",
              curriculumlink : "http://"
            
      }]
      }//This sets the default value of the select in the ui
     };
 })

})();
