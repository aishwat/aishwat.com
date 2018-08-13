var app = angular.module("materialApp", ['ngMaterial'])
    .config(function($mdThemingProvider, $mdIconProvider) {
        $mdIconProvider
            .defaultIconSet("../assets/svg/avatars.svg", 128)
            .icon("share", "../assets/svg/share.svg", 24)
            .icon("google_plus", "../assets/svg/google_plus.svg", 512)
            .icon("hangouts", "../assets/svg/hangouts.svg", 512)
            .icon("twitter", "../assets/svg/twitter.svg", 512)
            .icon("phone", "../assets/svg/phone.svg", 512)
            .icon("nerd9", "../assets/svg/nerd9.svg", 512)
            .icon("about_me", "../assets/svg/about_me.svg", 512)
            .icon("things_i_love", "../assets/svg/things_i_love.svg", 512)
            .icon("fb", "../assets/svg/fb.svg", 512)
            .icon("g+", "../assets/svg/g+.svg", 512)
            .icon("gmail", "../assets/svg/gmail.svg", 512)
            .icon("skype", "../assets/svg/skype.svg", 512)
            .icon("linkedin", "../assets/svg/linkedin.svg", 512)
            .icon("git", "../assets/svg/git.svg", 512)
            .icon("resume", "../assets/svg/resume1.svg", 512)
            .icon("fun", "../assets/svg/fun.svg", 128)
            .icon("fun1", "../assets/svg/fun1.svg", 128)
            .icon("inprogress", "../assets/svg/inprogress.svg", 512)
            .icon("inprogress1", "../assets/svg/inprogress1.svg", 512)
            .icon("projects", "../assets/svg/projects.svg", 512)
            .icon("projects1", "../assets/svg/projects1.svg", 512)
            .icon("source", "../assets/svg/source.svg", 512)
            .icon("batman", "../assets/svg/batman.svg", 512)
            .icon("social", "../assets/svg/social.svg", 512)
            .icon("down", "../assets/svg/down.svg", 512)
            .icon("up", "../assets/svg/up.svg", 512)
            .icon("student", "../assets/svg/student.svg", 512)
            .icon("work1", "../assets/svg/work1.svg", 512)
            .icon("work2", "../assets/svg/work2.svg", 512)
            .icon("work3", "../assets/svg/work3.svg", 512)
            .icon("r1", "../assets/svg/r1.svg", 512)
            .icon("r2", "../assets/svg/r2.svg", 512)
            .icon("r3", "../assets/svg/r3.svg", 512)
            .icon("feedback", "../assets/svg/feedback.svg", 512)
            .icon("ufo", "../assets/svg/ufo.svg", 512)
            .icon("heart", "../assets/svg/heart.svg", 512)
            .icon("heart-broken", "../assets/svg/heart-broken.svg", 512);


    });
    // .config(function($mdThemingProvider) {
    //     // Configure a dark theme with primary foreground yellow
    //     $mdThemingProvider.theme('docs-dark', 'default')
    //         .primaryPalette('yellow')
    //         .accentPalette('orange')
    //         // .dark();
    // });
