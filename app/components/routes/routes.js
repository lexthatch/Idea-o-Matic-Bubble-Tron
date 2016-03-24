/*global angular */
var app = angular.module("app", ["ngRoute", "ngAnimate"]);

app.config(function ($routeProvider) {
  $routeProvider
  .when("/", {
    controller: "SimpleController",
    templateUrl: "View1.html"
  })
  .when("/view2", {
    controller: "SimpleController",
    templateUrl: "View2.html"
  })
  .when("/view3", {
    controller: "SimpleController",
    templateUrl: "View3.html"
  })
  .when("/view4", {
    controller: "SimpleController",
    templateUrl: "View4.html"
  })
  .when("/view5", {
    controller: "SimpleController",
    templateUrl: "View5.html"
  })
  .otherwise({redirectTo: "/"});
});
