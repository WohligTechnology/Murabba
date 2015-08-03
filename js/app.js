// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ngRoute',
  'phonecatControllers',
  'templateservicemod',
    'navigationservice'
]);

firstapp.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/login', {
            templateUrl: 'views/login.html',
            controller: 'login'
        }).
        when('/dashboard', {
            templateUrl: 'views/template.html',
            controller: 'dashboard'
        }).
        when('/about', {
            templateUrl: 'views/template.html',
            controller: 'about'
        }).
        when('/client', {
            templateUrl: 'views/template.html',
            controller: 'client'
        }).
        when('/contactus', {
            templateUrl: 'views/template.html',
            controller: 'contactus'
        }).
        when('/home', {
            templateUrl: 'views/template.html',
            controller: 'home'
        }).
        when('/portfolio', {
            templateUrl: 'views/template.html',
            controller: 'portfolio'
        }).
        when('/product', {
            templateUrl: 'views/template.html',
            controller: 'product'
        }).
        when('/team', {
            templateUrl: 'views/template.html',
            controller: 'gridview'
        }).
        when('/testimonial', {
            templateUrl: 'views/template.html',
            controller: 'testimonial'
        }).
        otherwise({
            redirectTo: '/login'
        });
  }]);