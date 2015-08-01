var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ngMaterial', 'ui.bootstrap', 'highcharts-ng', 'ngMessages', 'angular-momentjs']);

phonecatControllers.controller('login', ['$scope', 'TemplateService', 'NavigationService',
  function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        TemplateService.list = 3;
  }]);

phonecatControllers.controller('user', ['$scope', 'TemplateService', 'NavigationService',
  function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("user");
        TemplateService.title = $scope.menutitle;
        TemplateService.content = "views/user.html";
        TemplateService.list = 1;

        //tables

        $scope.values = [
            {
                "firstName": "John",
                "lastName": "Doe",
                "email": "john@gmail.com",
                "facebook": "1"
                },
            {
                "firstName": "Anna",
                "lastName": "Smith",
                "email": "anna@gmail.com",
                "facebook": "2"
                },
            {
                "firstName": "Peter",
                "lastName": "Jones",
                "email": "peter@gmail.com",
                "facebook": "3"
                },
            {
                "firstName": "Peter",
                "lastName": "Jones",
                "email": "peter@gmail.com",
                "facebook": "4"
                },
            {
                "firstName": "Peter",
                "lastName": "Jones",
                "email": "peter@gmail.com",
                "facebook": "5"
                },
            {
                "firstName": "Peter",
                "lastName": "Jones",
                "email": "peter@gmail.com",
                "facebook": "6"
                },
            {
                "firstName": "Anna",
                "lastName": "Smith",
                "email": "anna@gmail.com",
                "facebook": "2"
                },
            {
                "firstName": "Peter",
                "lastName": "Jones",
                "email": "peter@gmail.com",
                "facebook": "3"
                },
            {
                "firstName": "Peter",
                "lastName": "Jones",
                "email": "peter@gmail.com",
                "facebook": "4"
                },
            {
                "firstName": "Peter",
                "lastName": "Jones",
                "email": "peter@gmail.com",
                "facebook": "5"
                }]
  }]);

phonecatControllers.controller('gridview', ['$scope', 'TemplateService', 'NavigationService',
  function ($scope, TemplateService, NavigationService, $timeout, $q, $log) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("girdview");
        TemplateService.content = "views/gridview.html";
        TemplateService.title = $scope.menutitle;

        //outo fill
        var self = this;
        self.simulateQuery = false;
        self.isDisabled = false;
        // list of `state` value/display objects
        self.states = loadAll();
        self.querySearch = querySearch;
        self.selectedItemChange = selectedItemChange;
        self.searchTextChange = searchTextChange;
        // ******************************
        // Internal methods
        // ******************************
        /**
         * Search for states... use $timeout to simulate
         * remote dataservice call.
         */
        function querySearch(query) {
            var results = query ? self.states.filter(createFilterFor(query)) : self.states,
                deferred;
            if (self.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () {
                    deferred.resolve(results);
                }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }

        function searchTextChange(text) {
            $log.info('Text changed to ' + text);
        }

        function selectedItemChange(item) {
                $log.info('Item changed to ' + JSON.stringify(item));
            }
            /**
             * Build `states` list of key/value pairs
             */
        function loadAll() {
                var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';
                return allStates.split(/, +/g).map(function (state) {
                    return {
                        value: state.toLowerCase(),
                        display: state
                    };
                });
            }
            /**
             * Create filter function for a query string
             */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };
        }
}]);

phonecatControllers.controller('dashboard',
    function ($scope, TemplateService, NavigationService, $timeout, $moment) {
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




phonecatControllers.controller('forms', ['$scope', 'TemplateService', 'NavigationService',
  function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("forms");
        TemplateService.title = $scope.menutitle;
        TemplateService.content = "views/forms.html";

        $scope.clearValue = function () {
            $scope.myModel = undefined;
        };
        $scope.states = [
            {
                category: 'Maharastra',
                name: 'Mumbai'
            },
            {
                category: 'Maharastra',
                name: 'Nagpur'
            },
            {
                category: 'Maharastra',
                name: 'Pune'
            },
            {
                category: 'Maharastra',
                name: 'Nasik'
            },
            {
                category: 'Maharastra',
                name: 'Thane'
            },
            {
                category: 'Telgana',
                name: 'Hyderabad'
            },
            {
                category: 'Telgana',
                name: 'Green Pepper'
            },
            {
                category: 'Gujrat',
                name: 'Ahmedabad'
            }
      ];


        $scope.data = {
            group1: 'Male',
        };

        $scope.project = {
            description: 'Nuclear Missile Defense System',
            rate: 500
        };
}]);

phonecatControllers.controller('headerctrl', ['$scope', 'TemplateService',
 function ($scope, TemplateService) {
        $scope.template = TemplateService;
        $scope.loginpage = function () {
            location.href = '#/login.html';
        };
  }])

phonecatControllers.controller('sidemenuCtrl',
    function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.navigation = NavigationService.getNav();

        $scope.changeMenuShow = function (menu) {
            menu.show = !menu.show;
        };





    });