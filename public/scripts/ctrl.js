angular.module('materialApp')
    .controller('HomeCtrl', homeCtrl)

function homeCtrl($document, $scope, $window, $mdToast, $http, $sce, $mdMedia, $mdSidenav, $mdBottomSheet, $timeout, $log, Feedback, LikeDislike) {
    angular.element(document).ready(function () {
        console.log("doc ready");
        $scope.hideSplash = true;
        $scope.$apply();
        // setTimeout(function() {
        //     $scope.hideSplash = true;
        //     $scope.$apply();
        //     // console.log("splash hidden");
        // }, 2800);
    });


    $scope.tiles = []
    //give a callback later
    for (i = 0; i < 12; i++) {
        push_to_tiles(i);
    }

    function push_to_tiles(i) {
        var tmp = !((i % 9) % 4) ? "2" : "1";
        $scope.tiles.push({
            row_span: "1",
            col_span: tmp,
            row_span_xs: "1",
            col_span_xs: (i === 3) ? "2" : tmp, //special case 
            showDetails: false,
            click: null
        })
    }

    console.log($scope.tiles);

    $scope.project_data = [{
        title: "Mobi Assets",
        desc: "This project involved development of Tesco's MobiAsset mobile application for tracking mobile devices available for testing. User could register the device to server and allocate or deallocate devices to his/her name and can view available free devices within the team so that he/she can take more devices based on the needs.",
        role: "Android Developer, Server Developer",
        platform_framework: "Native Android, Node.js (Express), Mongo DB",
        resp: "Android Network Operations\nServer API Development\nUnit Testing and code coverage using Mocha\nAutomation using Supertest ",
        duration: "1 Month Android, 3 Month Server"
    }, {
        title: "Store Empowerment",
        desc: "This project involves development of Tesco's Store Empowerment mobile application for iPhone, Windows and Android mobile devices. Store Managers can view store orders and items which need replenishment. Provides KPI data (Key Performance Indicators) for all stores. Helps customers in locating their product. Providing Authentication service to users by JWT (Json Web Tokens) Built this server from scratch, running under IIS for scalability.",
        role: "Server Developer",
        platform_framework: "Node.js (Express), Couchbase, jwt.io",
        resp: "Server API Development.\nImplementation of portal for in house distribution of apps.",
        duration: "7 Month"
    }, {
        title: "Digital Clubcard",
        desc: "This project involves development of Tesco's customer facing Digital Clubcard app. It allows users to view their coupons, points and redeem the coupons. It also allows users to make payment using wallet, locate nearest stores, etc.",
        role: "Hybrid App Developer",
        platform_framework: "Angular.js, Cordova , Ionic",
        resp: "Hybrid App development using Angular, Cordova and ionic\nStore locator using Google maps Javascript\nIntegrating web view components with Native app.",
        duration: "3 Month"
    }]
    $scope.about_me = {
        text: "Life, Job And Pursuit of Happiness...\
        \n\nHey! I’m Aishwat, I love to solve system architecture problems and design them end to end.\
        \n\nI have 4yrs of Backend and frontend experience.\
        \n\nStrong engineering professional with a Bachelor of Technology (B.Tech.) focused in Computer Science from National Institute of Technology Goa.\n\
        \n\n \
                \nStarted with Native Android App Development,few months later switched to another project with tech stack based on Nodejs,Mongo DB,Couchbase,Angular,ionic and other javascript frameworks \
                \nAfter a year or so,moved to different project based on Swift and currently working on it. \
                \n\nIn my free time, I like reading novels,movies,cycling and music. \
                \nA lil time spent on stackoverflow and learning some random weired tech stuff.\
                \nAnd ya I have some evil friends but they are always there when I need them."
    }
    $scope.work_ex = {
        text: "15 months IT experience Tesco Benguluru as Software Engineer.\
        \nWorked on various projects involving node.js, angular.js, mongodb, couchbase, mocha.js, ionic framework, \
        bootstrap, Android App development, json web tokens, Swift."
    }
    $scope.programming_skills = [{
        language: "C, C++, JAVA",
        rating: ["r1", "r1", "r1", "r2", "r3", "r3"]
    }, {
        language: "Javascript",
        rating: ["r1", "r1", "r1", "r1", "r1", "r3"]
    }, {
        language: "Node.js",
        rating: ["r1", "r1", "r1", "r1", "r2", "r3"]
    }, {
        language: "MongoDB, Couchbase",
        rating: ["r1", "r1", "r1", "r1", "r3", "r3"]
    }, {
        language: "Angular Js",
        rating: ["r1", "r1", "r1", "r3", "r3", "r3"]
    }, {
        language: "Android",
        rating: ["r1", "r1", "r1", "r3", "r3", "r3"]
    }, {
        language: "SQL, PL/SQL, PHP, HTML, C#",
        rating: ["r1", "r1", "r2", "r3", "r3", "r3"]
    },]

    $scope.user = {
        name: '',
        email: '',
        text: '',
        time: ''
    };

    $scope.resume_text = "resume";
    $scope.show_fb = false;
    $scope.show_gmail = false;
    $scope.show_g_plus = false;
    $scope.show_linkedin = false;
    $scope.show_skype = false;
    $scope.show_phone = false;
    reset_project_section();

    $scope.tiles[0].click = function () {
        $scope.tiles[0].showDetails = !$scope.tiles[0].showDetails;
        console.log("tiles[0]: " + $scope.tiles[0].showDetails);
    }

    $scope.tiles[1].click = function () {
        $scope.tiles[1].showDetails = !$scope.tiles[1].showDetails;

        if ($mdMedia('(min-width: 600px)') && $mdMedia('max-width: 1024px')) {
            //660 to 1024 
            $scope.tiles[1].row_span = ($scope.tiles[1].row_span == "1" ? "2" : "1"); //increase colspan too         
            $scope.tiles[1].col_span = ($scope.tiles[1].col_span == "1" ? "2" : "1"); //rowspan to 2 
        } else {
            $scope.tiles[1].col_span = ($scope.tiles[1].col_span == "1" ? "3" : "1"); //just colspan
            $scope.tiles[1].row_span = "1"; //not needed actually
        }

        $scope.tiles[1].col_span_xs = ($scope.tiles[1].col_span_xs == "1" ? "2" : "1");
        $scope.tiles[1].row_span_xs = ($scope.tiles[1].row_span_xs == "1" ? "2" : "1");

        $scope.tiles[0].col_span = ($scope.tiles[1].col_span == "3" ? "1" : "2"); //doesnt affect 600 to 1024 case

        if ($scope.tiles[1].showDetails && $mdMedia('min-width: 1216px'))
            $scope.tile1_text_size = "16px";
        else
            $scope.tile1_text_size = "13px";

        console.log("tiles[1]: " + $scope.tiles[1].showDetails);
    }

    $scope.tiles[2].click = function () {
        $scope.tiles[2].showDetails = !$scope.tiles[2].showDetails;
        console.log("tiles[2]: " + $scope.tiles[2].showDetails);

        $scope.tiles[2].col_span = ($scope.tiles[2].col_span == "1" ? "2" : "1");
        $scope.tiles[2].col_span_xs = ($scope.tiles[2].col_span_xs == "1" ? "2" : "1");

        if ($scope.tiles[2].showDetails && $mdMedia('max-width: 1111px'))
            $scope.tile2_text_size = "13px";
        else
            $scope.tile2_text_size = "16px";

        if (!$scope.tiles[1].showDetails) //only if tile 1 hidden , touch cell 0 
            $scope.tiles[0].col_span = ($scope.tiles[2].col_span == "2" ? "1" : "2");
    }


    $scope.tiles[3].click = function () {

        if ($scope.tiles[3].showDetails) {
            updateSocialButtons(false); //hide buttons then section
            setTimeout(function () {
                $scope.tiles[3].showDetails = false;
                $scope.$apply();
            }, 300);
        } else {
            $scope.tiles[3].showDetails = true; //show then load button
            updateSocialButtons(true);
        }
        // $scope.tiles[3].showDetails = !$scope.tiles[3].showDetails;
        // updateSocialButtons($scope.tiles[3].showDetails);
        console.log("tiles[3]: " + $scope.tiles[3].showDetails);
    }

    $scope.tiles[4].click = function () {
        $scope.tiles[4].showDetails = !$scope.tiles[4].showDetails;
        console.log("tiles[4]: " + $scope.tiles[4].showDetails);
        if ($scope.tiles[4].showDetails) {
            $scope.tiles[4].row_span = "2";
            $scope.tiles[4].row_span_xs = "2";
            $scope.tiles[4].col_span = "3";
            $scope.resume_text = "Tap Here to minimize";
        } else {
            $scope.tiles[4].row_span = "1";
            $scope.tiles[4].row_span_xs = "1";
            $scope.tiles[4].col_span = "2";
            $scope.resume_text = "resume";
        }

    }

    $scope.tiles[5].click = function () {
        $scope.tiles[5].showDetails = !$scope.tiles[5].showDetails;
        console.log("tiles[5]: " + $scope.tiles[5].showDetails);

        if ($scope.tiles[5].showDetails) {
            $scope.tiles[5].col_span = "2";
            $scope.tiles[5].col_span_xs = "2";
        } else {
            $scope.tiles[5].col_span = "1";
            $scope.tiles[5].col_span_xs = "1";
        }

        if (!$scope.tiles[4].showDetails) //only if tile 4 hidden , touch cell 4
            $scope.tiles[4].col_span = ($scope.tiles[5].col_span == "2" ? "1" : "2");


        if ($scope.tiles[5].showDetails && $mdMedia('min-width: 1216px')) {
            $scope.tile5_text_size = "16px"
            // console.log("16");
        } else if ($scope.tiles[5].showDetails && $mdMedia('min-width: 960px')) {
            $scope.tile5_text_size = "14px"
            // console.log("14");
        } else {
            $scope.tile5_text_size = "12px"
            // console.log("12");
        }
    }

    $scope.tiles[6].click = function () {
        $scope.tiles[6].showDetails = !$scope.tiles[6].showDetails;
        console.log("tiles[6]: " + $scope.tiles[6].showDetails);

        $scope.tiles[6].col_span = ($scope.tiles[6].col_span === "2" ? "1" : "2");
        $scope.tiles[6].col_span_xs = ($scope.tiles[6].col_span_xs === "2" ? "1" : "2");

        if ($scope.tiles[6].showDetails && $mdMedia('min-width: 1200px')) {
            $scope.tile6_text_size = "15px"
            $scope.tile6_padding = "5px"
        } else if ($scope.tiles[6].showDetails && $mdMedia('min-width: 960px')) {
            $scope.tile6_text_size = "12px"
            $scope.tile6_padding = "1px"
        } else {
            $scope.tile6_text_size = "12px"
            $scope.tile6_padding = "1px"
        }
        reset_tile8();
    }

    $scope.tiles[7].col_span_xs = "2"
    $scope.table4Layout = "auto"
    $scope.tiles[7].click = function () {
        $scope.tiles[7].showDetails = !$scope.tiles[7].showDetails;
        console.log("tiles[7]: " + $scope.tiles[7].showDetails);

        $scope.tiles[7].col_span = ($scope.tiles[7].col_span === "3" ? "1" : "3");

        $scope.tiles[7].row_span_xs = ($scope.tiles[7].row_span_xs === "2" ? "1" : "2");

        if (!$scope.tiles[7].showDetails) {
            reset_project_section();
        }
        if ($mdMedia('max-width: 760px')) {
            $scope.table4Layout = "fixed";
        }
        reset_tile8();
    }

    function reset_tile8() {
        if ($scope.tiles[7].col_span === "3" || $scope.tiles[6].col_span === "2") {
            $scope.tiles[8].col_span = "1"
        } else {
            $scope.tiles[8].col_span = "2"
        }
    }

    $scope.tiles[8].click = function () {
        $scope.tiles[8].showDetails = !$scope.tiles[8].showDetails;
        console.log("tiles[8]: " + $scope.tiles[8].showDetails);
        // $scope.row_source = "1";
        if ($scope.tiles[8].showDetails) {
            // 
        } else {
            // 
        }
    }
    $scope.tiles[9].click = function () {
        $scope.tiles[9].showDetails = !$scope.tiles[9].showDetails;
        console.log("tiles[9]: " + $scope.tiles[9].showDetails);

        // $scope.row_source = "1";
        if ($scope.tiles[9].showDetails) {
            $scope.tiles[9].col_span = "2"
        } else {
            // 
        }
    }

    $scope.tiles[10].click = function () {
        $scope.tiles[10].showDetails = !$scope.tiles[10].showDetails;
        console.log("tiles[10]: " + $scope.tiles[10].showDetails);
        $scope.tiles[10].col_span_xs = ($scope.tiles[10].col_span_xs === "2" ? "1" : "2");
        $scope.tiles[10].col_span = ($scope.tiles[10].col_span === "2" ? "1" : "2")

        if (!$scope.tiles[9].showDetails && $scope.tiles[10].showDetails) {
            //touch 9th only if 9th hidden and 10th being shown
            $scope.tiles[9].col_span = "1"
        } else {
            $scope.tiles[9].col_span = "2"
        }
    }

    $scope.tiles[11].click = function () {
        $scope.tiles[11].showDetails = !$scope.tiles[11].showDetails;
        console.log("tiles[11]: " + $scope.tiles[11].showDetails);
        // $scope.row_source = "1";
        if ($scope.tiles[11].showDetails) {
            // 
        } else {
            // 
        }

    }

    //HELPERS
    //social_
    $scope.fb = function () {
        console.log("fb");
        $window.open('https://www.facebook.com/aishwat.singh', '_blank');
    }
    $scope.gmail = function () {
        console.log("gmail");
        $window.open("mailto:aishwat.singh@gmail.com?subject=Hey!")
    }
    $scope.g_plus = function () {
        console.log("g_plus");
        $window.open("https://plus.google.com/u/0/110630046719384416657");
    }
    $scope.linkedin = function () {
        console.log("linkedin");
        $window.open("https://in.linkedin.com/in/aishwat")
    }
    $scope.skype = function () {
        console.log("skype");
        Skype.tryAnalyzeSkypeUri('chat', '0');
        $window.open("skype:aishwat.singh?chat", "_self")
    }
    $scope.phone = function () {
        console.log("phone");
        $mdToast.show(
            $mdToast.simple()
                .textContent('+91-9535373749')
                .hideDelay(3000)
        );
    }


    function updateSocialButtons(val) {
        var timeout = 50;
        setTimeout(function () {
            $scope.show_fb = val;
            $scope.$apply();
            // console.log($scope.show_fb);
        }, timeout)
        setTimeout(function () {
            $scope.show_gmail = val;
            $scope.$apply();
            // console.log($scope.show_gmail);
        }, timeout * 2)
        setTimeout(function () {
            $scope.show_g_plus = val;
            $scope.$apply();
            // console.log($scope.show_g_plus);
        }, timeout * 3)
        setTimeout(function () {
            $scope.show_linkedin = val;
            $scope.$apply();
            // console.log($scope.show_linkedin);
        }, timeout * 4)
        setTimeout(function () {
            $scope.show_skype = val;
            $scope.$apply();
            // console.log($scope.show_skype);
        }, timeout * 5)
        setTimeout(function () {
            $scope.show_phone = val;
            $scope.$apply();
            // console.log($scope.show_phone);
        }, timeout * 6)
    }

    //
    //Resume_
    $scope.content = "assets/cv.pdf";
    // $http.get('/cv.pdf', {
    //         responseType: 'arraybuffer'
    //     })
    //     .success(function(response) {
    //         var file = new Blob([(response)], {
    //             type: 'application/pdf'
    //         });
    //         var fileURL = URL.createObjectURL(file);
    //         console.log(fileURL);
    //         $scope.content = $sce.trustAsResourceUrl(fileURL);
    //     });
    //Project_
    function reset_project_section() {
        $scope.tiles[7].row_span = "1";
        $scope.tiles[7].col_span = "1";
        $scope.showProjectDetails = [];
        $scope.title_icon = [];

        for (i = 0; i < $scope.project_data.length; i++) {
            $scope.showProjectDetails.push(false);
            $scope.title_icon.push("down");
        }
    }

    // $scope.showProjectDetails[0]=true;
    $scope.toggleProjectDetails = function (index) {
        //reset all leaving index one
        for (i = 0; i < $scope.project_data.length; i++) {
            if (i !== index) {
                $scope.showProjectDetails[i] = false;
                $scope.title_icon[i] = "down";
            }
        }
        //toggle index
        $scope.showProjectDetails[index] = !$scope.showProjectDetails[index];
        $scope.title_icon[index] = $scope.title_icon[index] === "down" ? "up" : "down";

        console.log("index: " + index + " " + $scope.showProjectDetails[index]);

        if ($mdMedia('max-width: 1435px')) {
            $scope.tiles[7].row_span = $scope.showProjectDetails[index] ? "2" : "1";
        }
    }
    //Feedback
    $scope.feedback_progress = 0;
    var interval;
    $scope.feedInProgress = false;
    $scope.feedback = function () {
        console.log("feedback");
        $scope.user.time = Date.now();
        console.log($scope.user);
        $scope.feedInProgress = true;
        Feedback.save($scope.user, feedbackSuccess, feedbackError);
        interval = setInterval(function () {
            $scope.feedback_progress += 10;
            $scope.$apply();
        }, 1000);
    }

    function feedbackSuccess() {
        //check status code
        // if success
        clearInterval(interval);
        $scope.user = {
            name: '',
            email: '',
            text: '',
            time: ''
        };
        $scope.feedback_progress = 0;
        $scope.feedInProgress = false;
        setTimeout(function () {
            $scope.$apply()
        }, 10)
        $mdToast.show(
            $mdToast.simple()
                .textContent("Thanks!! Your Feedback/Suggestion Is Saved :)")
                .hideDelay(2500)
        );
        $scope.tiles[10].click();
    }

    function feedbackError() {
        //let user be set as it is
        clearInterval(interval);
        $scope.feedback_progress = 0;
        $scope.feedInProgress = false;
        $mdToast.show(
            $mdToast.simple()
                .textContent("Sorry!! Something Went Wrong :'(")
                .hideDelay(2500)
        );
    }

    //unknown
    $scope.tile11_btn1_text = "Expand All"
    $scope.tile11_warn = "";
    $scope.show_hide_all = function () {
        if ($scope.tile11_btn1_text === "Expand All")
            expand();
        else
            shrink();
        //disable for 1 min
        setTimeout(function () {
            $scope.tile11_btn1_text = ($scope.tile11_btn1_text === "Expand All" ? "Shrink All" : "Expand All")
            $scope.tile11_warn = ($scope.tile11_warn === "" ? "md-warn" : "");
            $scope.$apply();
        }, 800);

    }

    function shrink() {
        for (i = 0; i < 11; i++) {
            update_tiles(i);
        }
    }

    function update_tiles(i) {
        var tmp = !((i % 9) % 4) ? "2" : "1";
        $scope.tiles[i].row_span = "1";
        $scope.tiles[i].col_span = tmp;
        $scope.tiles[i].row_span_xs = "1";
        $scope.tiles[i].col_span_xs = (i === 3) ? "2" : tmp;
        $scope.tiles[i].showDetails = false;
    }

    function expand() {
        shrink();
        setTimeout(function () {
            for (j = 0; j < 11; j++) {
                clickBtn(j)
            }
        }, 500)
    }

    function clickBtn(j) {
        $scope.tiles[j].click();
    }

    $scope.like_icon = "heart"
    $scope.tile11_btn2_text = "LIKE"
    $scope.likeInProgress = false
    $scope.toggleLike = function () {
        LikeDislike.send($scope.tile11_btn2_text, likeSuccess, likeError);
        $scope.likeInProgress = true;
    }

    function likeSuccess() {
        console.log("success");
        setTimeout(function () {
            $scope.tile11_btn2_text = $scope.tile11_btn2_text == "LIKE" ? "DISLIKE" : "LIKE";
            $scope.like_icon = $scope.tile11_btn2_text == "DISLIKE" ? "heart-broken" : "heart";
            $scope.likeInProgress = false;
            $scope.$apply();

            if ($scope.tile11_btn2_text == "DISLIKE") {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent("Thanks! Really Appreciate It")
                        .hideDelay(1000));
            } else {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent("Any Feedback Suggestions For Improvements ?")
                        .hideDelay(1000));
            }
        }, 1000);
    }

    function likeError() {
        console.log("error");
        $scope.likeInProgress = false;
        $mdToast.show(
            $mdToast.simple()
                .textContent("Sorry Something Went Wrong :'(")
                .hideDelay(1000));
    }

}
