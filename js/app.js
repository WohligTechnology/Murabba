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
        when('/createabout', {
            templateUrl: 'views/template.html',
            controller: 'createabout'
        }).
        when('/editabout/:id', {
            templateUrl: 'views/template.html',
            controller: 'editabout'
        }).
        when('/client', {
            templateUrl: 'views/template.html',
            controller: 'client'
        }).
        when('/createclient', {
            templateUrl: 'views/template.html',
            controller: 'createclient'
        }).
        when('/editclient/:id', {
            templateUrl: 'views/template.html',
            controller: 'editclient'
        }).
        when('/contactus', {
            templateUrl: 'views/template.html',
            controller: 'contactus'
        }).
        when('/createcontactus', {
            templateUrl: 'views/template.html',
            controller: 'createcontactus'
        }).
        when('/editcontactus/:id', {
            templateUrl: 'views/template.html',
            controller: 'editcontactus'
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
firstapp.filter('uploadpath', function () {
    return function (input) {
        if (input && input != "")
            return adminurl + "home/getimage?file=" + input;
        else
            return "";
    };
});