/*global angular */
var app = angular.module("app", ["ngRoute", "ngAnimate", "firebase"]);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when("/", {
            controller: "appController",
            templateUrl: "/app/components/routes/main.html"
        })
        .when("/view1", {
            controller: "appController",
            templateUrl: "/app/components/routes/view1.html"
        })
        .when("/view2", {
            controller: "appController",
            templateUrl: "/app/components/routes/view2.html"
        })
        .when("/view3", {
            controller: "appController",
            templateUrl: "/app/components/routes/view3.html"
        })
        .when("/view4", {
            controller: "appController",
            templateUrl: "/app/components/routes/view4.html"
        })
        //   .when("/view5", {
        //     controller: "appController",
        //     templateUrl: "/app/components/routes/view2.html/view5.html"
        //   })
        .otherwise({ redirectTo: "/" });
});
