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
        when('/createhome', {
            templateUrl: 'views/template.html',
            controller: 'createhome'
        }).
        when('/edithome/:id', {
            templateUrl: 'views/template.html',
            controller: 'edithome'
        }).
        when('/portfolio', {
            templateUrl: 'views/template.html',
            controller: 'portfolio'
        }).
        when('/createportfolio', {
            templateUrl: 'views/template.html',
            controller: 'createportfolio'
        }).
        when('/editportfolio/:id', {
            templateUrl: 'views/template.html',
            controller: 'editportfolio'
        }).
        when('/product', {
            templateUrl: 'views/template.html',
            controller: 'product'
        }).
        when('/createproduct', {
            templateUrl: 'views/template.html',
            controller: 'createproduct'
        }).
        when('/editproduct/:id', {
            templateUrl: 'views/template.html',
            controller: 'editproduct'
        }).
        when('/team', {
            templateUrl: 'views/template.html',
            controller: 'team'
        }).
        when('/createteam', {
            templateUrl: 'views/template.html',
            controller: 'createteam'
        }).
        when('/editteam/:id', {
            templateUrl: 'views/template.html',
            controller: 'editteam'
        }).
        when('/testimonial', {
            templateUrl: 'views/template.html',
            controller: 'testimonial'
        }).
        when('/createtestimonial', {
            templateUrl: 'views/template.html',
            controller: 'createtestimonial'
        }).
        when('/edittestimonial/:id', {
            templateUrl: 'views/template.html',
            controller: 'edittestimonial'
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