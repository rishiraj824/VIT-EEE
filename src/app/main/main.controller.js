(function() {
  'use strict';

 

  var app = angular.module('viteee');

/*
  app.controller('ModalDemoCtrl', function ($uibModal, $log, $document) {
  var $ctrl = this;
  

  $ctrl.animationsEnabled = true;


    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      component: 'modalComponent',
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });

   


  $ctrl.toggleAnimation = function () {
    $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
  };
});
app.component('modalComponent', {
  templateUrl: 'myModalContent.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function () {
    var $ctrl = this;

    

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };
  }
});*/
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
  app.controller('DesktopCtrl', function($scope){
    $scope.isCollapsed = true;
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

  
    app.controller('CarouselCtrl', function($scope, ModalService){
       $scope.active = 0;
      $scope.myInterval = 8000;
      $scope.achievements = [{
        number: "1st",
        text: "Among all Private Engineering Institutions of India by MHRD, Govt. of India Ranking 2016",
        id : 0
      },
      {
        number: "17th",
        text: "Among all B – Schools of India",
        id : 1
      },
      {
        number: "1st",
        text: "Among all Private Engineering Institutes of India by CAREERS360",
        id : 2
      },
      {
        number: "201-250",
        text: "BRICS Ranking",
        id : 3
      },
      {
        number: "201-250",
        text: "BRICS Ranking",
        id : 4
      }];

      $scope.stats = [{
        number: "3277",
        text: "Placements in Wipro",
        date : "20/08/2016",
        id : 0
      },{
        number: "1277",
        text: "Placements in TCS",
        date : "20/08/2016",
        id : 1
      },
      {
        number: "3477",
        text: "Placements in Cognizant",
        date : "20/08/2016",
        id : 2
      }];

      
       $scope.show = function(s) { 
         $scope.slide = s;

          ModalService.showModal({
            templateUrl: 'testimonial.html',
            controller: "ModalController",
            scope: $scope
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                $scope.message = "You said " + result;
            });
        });
      }

  /*Testimonial Carousel*/
  $scope.slides = [ 
    {
      image: "assets/images/testimonials/Damini.png",
      testimonial: "From a fresher to a skilled researcher at the best Biomedical Engineering institute in the world, VIT helped me hone my skill set to emerge as a leader in my chosen field. ",
      name : "Damini Agarwal - B. Tech Biotechnology (2010 – 14) Research/Teaching Assistant, John’s Hopkins University",
      detail : "VIT University gives everyone a sea of opportunities. With a little hard work, they turn into stepping stones that help you reach the highest pinnacles of success. From a student fresh out of school to a skilled researcher in prosthetics at the best Biomedical Engineering institute in the world, VIT University helped me hone my skill set to emerge as a leader in my chosen field.The well-designed and flexible academic curriculum, excellent infrastructure, diverse extracurricular activities, hospitable living environment and the opportunity to interact with a wide diversity of students helped me excel in all possible frontiers and prepared me for a future in global collaboration, research and leadership. VIT University is indeed a ‘Place to Learn’ and gives you ‘A Chance to Grow’.",
      id : 0
    },
    {
      image: "assets/images/testimonials/Nishant.png",
      testimonial: "Looking back at the time I spent in VIT, I see that a lot of the opportunities I got, helped bolster my confidence to set out on the career path that I am now on.",
      name : "Nishant Gupta - B. Tech Electronics and Communication Engineering (2010 – 14), Founder, Renaura Wellness Pvt. Ltd.",
      detail: "Looking back at the time I spent in VIT, I see that a lot of the opportunities I got, helped bolster my confidence to set out on the career path that I am now on. Academics aside, a lot of the projects that I worked on, the people I met, the experiences I had, all helped widen my horizons and taught me how to manage both my personal and professional life. Everyone's beliefs and expectations about college are different. All I can say is, VIT truly helped me figure out my capabilities like it has for many students. If you have a thirst for knowledge you will find an ocean there for you.",
      id : 1
    },
    {
      image: "assets/images/testimonials/Geetha.png",

       testimonial : "I still remember the day, when two undergraduate space enthusiastic students approached me to initiate the “Students for Exploration and Development of Space“ chapter in VIT.",
        name: "Dr. Geetha Manivasagam, Sr. Professor, School of Mechanical Engineering, VIT University",

       detail : "I joined VIT University after my post-doctoral research experience at  Clemson University, USA. Initially, I felt aimless, as I was the only faculty member from the field of materials Science and Engineering in mechanical department, and it was a great challenge to teach materials engineering to both undergraduates and post graduates and also to develop research in the field of materials. This inspired me to attempt for a new strategy to attract students through my teaching and in demonstrating lab experiments. I was successful in motivating the passionate students to take up research in materials and join me for short-term projects. This ultimately led to publication of papers in high quality journals and fetching government projects. With the support from VIT administration and government funded projects, I was able to develop metallurgy lab for undergraduates and research lab with international standards. The experience gained by the students through these labs resulted in securing admissions in world rank universities and placements in highly reputed companies. Apart from Mechanical engineering, students from Physics, Biotechnology and Biomedical Engineering were also attracted to join our lab which resulted in outstanding research outputs.  This resulted in highly interdisciplinary research and  led to outstanding contributions in the field of biomaterials and gave a birth to the “Centre for Biomaterials, Cellular and Molecular Theronistics” (CBCMT). My research aside, I was made well known in the field of space science through undergraduate students from various engineering departments. I still remember the day, when two undergraduate space enthusiastic students approached me to initiate the space club at VIT. We decided to initiate a student space chapter -“Students for Exploration and Development of Space “(SEDS)  which is a part of SEDS-MIT-USA. Our first project along with ISRO led to the development of a payload and launching of a student sounding rocket. With this glory, our chapter continued to  grow rapidly through the highly passionate students and I am very proud to share that  VIT is the head quarters for Space chapter –SEDS  in India. Further, SEDS VIT is the one of the chapters, which bagged best chapter award three times within the university.  My involvement in this chapter made me to work in the field of aerospace engineering and presently  two Ph.D students are working in the field of aerospace materials under my guidance.    VIT has been a fantastic journey thus far and I look forward to many years and students to come.",
     id : 2
   },

    {
      image: "assets/images/testimonials/Enakshi.png",

       testimonial : "VIT University has been a wonderful experience which has transformed me in every sense.",
      name: "Enakshi Manohar - B. Tech Computer Science Engineering (2011 – 2015), Business Analyst at ZS Associates, Gurgaon",

     detail : "A unique and progressive learning environment has helped me expand my education beyond textbooks and given me confidence to explore my potential. Specializing as an Electronics and Communication Engineer, I worked on a variety of projects and papers which helped me build my knowledge base. VIT gave more extra-curricular opportunities than I expected an engineering degree to give me. It allowed me to work on various facets on my personality. I have been part of the University Basketball Team for four years and worked as the Sports Organizer for Riviera’16(International Annual Sports And Cultural Carnival).I also helped organize the International Womens’ Day Celebrations’ 2016. VIT is a beautiful amalgamation of people from all parts of the world and I have got an opportunity to interact and work with people from different communities. This has helped me broaden my vision and grow as an individual. I have tried to maintain the balance between my academics, physical education and extra-curricular activities and I strongly feel that the balance is the key reason for my accomplishments in VIT. Hard work, curiosity and a different learning curve has helped me get a dream offer as a Business Consulting Associate at ZS Associates, New Delhi. ",
     id: 3
   },
    {
      image: "assets/images/testimonials/Maithili.png",
       testimonial : "Our curriculum is put together so effectively, a student cannot help but enjoy it. Choosing VIT has been one of the best decisions of my life so far.",
      name: "Maithili Devadas – B. Tech Biotechnology",

      detail : "VIT to me has been an extremely wonderful journey that has brought out the best in me. I'm pursuing a B.Tech in Biotechnology here and I've enjoyed my course thoroughly. The subjects are extremely interesting and the curriculum is put together so effectively, a student cannot help but enjoy it. The never ending support of my faculties and their ready-to-help attitude at any time of the day helped me get through everything without even so much as a hiccup. The indefinite number of co-curriculars offered here ensure that a student does not spend the time inside the four walls of the hostels. You're always kept on your toes! The campus holds in it such great diversity, it's stupefying. You'd find all kinds of people here living together in harmony - it's amazing !  I've met the most genuine people here and developed friendships I think would last for a lifetime.  I believe I've been transformed into a much better version of myself. A much more independent and strong individual than before. Choosing VIT out of the many colleges at hand, I think I made the best decision.",
      id :4
     },
     {
      image: "assets/images/testimonials/Atul.png",
    testimonial : "This college gives you the liberty to be yourself. I’ve spent some of the best days of my life in this home away from home.",
    name : "Atul Arora - B. Tech Civil Engineering",

     detail : 'To pursue my interest in Engineering, I started my journey with VIT four years ago. It has truly been an amazing experience and I can confid  ently say that it is one of the best universities in India. My college life in VIT has been full of opportunities. From joining the music club and being it’s board member in the first year itself, winning multiple band competitions to being a core committee member of the ‘Team Eco Titans’ and a part of the college tennis team. But among all of these experiences, joining the music club was one of the best things that happened to me. My journey in the music club began with joining a jazz band called "Sunday Jam", then I was asked to experiment in a metal band called "Debarred". I then formed an Indian fusion band "Pappu Project" and lastly my two current bands "Flip" and "Three turns later", both being funk-rock and blues. With little exposure in rock, I had never imagined I would be playing all these genres and winning competitions. Been to nearly 40 competitions in total in whole of Southern India and have won nearly 30 of them, and on this journey I made innumerable memories and found friends who are family to me now. This college gives you the liberty to be yourself. The support that you get from your seniors, peers and most importantly the faculty is unmatched. Whether it is academics or extra circulars, the facilities provided have truly enriched my experience here. I’ve spent some of the best days of my life in this home away from home.',
     id : 5
  },
    {
      image: "assets/images/testimonials/Utkarsh.png",

    testimonial :  "The exposure and opportunities I’ve had in VIT have made me grow as an individual. It has made me more creative, matured and experienced.",
      name: "Utkarsh Raj, B. Tech Computer Science Engineering",
       detail : "I still remember my first orientation day in VIT, our respected Chancellor said,'' VIT is an ocean of flowing opportunities, it depends on you how much you're able to grab'. Well, I myself have gained a lot from VIT. The important part being the non-stop support from the VIT Management, faculties, staffs and students. Be it academic or non-academic one will always have someone to show them the right path.', Clubs and chapters here plays a very important role in one's daily life. I, myself am part of  VIT Film Society. A club aimed at film appreciation rather than considering cinema just a mere entertainment. We have a team of budding film-makers who dedicate their time for the art of film-making. We make short films on different agendas be it social, day-to-day life scenarios etc. And the best part of this venture is VIT doesn't restrict us with our ideas, we get a green light and get to explore more in this field. All this exposure and opportunities in VIT have made me grow as an individual, it has made me more creative, matured and experienced. I take great pride in saying aloud, 'I'm a VITian'. VIT indeed is a place to learn with a chance to grow! ",
       id : 6
     },
    {
      image: "assets/images/testimonials/Aswathy.png",
       testimonial : "My years in VIT have been nothing but a roller coaster, an exciting and exhilarating one. A passionate dancer, the university has given me an encouraging platform that enabled me to perform and excel.",
      name: "Aswathy Rajesh, B. Tech Computer Science Engineering",
     detail : "My years in VIT have been nothing but a roller coaster, an exciting and exhilarating one. Being a passionate dancer at heart, the university has given me an encouraging platform all throughout enabling me to perform and win accolades by fairly representing the institution. The multi-cultural flavour as vividly seen in the student interactions have granted a bigger, better and broader exposure. With the facilities that are present for the students and the kind faculty, along with the numerous student chapters catering to every individuals forte, VIT University promises holistic development. Dr S. Ghosh, Sr. Professor, VIT University Most of my students are now my friends and this bond will only grow stronger in the years to come. I joined VIT in 2007 as a Senior Professor whilst maintaining my links with major UK Universities.I found this arrangement very productive. Our Chacellor's desire to make VIT a world class University resonated with my own wishes-this lent a truer purpose to my home-coming after several decades abroad. I soon discovered VIT's greatest assets-our young and motivated students. There was a palpable earnestness  of effort-an endeavor to strive for something beyond one's immediate ken. There was no looking back-teaching and research became a passion. And with the project based learning system, the major focus of good teaching practice involved research projects. Very soon, my young and able team of researchers (some very young-second and third  year B.Tech students) co-authored International Peer Reviewed Journal papers. These papers covered a diverse range-from Geoengineering solutions to tackle cyclones over the Bay of Bengal, to Housing Projects on Mars. My students were invited to Vienna, Cambridge, Berkeley and the Jet Propulsion Laboratory, Pasadena, California. They developed novel engineering products-most notably a cyclone alerting system that was among Wiley's most cited papers.  I have co-authored Books with students-with topics ranging from the comfort and habitability of Game Reserves, Green structures, Idioms of Sustainability in Ancient Anuradhapura and others.  Naturally, with this international flavour, I mentored students on their Final Year Thesis, not  just from Mechanical Engineering, but from across other Schools and secured them with admissions to the world's top universities-Oxford, Cambridge, Imperial College, Carnegie Mellon, Yale, Purdue, Illinois among others. Most of these students are now my friends and this bond will only grow stronger in the years to come.",
     id : 7 
   }];


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
/*Form Capture*/
app.controller('Controller', function($scope, ModalService) {
    
  
        ModalService.showModal({
            templateUrl: 'modal.html',
            controller: "ModalController"
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                $scope.message = "You said " + result;
            });
        });
  
    
});
app.controller('ModalController', function($scope, close) {

 $scope.close = function(result) {
  close(result, 500); // close, but give 500ms for bootstrap to animate
 };

});

app.controller('GalleryCtrl', function ($scope, Lightbox) {
  $scope.images = [
    {
      "url": "/assets/images/gallery/sjt.jpg",
      "thumbUrl" : "/assets/images/gallery/sjt.jpg"
    },
    {
      "url": "/assets/images/gallery/main_building.jpg",
      "thumbUrl" : "/assets/images/gallery/main_building.jpg"
    },
    {
      "url": "/assets/images/gallery/achitechture.jpg",
      "thumbUrl" : "/assets/images/gallery/achitechture.jpg"
    },
    {
      "url": "/assets/images/gallery/alm.jpg",
      "thumbUrl" : "/assets/images/gallery/alm.jpg"
    },
    {
      "url": "/assets/images/gallery/annaaudi.jpg",
      "thumbUrl" : "/assets/images/gallery/annaaudi.jpg"
    },
    {
      "url": "/assets/images/gallery/audi1.jpg",
      "thumbUrl" : "/assets/images/gallery/audi1.jpg"
    },
    {
      "url": "/assets/images/gallery/audi2.jpg",
      "thumbUrl" : "/assets/images/gallery/audi2.jpg"
    },
    {
      "url": "/assets/images/gallery/canteen.jpg",
      "thumbUrl" : "/assets/images/gallery/canteen.jpg"
    },
    {
      "url": "/assets/images/gallery/conf.jpg",
      "thumbUrl" : "/assets/images/gallery/conf.jpg"
    },
    {
      "url": "/assets/images/gallery/gym.jpg",
      "thumbUrl" : "/assets/images/gallery/gym.jpg"
    },
    {
      "url": "/assets/images/gallery/sport_facility.jpg",
      "thumbUrl" : "/assets/images/gallery/sport_facility.jpg"
    },
    {
      "url": "/assets/images/gallery/gym1.jpg",
      "thumbUrl" : "/assets/images/gallery/gym1.jpg"
    },
    {
      "url": "/assets/images/gallery/pool.jpg",
      "thumbUrl" : "/assets/images/gallery/pool.jpg"
    },
    {
      "url": "/assets/images/gallery/tt.jpg",
      "thumbUrl" : "/assets/images/gallery/tt.jpg"
    },
    {
      "url": "/assets/images/gallery/vit_auditorium.jpg",
      "thumbUrl" : "/assets/images/gallery/vit_auditorium.jpg"
    },
     {
      "url": "/assets/images/gallery/SJT-Smart-Class.jpg",
      "thumbUrl" : "/assets/images/gallery/SJT-Smart-Class.jpg"
    },
     {
      "url": "/assets/images/gallery/smartclass.jpg",
      "thumbUrl" : "/assets/images/gallery/smartclass.jpg"
    }

  ];
  $scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.images, index);
  };
});
 

  app.config(function (LightboxProvider) {
  LightboxProvider.fullScreenMode = true;
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
      name: "Fashion Technology",
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
      name: "M.Tech",
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
    },{
      name: "M.Sc.",
      description: "These are sciences programmes that provide knowledge in different areas. The advanced and up to date laboratories provide a great hub and incubator for experiments and projects related to the programmes. Some of the programmes specialize in Biotechnology, Microbiology, Genetics, Chemistry and Physics. Most students who take up the graduate degrees in these fields are able to work in Medical, Agricultural and Food Industries.",
      shortdescription: "Students should present an average score above 60% or CGPA above 7 in their bachelor degree for admission to this programme.",
      class : "blue-small",
      programtype : "Postgraduate",
      language: "English",
      duration: "5 Years",
      image : "assets/images/vectors-01.png",
      imagehome : "assets/images/mtech.jpg",
      anchor : "#/postgrad/msc",
      link : "http://www.vit.ac.in/admissions/pg"
    },
    {
      name: "M.CA.",
      description: "The department has over 20 Engineering 2 year- Masters programmes in fields of Civil, Mechanical, Electronics, Electrical, Computer Science, Sensor Systems, only to mention a few. The programmes involve hands on and project based learning. The M.Tech programmes at VIT are one of the best in top Engineering colleges in India. Exchange programmes that are offered also give students an opportunity to learn internationally.",
      shortdescription: "Students should present an average score above 60% or CGPA above 7 in their bachelor degree for admission to this programme.",
      class : "blue-small",
      programtype : "Postgraduate",
      language: "English",
      duration: "5 Years",
      image : "assets/images/vectors-01.png",
      imagehome : "assets/images/mtech.jpg",
      anchor : "#/postgrad/mca",
      link : "http://www.vit.ac.in/admissions/pg"
    },
    {
      name: "MBA",
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
      link : "http://www.vit.ac.in/admissions/research/mphil"
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
      link : "http://www.vit.ac.in/admissions/research/mtechresearch"
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
      link : "http://www.vit.ac.in/admissions/research/phd"
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
    $scope.btechs = [
        {
          name : "VIT University - Vellore Campus",
          courses :
            [{ 
            name : "Bio-Medical Engineering",
            link : "http://"
          },
          {
            name : "Biotechnology",
            link : "http://"
          },
          {
            name : "Civil Enginering",
            link : "http://"
          },
          {
            name : "Chemical Engineering",
            link : "http://"
          },{
            name : "Computer Science and Engineering",
            link : "http://"
          },

           {
           name : "Computer Science and Engineering(Spec.in Bioinformatics)",
           link : "http://"
         },
            {
              name : "Computer Science and Engineering with specialization in Information Security",
              link : "http://"
            },
            {
              name : "Electronics and Communication Engineering",
              link : "http://"
            },
            {
              name : "Electronics and Communication Engineering with Specialization with Internet of Things and Sensor",
              link : "http://"
            },
            {
              name : "Electrical and Electronics Engineering",
              link : "http://"
            },
            {
              name : "Electronics and Instrumentaion Engineering",
              link : "http://"
            },
            {
              name : "Information Technology",
              link : "http://"
            },
            {
              name : "Mechanical Engineering",
              link : "http://"
            },
            {
              name : "Mechanical(Spec.in Automotive Engineering)",
              link : "http://"
            },
            {
              name : "Mechanical(Spec.in Energy Engineering)",
              link : "http://"
            },
            {
              name : "Production and Industrial Engineering",
              link : "http://"
            }
          ],
          id : 0
        },
        {
          name : "VIT University - Chennai Campus",
          courses : [
            {
              name : "Civil Enginering  ",
              link : "http://"
            },
            {
              name : "Computer Science and Engineering",
              link : "http://"
            },
            {
              name : "Electronics and Computer Engineering",
              link : "http://"
            },
            {
              name : "Fashion Technology",
              link : "http://"
            },{
              name : "Electronics and Communication Engineering  ",
              link : "http://"
            },

             {
             name : "Electrical and Electronics Engineering ",
             link : "http://"
           },
               {
                name : "Mechanical Engineering"  ,
                link : "http://"
              }
          ],
          id :1
        },
        {
          name : "VIT University - AP Campus",
          courses : [
            {
              name : "Computer Science and Engineering",
              link : "http://"
            },
            {
              name : "Electronics and Computer Engineering",
              link : "http://"
            },
            {
              name : "Mechanical Engineering",
              link : "http://"
            },
            {
              name : "Computer Science and Engineering with Specialization of Data Analytics",
              link : "http://"
            },{
              name : "Computer Science and Engineering with Network Security",
              link : "http://"
            },

             {
             name : "Electrical and Electronics Engineering",
             link : "http://"
           }
          ],
          id : 2
        },
        {
          name : "VIT University - Bhopal Campus",
          courses : [
            {
              name : "Computer Science and Engineering",
              link : "http://"
            },
            {
              name : "Electronics and Computer Engineering",
              link : "http://"
            },
            {
              name : "Electronics and Communication Engineering  ",
              link : "http://"
            }
          ],
          id : 3
        } ];
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
     /*MSc*/
     $scope.mscs = {
     availableOptions: [
       {
      name : "School of Bio Sciences and Technology ( SBST )",
      id : "sbst",
      course : [
        {
          name : "M. Sc. Biotechnology (5 Year Integrated Programme)",
          duration : "5 Years",
          eligibility : "",
          curriculumlink : "http://"
        },
        {
          name : "M.Sc. Applied Microbiology",
          duration : "5 Years",
          eligibility : "",
          curriculumlink : "http://"
        },
        {
          name : "M.Sc. Biomedical Genetics",
          duration : "5 Years",
          eligibility : "",
          curriculumlink : "http://"
        },
        {
          name : "M. Sc. Biotechnology",
          duration : "5 Years",
          eligibility : "",
          curriculumlink : "http://"
        }
      ]
    },{
      name : "School of Advanced Sciences ( SAS )",
      id : "sas",
      course : [{
        name : "M.Sc. Chemistry (Organic / Inorganic / Analytical / /Pharma)",
        duration : "5 Years",
        eligibility : "",
        curriculumlink : "http://"
      },{
        name : "M.Sc.Physics",
        duration : "5 Years",
        eligibility : "",
        curriculumlink : "http://"
      }]
    }],
     selectedOption: 
      {
      name : "School of Bio Sciences and Technology ( SBST )",
      id : "sbst",
      course : [
        {
          name : "M. Sc. Biotechnology (5 Year Integrated Programme)",
          duration : "5 Years",
          eligibility : "",
          curriculumlink : "http://"
        },
        {
          name : "M.Sc. Applied Microbiology",
          duration : "5 Years",
          eligibility : "",
          curriculumlink : "http://"
        },
        {
          name : "M.Sc. Biomedical Genetics",
          duration : "5 Years",
          eligibility : "",
          curriculumlink : "http://"
        },
        {
          name : "M. Sc. Biotechnology",
          duration : "5 Years",
          eligibility : "",
          curriculumlink : "http://"
        }
      ]
    }//This sets the default value of the select in the ui
     };
     /*M.tech Eligibility*/
     $scope.mtechs =  {
     availableOptions: [
     {
      name : "Automotive Engineering in collaboration with Automotive Research Association of India, (ARAI), Pune ",
      eligibility :  "B.E/B.Tech. Degree in Mechanical / Automobile / Production / Manufacturing Engineering or Mechatronics or any equivalent degree.",
      link : "http://",
      apply : "http://",
      fee : "http://"
    },
    {
      name : "Computer Aided Design / Computer Aided Manufacturing  ",
      eligibility :  "B.E/B.Tech. Degree in Mechanical / Automobile or Production Engineering or any equivalent degree.",
      link : "http://",
      apply : "http://",
      fee : "http://"
    },
    {
      name : "Energy and Environmental Engineering  ",
      eligibility :  "B.E/B.Tech. in Civil / Mechanical / Biotechnology / Chemical / Electrical / Biochemical / Environmental / M.Sc in Chemistry, Microbiology, Environmental Science, Biotechnology, Biochemistry.",
      link : "http://",
      apply : "http://",
      fee : "http://"
    },
    {
      name : "Mechatronics  ",
      eligibility :  "B.E/B.Tech. Degree in Mechanical / Automobile / Manufacturing / Production / Electrical & Electronics / Electronics & Communication / Electronics & Instrumentation / Instrumentation & Control / Computer Science / Information Technology / Mechatronics or any equivalent degree",
      link : "http://",
      apply : "http://",
      fee : "http://"
    },
    {
      name : "Manufacturing Engineering ",
      eligibility :  "B.E/B.Tech. Degree in Mechanical / Production / Manufacturing / Automobile Engineering or any equivalent degree",
      link : "http://",
      apply : "http://",
      fee : "http://"
    },
    {
      name : "Structural Engineering  ",
      eligibility :  "B.E/B.Tech. Degree in Civil Engineering / Civil & Structural Engineering or any equivalent degree",
      link : "http://",
      apply : "http://",
      fee : "http://"
    },
    {
      name : "Information Technology (Networking) ",
      eligibility :  "B.E/B.Tech. Degree in any branch / M.S / M.Sc. Computer Science or Information Technology or Software Engineering / MCA or any other equivalent degree with valid GATE score in Computer Science",
      link : "http://",
      apply : "http://",
      fee : "http://"
    },
    {
      name : "Computer and Communication Engineering  ",
      eligibility :  "B.E/B.Tech. / M.S / M.Sc. In Computer Science or Informaton Technology or Sotware Engineering / MCA or any other equivalent degree with valid GATE score in Computer Science",
      link : "http://",
      apply : "http://",
      fee : "http://"
    },
    {
      name : "Nanotechnology  ",
      eligibility :  "B.E/B.Tech. Degree in ECE / EEE / E&I / M.Sc. Physics with Spl. In Electronics / Material Science / Solid State Physics / B.Tech Nanotechnology / M.Sc. Nanotechnology / or any equivalent degree",
      link : "http://",
      apply : "http://",
      fee : "http://"
    },
    {
      name : "Communication Engineering ",
      eligibility :  "B.E/B.Tech. Degree in Electrical / Electronics / EEE/ ECE/ Telecommunication, E&I/ Computer Sciences* (* Bridge course needed) M.Sc. Physics with Electronics spl. / Electronics or any equivalent degree",
      link : "http://",
      apply : "http://",
      fee : "http://"
    },
    {
      name : "Sensor System Technology  ",
      eligibility :  "B.E/B.Tech. Degree in EEE / ECE / E&I / CSE / Instrumentation & Control / M.Sc. Physics with Electronics / Electronics or any equivalent degree",
      link : "http://",
      apply : "http://",
      fee : "http://"
    },
    {
      name : "VLSI Design (Very Large Scale Integrated Design)  ",
      eligibility :  "B.E/B.Tech. Degree in Electrical / Electronics / EEE / ECE / E&I / M.Sc. Physics with Electronics / Electronics or any equivalent degree",
      link : "http://",
      apply : "http://",
      fee : "http://"
    },
    {
      name : "Automotive Electronics in collaboration with TIFAC-CORE industry partners ",
      eligibility :  "B.E/B.Tech. Degree in ECE / Telecommunication / CSE / EIE / IT / EEE / Mechatronics or any equivalent degree",
      link : "http://",
      apply : "http://",
      fee : "http://"
    },
    {
      name : "Power Electronics and Drives  ",
      eligibility :  "B.E/B.Tech. Degree in Electrical / Electronics / EEE / ECE / E&I or any equivalent degree",
      link : "http://",
      apply : "http://",
      fee : "http://"
    },
    {
      name : "Computer Science and Engineering  ",
      eligibility :  "B.E/B.Tech. Degree in any branch / M.S / M.Sc. Computer Science or IT or Software Engineering / MCA or any other equivalent degree **.",
      link : "http://",
      apply : "http://",
      fee : "http://"
    },
    {
      name : "CSE in Cloud Computing / Big Data Analytics ",
      eligibility :  "B.E/ B.Tech Degree in any Branch / MCA or any other equivalent degree.",
      link : "http://",
      apply : "http://",
      fee : "http://"
    },
    {
      name : "Biotechnology ",
      eligibility :  "B.E/B.Tech. Degree in Chemical/Leather Technology/Biotechnology/Industrial Biotechnology/Bio-chemical/Bio-Medical/Bio-Informatics or a Bachelor’s Degree in Pharmacy or M.Sc. Degree in Biochemistry/Biotechnology/Microbiology/Bio-Physics/Biology/Botany/Zoology/Genetics/MBBS/M.Sc.(Ag) & M.V.Sc.",
      link : "http://",
      apply : "http://",
      fee : "http://"
    },
    {
      name : "Biomedical Engineering  ",
      eligibility :  "B.E/B.Tech Degree in Bio-Medical Engg/Bio-Medical Instrumentation/Medical Electronics/ECE/EIE/EEE/Biotechnology/Bio-Informatics/Mechanical/M.Sc in Biophysics/ Electronics/Physics/Bio-Medical Sciences/ Bio-medical Instrumentation/Bioinformatics/Biotechnology or MBBS/Degree in physiotherapy/Occupational therapy of 4 years degree programme.",
      link : "http://",
      apply : "http://",
      fee : "http://"
    },
    {
      name : "Embedded Systems  ",
      eligibility :  "B.E/B.Tech. Degree in ECE/EEE/Mechatronics/EIE.",
      link : "http://",
      apply : "http://",
      fee : "http://"
    },
    {
      name : "Control and Automation  ",
      eligibility :  "B.Tech(EEE)/B.Tech(ECE)/B.Tech(E&I)/any other Equivalent UG degree/ Instrumentation/Electronics/Control.",
      link : "http://",
      apply : "http://",
      fee : "http://"
    }],     
    selectedOption : {
      name : "Automotive Engineering in collaboration with Automotive Research Association of India, (ARAI), Pune ",
      eligibility :  "B.E/B.Tech. Degree in Mechanical / Automobile / Production / Manufacturing Engineering or Mechatronics or any equivalent degree.",
      link : "http://",
      apply : "http://",
      fee : "http://"
    }};
     /*M.Tech*/

     $scope.cluster = {
     availableOptions: [
       {
      name : "School of Computer Engineering (SCOPE)",
      id : "scope",
      course : [
            {
              name : "M.Tech. Computer Science & Engg",
              duration : "5 Years",
              eligibility : "",
              curriculumlink : "http://"
            },{
              name : "M. Tech. Computer Science & Engineering (Information Security)",
              duration : "5 Years",
              eligibility : "",
              curriculumlink : "http://"
            },{
              name : "M. Tech. Computer Science & Engineering with specialization in Big Data Analytics",
              duration : "5 Years",
              eligibility : "",
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
              eligibility : "",
              curriculumlink : "http://"
            },{

              name: "M.Tech - Structural Engineering",
              duration : "5 Years",
              eligibility : "",
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
              eligibility : "",
              curriculumlink : "http://"
              },{
              name : "M.Tech - CAD / CAM",
              duration : "5 Years",
              eligibility : "",
              curriculumlink : "http://"
              },{
              name : "M.Tech - Mechatronics",
              duration : "5 Years",
              eligibility : "",
              curriculumlink : "http://"
              },{
              name : "M.Tech - Manufacturing Engineering",
              duration : "5 Years",
              eligibility : "",
              curriculumlink : "http://"
              }]
      },{
      name : "School of Bio Sciences and Technology ( SBST )",
      id : "sbst",
      course : [
        {
          name : "M.Tech. Biotechnology",
          duration : "5 Years",
          eligibility : "",
          curriculumlink : "http://"
        }
      ]
    },{
      name : "School of Electrical Engineering (SELECT)",
      id : "select",
      course : [{
        name: "M.Tech. Power Electronics and Drives",
        duration : "5 Years",
        eligibility : "",
        curriculumlink : "http://"
        },{
        name: "M.Tech. Control and Automation",
        duration : "5 Years",
        eligibility : "",
        curriculumlink : "http://"
      }]
    },{
      name : "School of Information Technology and Engineering (SITE)",
      id : "site",
      course : [{
        name : "M.Tech. Information Technology - Networking",
        duration : "5 Years",
        eligibility : "",
        curriculumlink : "http://"
      },{
        name : "M.Tech. Computer and Communication Engineering",
        duration : "5 Years",
        eligibility : "",
        curriculumlink : "http://"
      }]
    },{
      name : "School of Electronics Engineering (SENSE)",
      id : "sense",
      course : [{
        name : "M.Tech. Automotive Electronics in collaboration with TIFAC-CORE industry partners",
        duration : "5 Years",
        eligibility : "",
        curriculumlink : "http://"
      },{
        name : "M.Tech. Biomedical Engineering",
        duration : "5 Years",
        eligibility : "",
        curriculumlink : "http://"
      },{
        name : "M.Tech. Nanotechnology",
        duration : "5 Years",
        eligibility : "",
        curriculumlink : "http://"
      },{
        name : "M.Tech. Communication Engineering",
        duration : "5 Years",
        eligibility : "",
        curriculumlink : "http://"
      },{
        name : "M.Tech. Sensor System Technology",
        duration : "5 Years",
        eligibility : "",
        curriculumlink : "http://"
      },{
        name : "M.Tech. VLSI Design",
        duration : "5 Years",
        eligibility : "",
        curriculumlink : "http://"
      },{
        name : "M.Tech. Embedded Systems",
        duration : "5 Years",
        eligibility : "",
        curriculumlink : "http://"
      }]
    }],
     selectedOption: 
       {
      name : "School of Computer Engineering (SCOPE)",
      id : "scope",
      course : [
            {
              name: "M.Tech. Computer Science and Engineering *",
              duration : "5 Years",
              eligibility : "",
              curriculumlink : "http://"
            },{

              name: "M.Tech. Computer Science and Engg (Spec. in Bioinformatics)",
              duration : "5 Years",
              eligibility : "",
              curriculumlink : "http://"
            },{
              name: "M.Tech. Computer Science and Engineering with Spec. in Information Security",
              duration : "5 Years",
              eligibility : "",
              curriculumlink : "http://"
            
      }]
      }//This sets the default value of the select in the ui
     };
     $scope.status = {
    isCustomHeaderOpen: false,
    isFirstOpen: true,
    isFirstDisabled: false
  };
 })

})();
