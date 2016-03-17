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
  .otherwise({redirectTo: "/"});
});
