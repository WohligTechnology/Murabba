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

phonecatControllers.controller('client', function ($scope, TemplateService, NavigationService, $timeout, $location, ngDialog) {
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

phonecatControllers.controller('home', function ($scope, TemplateService, NavigationService, $timeout, $location, ngDialog) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("home");
    TemplateService.content = "views/home.html";
    TemplateService.title = $scope.menutitle;
    $scope.home = [];
    $scope.pagedata = {};
    $scope.pagedata.page = 1;
    $scope.pagedata.limit = "10";
    $scope.pagedata.search = "";
    $scope.number = 100;

    $scope.reload = function (pagedata) {
        $scope.pagedata = pagedata;
        console.log($scope.pagedata);
        NavigationService.getlimitedHome(pagedata, function (data, status) {
            console.log(data);
            $scope.home = data.data;
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

    //DELETE home
    $scope.confDelete = function () {
        NavigationService.deleteHome(function (data, status) {
            console.log(data);
            ngDialog.close();
            window.location.reload();

        });
    }

    //OPENDELETE DIALOG BOX
    $scope.deletefun = function (id) {
        $.jStorage.set("deletehome", id);
        ngDialog.open({
            template: 'views/delete.html',
            closeByEscape: false,
            controller: 'home',
            closeByDocument: false
        });
    }
});
phonecatControllers.controller('createhome', function ($scope, TemplateService, NavigationService, $timeout, $location, $upload) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("createhome");
    TemplateService.content = "views/createhome.html";
    TemplateService.title = $scope.menutitle;
    $scope.home = {};

    $scope.removeimage = function () {
        $scope.home.image = "";
    };
    //imageupload
    var imagejstupld = "";
    $scope.home.image = "";
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
                        $scope.home.image = imagejstupld;
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
        console.log($scope.home);
        NavigationService.createHome($scope.home, function (data, status) {
            console.log(data);
            $location.url("/home");
        });
    }

});

phonecatControllers.controller('edithome', function ($scope, TemplateService, NavigationService, $timeout, $location, $upload, $routeParams) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("edithome");
    TemplateService.content = "views/edithome.html";
    TemplateService.title = $scope.menutitle;
    $scope.home = {};
    $scope.homeid = $routeParams.id;
    NavigationService.getOneHome($routeParams.id, function (data, status) {
        console.log(data);
        $scope.home = data;
    });
    $scope.removeimage = function () {
        $scope.home.image = "";
    };
    //imageupload
    var imagejstupld = "";
    $scope.home.image = "";
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
                        $scope.home.image = imagejstupld;
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
        console.log($scope.home);
        $scope.home.id = $scope.homeid;
        NavigationService.editHome($scope.home, function (data, status) {
            console.log(data);
            $location.url("/home");
        });
    }

});

phonecatControllers.controller('portfolio', function ($scope, TemplateService, NavigationService, $timeout, $location, ngDialog) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("portfolio");
    TemplateService.content = "views/portfolio.html";
    TemplateService.title = $scope.menutitle;
    $scope.portfolio = [];
    $scope.pagedata = {};
    $scope.pagedata.page = 1;
    $scope.pagedata.limit = "10";
    $scope.pagedata.search = "";
    $scope.number = 100;

    $scope.reload = function (pagedata) {
        $scope.pagedata = pagedata;
        console.log($scope.pagedata);
        NavigationService.getlimitedPortfolio(pagedata, function (data, status) {
            console.log(data);
            $scope.portfolio = data.data;
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

    //DELETE portfolio
    $scope.confDelete = function () {
        NavigationService.deletePortfolio(function (data, status) {
            console.log(data);
            ngDialog.close();
            window.location.reload();

        });
    }

    //OPENDELETE DIALOG BOX
    $scope.deletefun = function (id) {
        $.jStorage.set("deleteportfolio", id);
        ngDialog.open({
            template: 'views/delete.html',
            closeByEscape: false,
            controller: 'portfolio',
            closeByDocument: false
        });
    }
});
phonecatControllers.controller('createportfolio', function ($scope, TemplateService, NavigationService, $timeout, $location, $upload) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("createportfolio");
    TemplateService.content = "views/createportfolio.html";
    TemplateService.title = $scope.menutitle;
    $scope.portfolio = {};

    $scope.removeimage = function () {
        $scope.portfolio.image = "";
    };
    //imageupload
    var imagejstupld = "";
    $scope.portfolio.image = "";
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
                        $scope.portfolio.image = imagejstupld;
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
        console.log($scope.portfolio);
        NavigationService.createPortfolio($scope.portfolio, function (data, status) {
            console.log(data);
            $location.url("/portfolio");
        });
    }

});

phonecatControllers.controller('editportfolio', function ($scope, TemplateService, NavigationService, $timeout, $location, $upload, $routeParams) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("editportfolio");
    TemplateService.content = "views/editportfolio.html";
    TemplateService.title = $scope.menutitle;
    $scope.portfolio = {};
    $scope.portfolioid = $routeParams.id;
    NavigationService.getOnePortfolio($routeParams.id, function (data, status) {
        console.log(data);
        $scope.portfolio = data;
    });
    $scope.removeimage = function () {
        $scope.portfolio.image = "";
    };
    //imageupload
    var imagejstupld = "";
    $scope.portfolio.image = "";
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
                        $scope.portfolio.image = imagejstupld;
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
        console.log($scope.portfolio);
        $scope.portfolio.id = $scope.portfolioid;
        NavigationService.editPortfolio($scope.portfolio, function (data, status) {
            console.log(data);
            $location.url("/portfolio");
        });
    }

});

phonecatControllers.controller('product', function ($scope, TemplateService, NavigationService, ngDialog, $location) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("product");
    TemplateService.title = $scope.menutitle;
    TemplateService.content = "views/product.html";
    $scope.product = [];
    $scope.pagedata = {};
    $scope.pagedata.page = 1;
    $scope.pagedata.limit = "10";
    $scope.pagedata.search = "";
    $scope.number = 100;

    $scope.reload = function (pagedata) {
        $scope.pagedata = pagedata;
        console.log($scope.pagedata);
        NavigationService.getlimitedProduct(pagedata, function (data, status) {
            console.log(data);
            $scope.product = data.data;
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

    //DELETE product
    $scope.confDelete = function () {
        NavigationService.deleteProduct(function (data, status) {
            console.log(data);
            ngDialog.close();
            window.location.reload();

        });
    }

    //OPENDELETE DIALOG BOX
    $scope.deletefun = function (id) {
        $.jStorage.set("deleteproduct", id);
        ngDialog.open({
            template: 'views/delete.html',
            closeByEscape: false,
            controller: 'product',
            closeByDocument: false
        });
    }
});

phonecatControllers.controller('createproduct', function ($scope, TemplateService, NavigationService, $timeout, $location) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("createproduct");
    TemplateService.content = "views/createproduct.html";
    TemplateService.title = $scope.menutitle;
    $scope.product = {};
    $scope.submitForm = function () {
        console.log($scope.product);
        NavigationService.createProduct($scope.product, function (data, status) {
            console.log(data);
            $location.url("/product");
        });
    }

});
phonecatControllers.controller('editproduct', function ($scope, TemplateService, NavigationService, $timeout, $location, $routeParams) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("editproduct");
    TemplateService.content = "views/editproduct.html";
    TemplateService.title = $scope.menutitle;
    $scope.productid = $routeParams.id;
    $scope.product = {};
    NavigationService.getOneProduct($routeParams.id, function (data, status) {
        console.log(data);
        $scope.product = data;
    });
    $scope.submitForm = function () {
        $scope.product.id = $scope.productid;
        console.log($scope.product);
        NavigationService.editProduct($scope.product, function (data, status) {
            console.log(data);
            $location.url("/product");
        });
    }
});

phonecatControllers.controller('team', function ($scope, TemplateService, NavigationService, $timeout, $location, ngDialog) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("team");
    TemplateService.content = "views/team.html";
    TemplateService.title = $scope.menutitle;
    $scope.team = [];
    $scope.pagedata = {};
    $scope.pagedata.page = 1;
    $scope.pagedata.limit = "10";
    $scope.pagedata.search = "";
    $scope.number = 100;

    $scope.reload = function (pagedata) {
        $scope.pagedata = pagedata;
        console.log($scope.pagedata);
        NavigationService.getlimitedTeam(pagedata, function (data, status) {
            console.log(data);
            $scope.team = data.data;
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

    //DELETE team
    $scope.confDelete = function () {
        NavigationService.deleteTeam(function (data, status) {
            console.log(data);
            ngDialog.close();
            window.location.reload();

        });
    }

    //OPENDELETE DIALOG BOX
    $scope.deletefun = function (id) {
        $.jStorage.set("deleteteam", id);
        ngDialog.open({
            template: 'views/delete.html',
            closeByEscape: false,
            controller: 'team',
            closeByDocument: false
        });
    }
});
phonecatControllers.controller('createteam', function ($scope, TemplateService, NavigationService, $timeout, $location, $upload) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("createteam");
    TemplateService.content = "views/createteam.html";
    TemplateService.title = $scope.menutitle;
    $scope.team = {};

    $scope.removeimage = function () {
        $scope.team.image = "";
    };
    //imageupload
    var imagejstupld = "";
    $scope.team.image = "";
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
                        $scope.team.image = imagejstupld;
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
        console.log($scope.team);
        NavigationService.createTeam($scope.team, function (data, status) {
            console.log(data);
            $location.url("/team");
        });
    }

});

phonecatControllers.controller('editteam', function ($scope, TemplateService, NavigationService, $timeout, $location, $upload, $routeParams) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("editteam");
    TemplateService.content = "views/editteam.html";
    TemplateService.title = $scope.menutitle;
    $scope.team = {};
    $scope.teamid = $routeParams.id;
    NavigationService.getOneTeam($routeParams.id, function (data, status) {
        console.log(data);
        $scope.team = data;
    });
    $scope.removeimage = function () {
        $scope.team.image = "";
    };
    //imageupload
    var imagejstupld = "";
    $scope.team.image = "";
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
                        $scope.team.image = imagejstupld;
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
        console.log($scope.team);
        $scope.team.id = $scope.teamid;
        NavigationService.editTeam($scope.team, function (data, status) {
            console.log(data);
            $location.url("/team");
        });
    }

});

phonecatControllers.controller('testimonial', function ($scope, TemplateService, NavigationService, ngDialog, $location) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("testimonial");
    TemplateService.title = $scope.menutitle;
    TemplateService.content = "views/testimonial.html";
    $scope.testimonial = [];
    $scope.pagedata = {};
    $scope.pagedata.page = 1;
    $scope.pagedata.limit = "10";
    $scope.pagedata.search = "";
    $scope.number = 100;

    $scope.reload = function (pagedata) {
        $scope.pagedata = pagedata;
        console.log($scope.pagedata);
        NavigationService.getlimitedTestimonial(pagedata, function (data, status) {
            console.log(data);
            $scope.testimonial = data.data;
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

    //DELETE testimonial
    $scope.confDelete = function () {
        NavigationService.deleteTestimonial(function (data, status) {
            console.log(data);
            ngDialog.close();
            window.location.reload();

        });
    }

    //OPENDELETE DIALOG BOX
    $scope.deletefun = function (id) {
        $.jStorage.set("deletetestimonial", id);
        ngDialog.open({
            template: 'views/delete.html',
            closeByEscape: false,
            controller: 'testimonial',
            closeByDocument: false
        });
    }
});

phonecatControllers.controller('createtestimonial', function ($scope, TemplateService, NavigationService, $timeout, $location) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("createtestimonial");
    TemplateService.content = "views/createtestimonial.html";
    TemplateService.title = $scope.menutitle;
    $scope.testimonial = {};
    $scope.submitForm = function () {
        console.log($scope.testimonial);
        NavigationService.createTestimonial($scope.testimonial, function (data, status) {
            console.log(data);
            $location.url("/testimonial");
        });
    }

});
phonecatControllers.controller('edittestimonial', function ($scope, TemplateService, NavigationService, $timeout, $location, $routeParams) {
    $scope.template = TemplateService;
    $scope.menutitle = NavigationService.makeactive("edittestimonial");
    TemplateService.content = "views/edittestimonial.html";
    TemplateService.title = $scope.menutitle;
    $scope.testimonialid = $routeParams.id;
    $scope.testimonial = {};
    NavigationService.getOneTestimonial($routeParams.id, function (data, status) {
        console.log(data);
        $scope.testimonial = data;
    });
    $scope.submitForm = function () {
        $scope.testimonial.id = $scope.testimonialid;
        console.log($scope.testimonial);
        NavigationService.editTestimonial($scope.testimonial, function (data, status) {
            console.log(data);
            $location.url("/testimonial");
        });
    }
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