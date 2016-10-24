(function() {
  'use strict';

 

  var app = angular.module('viteee');
  /*Video*/
  app.controller('VideoCtrl', function($scope){

            /*'https://www.jhu.edu/assets/uploads/2016/04/JHU-Loop-17.webmhd.webm',
            https://www.jhu.edu/assets/uploads/2016/08/Homepage-Loop-20.webmhd.webm*/
        $scope.resources = [
            'assets/images/vit.webm',
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
  app.controller('PhoneCtrl',  function($scope){
    $scope.options =[    
      {
        value :"tab",
        name : "Schedule"
      },{
    value : "tab1",
    name : "Syllabus"
  },{
    value : "tab2",
    name : "Pattern"
  },{
    value : "tab3",
    name : "Equating methodology"
  },{
    value : "tab4",
    name : "Eligibility"
  },{
    value : "tab5",
    name : "Guideline"
  },{
    value : "tab6",
    name : "Test cities"
  },{
    value : "tab7",
    name : "Post Office"
  },{
    value : "tab8",
    name : "Important Date & Cost of Application Form"
  },{
    value : "tab9",
    name : "GVSDP Scholarship GV School Development Programme"
  },{
    value : "tab10",
    name : "Admission Helpline"
  }];
    $scope.changeme = function() {
        
      }
  });
 app.controller('TabsCtrl', function($scope){
   var tabClasses;
   
   function initTabs() {
     tabClasses = ["","","",""];
   }
   
   $scope.getTabClass = function (tabNum) {
     return tabClasses[tabNum];
   };
   
   $scope.getTabPaneClass = function (tabNum) {
     return "tab-pane " + tabClasses[tabNum];
   }
   
   $scope.setActiveTab = function (tabNum) {
     initTabs();
     tabClasses[tabNum] = "active";
   };
   
   $scope.tab1 = "This is first section";
   $scope.tab2 = "This is SECOND section";
   $scope.tab3 = "This is THIRD section";
   $scope.tab4 = "This is FOUTRH section";
   
   //Initialize 
   initTabs();
   $scope.setActiveTab(1);
 });

  /*Testimonial Carousel*/
    app.controller('CarouselCtrl', function($scope){
      $scope.myInterval = 8000;
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
      $scope.stats = [{
        number: "3277",
        text: "Placements in Wipro",
        date : "20/08/2016"
      },{
        number: "3277",
        text: "Placements in TCS",
        date : "20/08/2016"
      },
      {
        number: "3277",
        text: "Placements in Cognizant",
        date : "20/08/2016"
      }];
      /*$scope.slides = [
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
  ];*/
  $scope.slides = [
    {
      image: 'assets/images/placement-home.JPG',
      testimonial: 'VIT has numerous opportunities for pursuing your sports interests. ',
      name : 'Bernhard Sahungwa, B.Tech. Electrical & Electronics Engineering, Namibia'
    },
    {
      image: 'assets/images/international-home.jpg',
      testimonial: 'VIT has offered me a lot of opportunities to develop my career and personal skills. ',
      name : 'Hu Xiaoyu, B.Sc.Computer Science, China'
    },
    {
      image: 'assets/images/placement-home.JPG',
      testimonial: "VIT University has been one of the best decisions in my life. ",
      name : 'Zhao Lu, B.Com. Computer Applications, China'
    },
    {
      image: 'assets/images/international-home.jpg',
      testimonial: ' One thing that VIT has taught me is to be independent. ',
      name : 'Long Yi, M.Sc. Computer Science, China'
    },
    {
      image: 'assets/images/placement-home.JPG',
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
    class : "red",
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
      description: "VIT holds some of the most popular undergraduate courses and offers top quality degrees. It has 20+ accredited UG degrees. These are in the fields of Engineering, Management, Architecture, Fashion and designing, Arts and Sciences. VIT ranks as the best private Engineering Institution and holds a strong MBA record.",
      shortdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      class : "blue-small",
      programtype : "Undergraduate",
      language: "English",
      duration: "4 Years",
      image : "assets/images/vectors-01.png",
      imagehome : "assets/images/btech.jpg",
      anchor : "undergrad",
      link : "http://www.vit.ac.in/admissions/international/ug"
    },
    {
      name: "Postgaduate Programs",
      description: "VIT University offers 30+ postgraduate and research programmes, these include M.Tech, MSc, MCA, MBA, PhD, M.Phil and Research based Masters Degrees. VITMEE and GMAT are the exams used for admissions to M.Tech and MBA programmes respectively. Being placed 3rd among the top 30 research-oriented institutes speaks volumes about how VIT has managed to achieve a lot in a short span of time. Not only that but it has also secured sponsorship for 50 research projects and offers consultancy services worth more than Rs. 2.2 million.",
      shortdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      class : "blue-small",
      programtype : "Postgraduate",
      language: "English",
      duration: "5 Years",
      image : "assets/images/vectors-01.png",
      imagehome : "assets/images/btech.jpg",
      anchor : "postgrad",
      link : "http://www.vit.ac.in/admissions/international/pg"
    },
    {
      name: "Integrated Programs",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
      shortdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      class : "integrated-small",
      programtype : "Research",
      language: "English",
      duration: "5 Years",
      image : "assets/images/vectors-11.png",
      imagehome : "assets/images/btech.jpg",
      anchor : "integratedprogram",
      link : "http://www.vit.ac.in/admissions/international/integrated"
    }];
    /* B.Tech*/
    $scope.programs = [{
      name: "B.Tech ",
      description: "One of the major specializations of VIT University is engineering with various courses under B.Tech. Electrical Engineering, Mechanical Engineering, Civil Engineering, Aerospace Engineering?, Industrial Engineering only to mention a few. The Engineering courses offer hands on projects with well equipped laboratories for the same. ",
      shortdescription: "Admissions to all B.Tech courses are strictly based on the VITEEE exam held in April every year. Forms are available from November of the application year.",
      class : "blue-small",
      programtype : "Undergraduate",
      language: "English",
      duration: "4 Years",
      image : "assets/images/vectors-01.png",
      imagehome : "assets/images/btech.jpg",
      anchor : "#/undergrad/engineering",
      link : "http://www.vit.ac.in/admissions/ug"
    },
    {
      name: "B.Arch",
      description: "B.Arch program at VIT - Vellore campus comes with a new preposition, for the students who are aspiring to become Architects. There are student exchange programs with leading universities from Europe, USA, Australia and Asia.  A unique Architectural Studio is present in the Architecture department giving students, the practical aspect of the program.",
      shortdescription: "Students are admitted on the basis of their NATA scores. Application dates and details are available each year.",
      class : "red-small",
      programtype : "Undergraduate",
      language: "English",
      duration: "4 Years",
      image : "assets/images/vectors-02.png",
      anchor : "#/undergrad/architecture",
      imagehome : "assets/images/architecture.jpg",
      link : "http://www.vit.ac.in/admissions/ug"
    },
    {
      name: "Law School ",
      description: "This program is meant to provide a practical introspection of the justice and legal systems of India and the world. A 5-year curriculum of the Arts subjects such as Economics, Sociology and Political Science. The program is available at VIT-Chennai campus. The curriculum also offers a practical session on how it actually is in the legal system. The Law School offers B.A, BBA and LL.B (honors)",
      shortdescription: "An admission into Law school at VIT is based on SAT scores and application dates are posted on the website each year.",
      class : "law-small",
      programtype : "Undergraduate",
      language: "English",
      duration: "4 Years",
      image : "assets/images/vectors-08.png",
      imagehome : "assets/images/law.jpg",
      anchor : "#/undergrad/law",
      link : "http://www.vit.ac.in/files/llb/index.html"
    },
    {
      name: "Hotel Management ",
      description: "This department deals with mainly management at almost all levels and organizations. It offers a Bachelor of Business Administration and Hotel Management as well. The course duration is 3 years and most opt for the exclusive MBA soon after. Graduates can opt for careers in banking, trade, financial services and accountancy firms. They can also go for sales jobs in retailing, insurance, media and so on. They can choose to become an entrepreneur and careers are also possible in small and large organizations. ",
      shortdescription: "Students can apply using their 10+2 results and application dates are announced on the website each year",
      class : "hotel-small",
      programtype : "Undergraduate",
      language: "English",
      duration: "4 Years",
      image : "assets/images/vectors-05.png",
      imagehome : "assets/images/btech.jpg",
      anchor : "#/undergrad/hotelmanagement",
      link : "http://www.vit.ac.in/admissions/ug"
    },
    {
      name: "Fashion and Technology",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod...",
      shortdescription: "Admissions to all B.Tech courses are strictly based on the VITEEE exam held in April every year. Forms are available from November of the application year.",
      class : "orange-small",
      programtype : "Undergraduate",
      language: "English",
      duration: "4 Years",
      image : "assets/images/vectors-04.png",
      imagehome : "assets/images/btech.jpg",
      anchor : "#/undergrad/fashion",
      link : "http://www.vit.ac.in/admissions/ug#SOF"
    },
    {
      name: "Arts & Sciences",
      description: "In this field it deals with languages to computer sciences to commerce. Languages include German, English, French, Chinese, Hindi, Tamil and Spanish. The teaching and research of the department are broadly structured around five divisions: Commerce, Computer Applications, Social Sciences, English (I & II), and other languages. These are value added courses with advanced and trending technology.",
      shortdescription: "Admissions are based on the students’ 10+2 scores. Application periods are displayed on the website each year",
      class : "pink-small",
      programtype : "Undergraduate",
      language: "English",
      duration: "4 Years",
      image : "assets/images/vectors-09.png",
      imagehome : "assets/images/btech.jpg",
      anchor : "#/undergrad/arts",
      link : "http://www.vit.ac.in/admissions/ug"
    }];
    /*PostGrad*/
    $scope.postgrads = [{
      name: "M.Tech/M.Sc./M.CA.",
      description: "The department has over 20 Engineering 2 year- Masters programmes in fields of Civil, Mechanical, Electronics, Electrical, Computer Science, Sensor Systems, only to mention a few. The programmes involve hands on and project based learning. The M.Tech programmes at VIT are one of the best in top Engineering colleges in India. Exchange programmes that are offered also give students an opportunity to learn internationally.",
      shortdescription: "Applicants should have a relevant bachelor degree and sit for the VITMEE exam. Announcements are made on the dates for the same.",
      class : "blue-small",
      programtype : "Postgraduate",
      language: "English",
      duration: "5 Years",
      image : "assets/images/vectors-01.png",
      imagehome : "assets/images/mtech.jpg",
      anchor : "#/postgrad/mtech",
      link : "http://www.vit.ac.in/admissions/pg"
    },/*{
      name: "M.Sc.",
      description: "These are sciences programmes that provide knowledge in different areas. The advanced and up to date laboratories provide a great hub and incubator for experiments and projects related to the programmes. Some of the programmes specialize in Biotechnology, Microbiology, Genetics, Chemistry and Physics. Most students who take up the graduate degrees in these fields are able to work in Medical, Agricultural and Food Industries.",
      shortdescription: "Students should present an average score above 60% or CGPA above 7 in their bachelor degree for admission to this programme.",
      class : "blue-small",
      programtype : "Postgraduate",
      language: "English",
      duration: "5 Years",
      image : "assets/images/vectors-01.png",
      imagehome : "assets/images/mtech.jpg",
      anchor : "#/postgrad/mtech",
      link : "http://www.vit.ac.in/admissions/pg"
    },*/
    {
      name: "Management",
      description: "The two-year MBA program consists of six trimesters. Students can choose a range of elective subjects from areas such as Finance, Marketing, Human Resources, Information Technology and Systems, International Business, Operations and Business Analytics. Apart from the different core and elective courses in management, the school offers courses on Inner development (Yoga and Meditation), Indian culture and ethos, entrepreneurship, short film making, and business ethics. The MBA is ranked 7th amongst the best Business Schools in India. ",
      shortdescription: "The candidate should have taken any one of the tests -CAT/XAT/MAT/NMAT/GMAT/CMAT and the scores should be made available to the admissions office before the last date for application.",
      class : "magenta-small",
      programtype : "Postgraduate",
      language: "English",
      duration: "5 Years",
      image : "assets/images/vectors-06.png",
      imagehome : "assets/images/btech.jpg",
      anchor : "#/postgrad/business",
      link : "http://www.vit.ac.in/admissions/pg"
    },
    {
      name: "Integrated Programs",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod...",
      shortdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      class : "integrated-small",
      programtype : "Postgraduate",
      language: "English",
      duration: "5 Years",
      image : "assets/images/vectors-11.png",
      imagehome : "assets/images/mtech.jpg",
      anchor : "#/postgrad/integrated",
      link : "http://www.vit.ac.in/admissions/pg"
    }];
    /*Research*/
    $scope.researches = [{
      name: "M.Phil",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit,   sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod...",
      shortdescription: "Master’s degree in relevant subject with a first class or minimum 60% marks (CGPA 6.5 on a 10 – point scale).",
      class : "green-small",
      programtype : "Research",
      language: "English",
      duration: "5 Years",
      image : "assets/images/vectors-10.png",
      imagehome : "assets/images/research.jpg",
      anchor : "#/research",
      link : "http://www.vit.ac.in/admissions/research"
    },
    {
      name: "M.Tech by Research",
      description: "This program offers 3 categories which students can study and these are Internal full time candidates (e.g. VIT professors), internal part time candidates (Professors on a part-time basis) and external part time candidates (professors from other colleges, working students e.t.c. Selection is based on the overall merit index of the candidate which will be arrived at by taking into account the candidate’s performance in the previous university examinations at Bachelor’s and Master’s level and the performance in the written test and / the interview. As the name of the program states it is almost entirely based on research. ",
      shortdescription: "An M.Tech programme that is based on research. Admissions to the program are strictly based on the VITMEE exam.",
      class : "green-small",
      programtype : "Research",
      language: "English",
      duration: "5 Years",
      image : "assets/images/vectors-27.png",
      imagehome : "assets/images/research.jpg",
      anchor : "#/research",
      link : "http://www.vit.ac.in/admissions/research"
    },
    {
      name: "Ph.D.",
      description: "Selection is based on the overall merit index of the candidate which will be arrived at by taking into account the candidate’s performance in the previous university examinations at Bachelor’s and Master’s level and the performance in the written test and / the interview. As the name of the program states it is almost entirely based on research. The research has a wide scope from Engineering to Management to Social Sciences to Humanities. The duration of a PhD at VIT is a minimum of 3 years.",
      shortdescription: " Ph.D. in Engineering: Master’s degree in Engineering / Technology / Business Administration with a first class or a minimum 60% marks (CGPA 6.5 on a 10 – point scale). Ph.D. in Sciences / Humanities / Languages: Master’s degree with a minimum 60% in Sciences.",
      class : "green-small",
      programtype : "Research",
      language: "English",
      duration: "5 Years",
      image : "assets/images/vectors-28.png",
      imagehome : "assets/images/research.jpg",
      anchor : "#/research",
      link : "http://www.vit.ac.in/admissions/research"
    }]

});
  app.controller('CourseListCtrl',function($scope) {
    $scope.arts = {
       availableOptions: [
         {
        name : "School of Computer Engineering (SCOPE)",
        id : "scope",
        course : [{
                name : "School of Computer Engineering (SCOPE)",
                id : "scope",
                course : [
                {
                  name: "B.Sc. Computer Science",
                  duration : "3 Years",
                  curriculumlink : "http://"
                }
              ]
        }]},
        {
        name : "School of Social Science & Languages (SSL)",
        id : "ssl",
        course : [
          {
            name: "B. Com",
            duration : "3 Years",
            curriculumlink : "http://"
          }
        ]
        },
        {
        name : "School of Information Technology and Engineering (SITE)",
        id : "site",
        course : [{
          name : "B.C.A (Bachelor of Computer Applications)",
          duration : "3 Years",
          curriculumlink : "http://"

        },{
          name : "B.Sc. (Multimedia & Animation)",
          duration : "3 Years",
          curriculumlink : "http://"
        }
        ]
      }],
       selectedOption: 
         {
        name : "School of Computer Engineering (SCOPE)",
        id : "scope",
        course : [
              {
                name: "B.Sc. Computer Science",
                duration : "3 Years",
                curriculumlink : "http://"
              }
              ]
        }
      };

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
              name : "M.Tech. Computer Science & Engg",
              duration : "5 Years",
              curriculumlink : "http://"
            },{
              name : "M. Tech. Computer Science & Engineering (Information Security)",
              duration : "5 Years",
              curriculumlink : "http://"
            },{
              name : "M. Tech. Computer Science & Engineering with specialization in Big Data Analytics",
              duration : "5 Years",
              curriculumlink : "http://"
            }]
      },
       {
      name : "School of Civil and Chemical Engineering (SCALE)",
      id : "scale",
      course : [
            {
              name: "M.Tech - Energy and Environmental Engineering",
              duration : "5 Years",
              curriculumlink : "http://"
            },{

              name: "M.Tech - Structural Engineering",
              duration : "5 Years",
              curriculumlink : "http://"
            }]
      },
      {
      name : "School of Mechanical Engineering(SMEC)",
      id : "smec",
      course : [
            {
              name : "M.Tech - Automotive Engineering - in collaboration with ARAI, Pune",
              duration : "5 Years",
              curriculumlink : "http://"
              },{
              name : "M.Tech - CAD / CAM",
              duration : "5 Years",
              curriculumlink : "http://"
              },{
              name : "M.Tech - Mechatronics",
              duration : "5 Years",
              curriculumlink : "http://"
              },{
              name : "M.Tech - Manufacturing Engineering",
              duration : "5 Years",
              curriculumlink : "http://"
              }]
      },{
      name : "School of Bio Sciences and Technology ( SBST )",
      id : "sbst",
      course : [
        {
          name : "M. Sc. Biotechnology (5 Year Integrated Programme)",
          duration : "5 Years",
          curriculumlink : "http://"
        },
        {
          name : "M.Tech. Biotechnology",
          duration : "5 Years",
          curriculumlink : "http://"
        },
        {
          name : "M.Sc. Applied Microbiology",
          duration : "5 Years",
          curriculumlink : "http://"
        },
        {
          name : "M.Sc. Biomedical Genetics",
          duration : "5 Years",
          curriculumlink : "http://"
        },
        {
          name : "M. Sc. Biotechnology",
          duration : "5 Years",
          curriculumlink : "http://"
        }
      ]
    },{
      name : "School of Electrical Engineering (SELECT)",
      id : "select",
      course : [{
        name: "M.Tech. Power Electronics and Drives",
        duration : "5 Years",
        curriculumlink : "http://"
        },{
        name: "M.Tech. Control and Automation",
        duration : "5 Years",
        curriculumlink : "http://"
      }]
    },{
      name : "School of Information Technology and Engineering (SITE)",
      id : "site",
      course : [{
        name : "M.Tech Software Engineering (5 Year Integrated Programme)",
        duration : "5 Years",
        curriculumlink : "http://"
      },{
        name : "M.Tech. Information Technology - Networking",
        duration : "5 Years",
        curriculumlink : "http://"
      },{
        name : "M.Tech. Computer and Communication Engineering",
        duration : "5 Years",
        curriculumlink : "http://"
      },{
        name : "M.C.A. (Master of Computer Applications)",
        duration : "5 Years",
        curriculumlink : "http://"
      }]
    },{
      name : "School of Advanced Sciences ( SAS )",
      id : "sas",
      course : [{
        name : "M.Sc. Chemistry (Organic / Inorganic / Analytical / /Pharma)",
        duration : "5 Years",
        curriculumlink : "http://"
      },{
        name : "M.Sc.Physics",
        duration : "5 Years",
        curriculumlink : "http://"
      }]
    },{
      name : "School of Electronics Engineering (SENSE)",
      id : "sense",
      course : [{
        name : "M.Tech. Automotive Electronics in collaboration with TIFAC-CORE industry partners",
        duration : "5 Years",
        curriculumlink : "http://"
      },{
        name : "M.Tech. Biomedical Engineering",
        duration : "5 Years",
        curriculumlink : "http://"
      },{
        name : "M.Tech. Nanotechnology",
        duration : "5 Years",
        curriculumlink : "http://"
      },{
        name : "M.Tech. Communication Engineering",
        duration : "5 Years",
        curriculumlink : "http://"
      },{
        name : "M.Tech. Sensor System Technology",
        duration : "5 Years",
        curriculumlink : "http://"
      },{
        name : "M.Tech. VLSI Design",
        duration : "5 Years",
        curriculumlink : "http://"
      },{
        name : "M.Tech. Embedded Systems",
        duration : "5 Years",
        curriculumlink : "http://"
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
