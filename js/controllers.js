var uploadres = [];
var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ngDialog', 'ngMaterial', 'ui.bootstrap', 'highcharts-ng', 'ngMessages', 'angular-momentjs', 'angularFileUpload']);
//window.uploadUrl = 'http://104.197.23.70/user/uploadfile';
window.uploadUrl = 'http://localhost:1337/home/gridfs';
phonecatControllers.controller('dashboard', function ($scope, TemplateService, NavigationService, $timeout, $location, $moment) {
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

phonecatControllers.controller('about', function ($scope, TemplateService, NavigationService, ngDialog, $location) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("about");
    TemplateService.title = $scope.menutitle;
    TemplateService.content = "views/about.html";
    $scope.about = [];
    $scope.pagedata = {};
    $scope.pagedata.page = 1;
    $scope.pagedata.limit = "10";
    $scope.pagedata.search = "";
    $scope.number = 100;

    $scope.reload = function (pagedata) {
        $scope.pagedata = pagedata;
        console.log($scope.pagedata);
        NavigationService.getlimitedAbout(pagedata, function (data, status) {
            console.log(data);
            $scope.about = data.data;
            $scope.pages = [];
            var newclass = "";
            for (var i = 1; i <= data.totalpages; i++) {
                if (pagedata.page == i) {
                    newclass = "active";
                } else {
                    newclass = "";
                }
                $scope.pages.push({
                    pageno: i,
                    class: newclass
                });
            }
        });
    }
    $scope.reload($scope.pagedata);

    //DELETE about
    $scope.confDelete = function () {
        NavigationService.deleteAbout(function (data, status) {
            console.log(data);
            ngDialog.close();
            window.location.reload();

        });
    }

    //OPENDELETE DIALOG BOX
    $scope.deletefun = function (id) {
        $.jStorage.set("deleteabout", id);
        ngDialog.open({
            template: 'views/delete.html',
            closeByEscape: false,
            controller: 'about',
            closeByDocument: false
        });
    }
});

phonecatControllers.controller('createabout', function ($scope, TemplateService, NavigationService, $timeout, $location) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("createabout");
    TemplateService.content = "views/createabout.html";
    TemplateService.title = $scope.menutitle;
    $scope.about = {};
    $scope.submitForm = function () {
        console.log($scope.about);
        NavigationService.createAbout($scope.about, function (data, status) {
            console.log(data);
            $location.url("/about");
        });
    }

});
phonecatControllers.controller('editabout', function ($scope, TemplateService, NavigationService, $timeout, $location, $routeParams) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("editabout");
    TemplateService.content = "views/editabout.html";
    TemplateService.title = $scope.menutitle;
    $scope.aboutid = $routeParams.id;
    $scope.about = {};
    NavigationService.getOneAbout($routeParams.id, function (data, status) {
        console.log(data);
        $scope.about = data;
    });
    $scope.submitForm = function () {
        $scope.about.id = $scope.aboutid;
        console.log($scope.about);
        NavigationService.editAbout($scope.about, function (data, status) {
            console.log(data);
            $location.url("/about");
        });
    }
});

phonecatControllers.controller('client', function ($scope, TemplateService, NavigationService, $timeout, $location,ngDialog) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("client");
    TemplateService.content = "views/client.html";
    TemplateService.title = $scope.menutitle;
    $scope.client = [];
    $scope.pagedata = {};
    $scope.pagedata.page = 1;
    $scope.pagedata.limit = "10";
    $scope.pagedata.search = "";
    $scope.number = 100;

    $scope.reload = function (pagedata) {
        $scope.pagedata = pagedata;
        console.log($scope.pagedata);
        NavigationService.getlimitedClient(pagedata, function (data, status) {
            console.log(data);
            $scope.client = data.data;
            $scope.pages = [];
            var newclass = "";
            for (var i = 1; i <= data.totalpages; i++) {
                if (pagedata.page == i) {
                    newclass = "active";
                } else {
                    newclass = "";
                }
                $scope.pages.push({
                    pageno: i,
                    class: newclass
                });
            }
        });
    }
    $scope.reload($scope.pagedata);

    //DELETE client
    $scope.confDelete = function () {
        NavigationService.deleteClient(function (data, status) {
            console.log(data);
            ngDialog.close();
            window.location.reload();

        });
    }

    //OPENDELETE DIALOG BOX
    $scope.deletefun = function (id) {
        $.jStorage.set("deleteclient", id);
        ngDialog.open({
            template: 'views/delete.html',
            closeByEscape: false,
            controller: 'client',
            closeByDocument: false
        });
    }
});
phonecatControllers.controller('createclient', function ($scope, TemplateService, NavigationService, $timeout, $location, $upload) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("createclient");
    TemplateService.content = "views/createclient.html";
    TemplateService.title = $scope.menutitle;
    $scope.client = {};

    $scope.removeimage = function () {
        $scope.client.image = "";
    };
    //imageupload
    var imagejstupld = "";
    $scope.client.image = "";
    $scope.usingFlash = FileAPI && FileAPI.upload != null;
    $scope.fileReaderSupported = window.FileReader != null && (window.FileAPI == null || FileAPI.html5 != false);
    $scope.uploadRightAway = true;
    $scope.changeAngularVersion = function () {
        window.location.hash = $scope.angularVersion;
        window.location.reload(true);
    };
    $scope.hasUploader = function (index) {
        return $scope.upload[index] != null;
    };
    $scope.abort = function (index) {
        $scope.upload[index].abort();
        $scope.upload[index] = null;
    };
    $scope.angularVersion = window.location.hash.length > 1 ? (window.location.hash.indexOf('/') === 1 ?
        window.location.hash.substring(2) : window.location.hash.substring(1)) : '1.2.20';
    $scope.onFileSelect = function ($files) {
        $scope.selectedFiles = [];
        $scope.progress = [];
        console.log($files);
        if ($scope.upload && $scope.upload.length > 0) {
            for (var i = 0; i < $scope.upload.length; i++) {
                if ($scope.upload[i] != null) {
                    $scope.upload[i].abort();
                }
            }
        }
        $scope.upload = [];
        $scope.uploadResult = uploadres;
        $scope.selectedFiles = $files;
        $scope.dataUrls = [];
        for (var i = 0; i < $files.length; i++) {
            var $file = $files[i];
            if ($scope.fileReaderSupported && $file.type.indexOf('image') > -1) {
                var fileReader = new FileReader();
                fileReader.readAsDataURL($files[i]);
                var loadFile = function (fileReader, index) {
                    fileReader.onload = function (e) {
                        $timeout(function () {
                            $scope.dataUrls[index] = e.target.result;
                        });
                    }
                }(fileReader, i);
            }
            $scope.progress[i] = -1;
            if ($scope.uploadRightAway) {
                $scope.start(i);
            }
        }
    };

    $scope.start = function (index) {
        $scope.progress[index] = 0;
        $scope.errorMsg = null;
        console.log($scope.howToSend = 1);
        if ($scope.howToSend == 1) {
            console.log($scope.selectedFiles);
            $scope.upload[index] = $upload.upload({
                url: uploadUrl,
                method: $scope.httpMethod,
                headers: {
                    'Content-Type': 'Content-Type'
                },
                data: {
                    myModel: $scope.myModel
                },
                file: $scope.selectedFiles[index],
                fileFormDataName: 'file'
            });
            $scope.upload[index].then(function (response) {
                $timeout(function () {
                    $scope.uploadResult.push(response.data);
                    //                    console.log(response.data);
                    imagejstupld = response.data;
                    if (imagejstupld != "") {
                        console.log(imagejstupld);
                        $scope.client.image = imagejstupld;
                    }
                });
            }, function (response) {
                if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                $scope.progress[index] = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
            $scope.upload[index].xhr(function (xhr) {});
        } else {
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
                $scope.upload[index] = $upload.http({
                    url: uploadUrl,
                    headers: {
                        'Content-Type': $scope.selectedFiles[index].type
                    },
                    data: e.target.result
                }).then(function (response) {
                    $scope.uploadResult.push(response.data);
                }, function (response) {
                    if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    $scope.progress[index] = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                });
            }
            fileReader.readAsArrayBuffer($scope.selectedFiles[index]);
        }
    };

    $scope.dragOverClass = function ($event) {
        var items = $event.dataTransfer.items;
        var hasFile = false;
        if (items != null) {
            for (var i = 0; i < items.length; i++) {
                if (items[i].kind == 'file') {
                    hasFile = true;
                    break;
                }
            }
        } else {
            hasFile = true;
        }
        return hasFile ? "dragover" : "dragover-err";
    };
    ////
    $scope.submitForm = function () {
        console.log($scope.client);
        NavigationService.createClient($scope.client, function (data, status) {
            console.log(data);
            $location.url("/client");
        });
    }

});

phonecatControllers.controller('editclient', function ($scope, TemplateService, NavigationService, $timeout, $location, $upload, $routeParams) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("editclient");
    TemplateService.content = "views/editclient.html";
    TemplateService.title = $scope.menutitle;
    $scope.client = {};
    $scope.clientid = $routeParams.id;
    NavigationService.getOneClient($routeParams.id, function (data, status) {
        console.log(data);
        $scope.client = data;
    });
    $scope.removeimage = function () {
        $scope.client.image = "";
    };
    //imageupload
    var imagejstupld = "";
    $scope.client.image = "";
    $scope.usingFlash = FileAPI && FileAPI.upload != null;
    $scope.fileReaderSupported = window.FileReader != null && (window.FileAPI == null || FileAPI.html5 != false);
    $scope.uploadRightAway = true;
    $scope.changeAngularVersion = function () {
        window.location.hash = $scope.angularVersion;
        window.location.reload(true);
    };
    $scope.hasUploader = function (index) {
        return $scope.upload[index] != null;
    };
    $scope.abort = function (index) {
        $scope.upload[index].abort();
        $scope.upload[index] = null;
    };
    $scope.angularVersion = window.location.hash.length > 1 ? (window.location.hash.indexOf('/') === 1 ?
        window.location.hash.substring(2) : window.location.hash.substring(1)) : '1.2.20';
    $scope.onFileSelect = function ($files) {
        $scope.selectedFiles = [];
        $scope.progress = [];
        console.log($files);
        if ($scope.upload && $scope.upload.length > 0) {
            for (var i = 0; i < $scope.upload.length; i++) {
                if ($scope.upload[i] != null) {
                    $scope.upload[i].abort();
                }
            }
        }
        $scope.upload = [];
        $scope.uploadResult = uploadres;
        $scope.selectedFiles = $files;
        $scope.dataUrls = [];
        for (var i = 0; i < $files.length; i++) {
            var $file = $files[i];
            if ($scope.fileReaderSupported && $file.type.indexOf('image') > -1) {
                var fileReader = new FileReader();
                fileReader.readAsDataURL($files[i]);
                var loadFile = function (fileReader, index) {
                    fileReader.onload = function (e) {
                        $timeout(function () {
                            $scope.dataUrls[index] = e.target.result;
                        });
                    }
                }(fileReader, i);
            }
            $scope.progress[i] = -1;
            if ($scope.uploadRightAway) {
                $scope.start(i);
            }
        }
    };

    $scope.start = function (index) {
        $scope.progress[index] = 0;
        $scope.errorMsg = null;
        console.log($scope.howToSend = 1);
        if ($scope.howToSend == 1) {
            console.log($scope.selectedFiles);
            $scope.upload[index] = $upload.upload({
                url: uploadUrl,
                method: $scope.httpMethod,
                headers: {
                    'Content-Type': 'Content-Type'
                },
                data: {
                    myModel: $scope.myModel
                },
                file: $scope.selectedFiles[index],
                fileFormDataName: 'file'
            });
            $scope.upload[index].then(function (response) {
                $timeout(function () {
                    $scope.uploadResult.push(response.data);
                    //                    console.log(response.data);
                    imagejstupld = response.data;
                    if (imagejstupld != "") {
                        console.log(imagejstupld);
                        $scope.client.image = imagejstupld;
                    }
                });
            }, function (response) {
                if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                $scope.progress[index] = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
            $scope.upload[index].xhr(function (xhr) {});
        } else {
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
                $scope.upload[index] = $upload.http({
                    url: uploadUrl,
                    headers: {
                        'Content-Type': $scope.selectedFiles[index].type
                    },
                    data: e.target.result
                }).then(function (response) {
                    $scope.uploadResult.push(response.data);
                }, function (response) {
                    if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    $scope.progress[index] = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                });
            }
            fileReader.readAsArrayBuffer($scope.selectedFiles[index]);
        }
    };

    $scope.dragOverClass = function ($event) {
        var items = $event.dataTransfer.items;
        var hasFile = false;
        if (items != null) {
            for (var i = 0; i < items.length; i++) {
                if (items[i].kind == 'file') {
                    hasFile = true;
                    break;
                }
            }
        } else {
            hasFile = true;
        }
        return hasFile ? "dragover" : "dragover-err";
    };
    ////
    $scope.submitForm = function () {
        console.log($scope.client);
        $scope.client.id = $scope.clientid;
        NavigationService.editClient($scope.client, function (data, status) {
            console.log(data);
            $location.url("/client");
        });
    }

});

phonecatControllers.controller('contactus', function ($scope, TemplateService, NavigationService, ngDialog, $location) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("contactus");
    TemplateService.title = $scope.menutitle;
    TemplateService.content = "views/contactus.html";
    $scope.contactus = [];
    $scope.pagedata = {};
    $scope.pagedata.page = 1;
    $scope.pagedata.limit = "10";
    $scope.pagedata.search = "";
    $scope.number = 100;

    $scope.reload = function (pagedata) {
        $scope.pagedata = pagedata;
        console.log($scope.pagedata);
        NavigationService.getlimitedContactus(pagedata, function (data, status) {
            console.log(data);
            $scope.contactus = data.data;
            $scope.pages = [];
            var newclass = "";
            for (var i = 1; i <= data.totalpages; i++) {
                if (pagedata.page == i) {
                    newclass = "active";
                } else {
                    newclass = "";
                }
                $scope.pages.push({
                    pageno: i,
                    class: newclass
                });
            }
        });
    }
    $scope.reload($scope.pagedata);

    //DELETE contactus
    $scope.confDelete = function () {
        NavigationService.deleteContactus(function (data, status) {
            console.log(data);
            ngDialog.close();
            window.location.reload();

        });
    }

    //OPENDELETE DIALOG BOX
    $scope.deletefun = function (id) {
        $.jStorage.set("deletecontactus", id);
        ngDialog.open({
            template: 'views/delete.html',
            closeByEscape: false,
            controller: 'contactus',
            closeByDocument: false
        });
    }
});

phonecatControllers.controller('createcontactus', function ($scope, TemplateService, NavigationService, $timeout, $location) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("createcontactus");
    TemplateService.content = "views/createcontactus.html";
    TemplateService.title = $scope.menutitle;
    $scope.contactus = {};
    $scope.submitForm = function () {
        console.log($scope.contactus);
        NavigationService.createContactus($scope.contactus, function (data, status) {
            console.log(data);
            $location.url("/contactus");
        });
    }

});
phonecatControllers.controller('editcontactus', function ($scope, TemplateService, NavigationService, $timeout, $location, $routeParams) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("editcontactus");
    TemplateService.content = "views/editcontactus.html";
    TemplateService.title = $scope.menutitle;
    $scope.contactusid = $routeParams.id;
    $scope.contactus = {};
    NavigationService.getOneContactus($routeParams.id, function (data, status) {
        console.log(data);
        $scope.contactus = data;
    });
    $scope.submitForm = function () {
        $scope.contactus.id = $scope.contactusid;
        console.log($scope.contactus);
        NavigationService.editContactus($scope.contactus, function (data, status) {
            console.log(data);
            $location.url("/contactus");
        });
    }
});

phonecatControllers.controller('home', function ($scope, TemplateService, NavigationService, $timeout, $location) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("home");
    TemplateService.title = $scope.menutitle;
    TemplateService.content = "views/home.html";
});

phonecatControllers.controller('portfolio', function ($scope, TemplateService, NavigationService, $timeout, $location) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("portfolio");
    TemplateService.title = $scope.menutitle;
    TemplateService.content = "views/portfolio.html";
});

phonecatControllers.controller('product', function ($scope, TemplateService, NavigationService, $timeout, $location) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("product");
    TemplateService.title = $scope.menutitle;
    TemplateService.content = "views/product.html";
});

phonecatControllers.controller('team', function ($scope, TemplateService, NavigationService, $timeout, $location) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("team");
    TemplateService.title = $scope.menutitle;
    TemplateService.content = "views/team.html";
});

phonecatControllers.controller('testimonial', function ($scope, TemplateService, NavigationService, $timeout, $location) {
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