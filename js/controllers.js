var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ngMaterial', 'ui.bootstrap', 'highcharts-ng', 'ngMessages', 'angular-momentjs']);

phonecatControllers.controller('dashboard', function ($scope, TemplateService, NavigationService, $timeout, $moment) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("dashboard");
    TemplateService.title = $scope.menutitle;
    TemplateService.content = "views/dashboard.html";
    $scope.chartConfig = {
        options: {
            chart: {
                type: 'bar'
            }
        },
        series: [{
            data: [10, 15, 12, 8, 7]
        }],
        title: {
            text: 'Hello'
        },

        loading: false
    };
    $scope.pieChart = {
        options: {
            chart: {
                type: 'pie'
            }
        },
        title: {
            text: 'Browser market shares January, 2015 to May, 2015'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        series: [{
            name: "Brands",
            colorByPoint: true,
            data: [{
                name: "Microsoft Internet Explorer",
                y: 56.33
            }, {
                name: "Chrome",
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: "Firefox",
                y: 10.38
            }, {
                name: "Safari",
                y: 4.77
            }, {
                name: "Opera",
                y: 0.91
            }, {
                name: "Proprietary or Undetectable",
                y: 0.2
            }]
        }]
    };
});

phonecatControllers.controller('login', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService;
});

phonecatControllers.controller('about', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("about");
    TemplateService.title = $scope.menutitle;
    TemplateService.content = "views/about.html";
    $scope.about={};
    
});

phonecatControllers.controller('client', function ($scope, TemplateService, NavigationService, $timeout, $q, $log) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("client");
    TemplateService.content = "views/client.html";
    TemplateService.title = $scope.menutitle;
});

phonecatControllers.controller('contactus', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("contactus");
    TemplateService.title = $scope.menutitle;
    TemplateService.content = "views/contactus.html";
});

phonecatControllers.controller('home', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("home");
    TemplateService.title = $scope.menutitle;
    TemplateService.content = "views/home.html";
});

phonecatControllers.controller('portfolio', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("portfolio");
    TemplateService.title = $scope.menutitle;
    TemplateService.content = "views/portfolio.html";
});

phonecatControllers.controller('product', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("product");
    TemplateService.title = $scope.menutitle;
    TemplateService.content = "views/product.html";
});

phonecatControllers.controller('team', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("team");
    TemplateService.title = $scope.menutitle;
    TemplateService.content = "views/team.html";
});

phonecatControllers.controller('testimonial', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("testimonial");
    TemplateService.title = $scope.menutitle;
    TemplateService.content = "views/testimonial.html";
});

phonecatControllers.controller('headerctrl', function ($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.loginpage = function () {
        location.href = '#/login.html';
    };
});

phonecatControllers.controller('sidemenuCtrl', function ($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService;
    $scope.navigation = NavigationService.getNav();
    $scope.changeMenuShow = function (menu) {
        menu.show = !menu.show;
    };
});