var adminurl = "http://localhost:1337/";
//var adminurl = "http://104.197.23.70/";
//var adminurl = "http://192.168.2.22:1337/";

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {
    var navigation = [
        {
            name: "Dashboard",
            active: "",
            link: "#/dashboard",
            show: false,
            subnav: []
    }, {
            name: "About",
            active: "",
            link: "#/about",
            show: false,
            subnav: []
    }, {
            name: "Client",
            classis: "",
            link: "#/client",
            show: false,
            subnav: []
    }, {
            name: "Contact Us",
            classis: "",
            link: "#/contactus",
            show: false,
            subnav: []
    }, {
            name: "Home",
            classis: "",
            link: "#/home",
            show: false,
            subnav: []
    }, {
            name: "Portfolio",
            classis: "",
            link: "#/portfolio",
            show: false,
            subnav: []
    }, {
            name: "Product",
            classis: "",
            link: "#/product",
            show: false,
            subnav: []
    }, {
            name: "Team",
            classis: "",
            link: "#/team",
            show: false,
            subnav: []
    }, {
            name: "Testimonial",
            classis: "",
            link: "#/testimonial",
            show: false,
            subnav: []
    }];
    return {
        getNav: function () {
            return navigation;
        },
        makeactive: function (menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },
        createAbout: function (data, callback) {
            $http({
                url: adminurl + "about/save",
                method: "POST",
                data: {
                    "description": data.description,
                    "mission": data.mission,
                    "vision": data.vision
                }
            }).success(callback);
        },
        editAbout: function (data, callback) {
            $http({
                url: adminurl + "about/save",
                method: "POST",
                data: {
                    "_id": data._id,
                    "description": data.description,
                    "mission": data.mission,
                    "vision": data.vision
                }
            }).success(callback);
        },
        deleteAbout: function (callback) {
            $http({
                url: adminurl + "about/delete",
                method: "POST",
                data: {
                    "_id": $.jStorage.get("deleteabout")
                }
            }).success(callback);
        },
        getlimitedAbout: function (data, callback) {
            $http({
                url: adminurl + "about/findlimited",
                method: "POST",
                data: {
                    "search": data.search,
                    "pagesize": parseInt(data.limit),
                    "pagenumber": parseInt(data.page)
                }
            }).success(callback);
        },
        getOneAbout: function (id, callback) {
            $http({
                url: adminurl + "about/findone",
                method: "POST",
                data: {
                    "_id": id
                }
            }).success(callback);
        },
        createClient: function (data, callback) {
            $http({
                url: adminurl + "client/save",
                method: "POST",
                data: {
                    "name": data.name,
                    "image": data.image
                }
            }).success(callback);
        },
        editClient: function (data, callback) {
            $http({
                url: adminurl + "client/save",
                method: "POST",
                data: {
                    "_id": data._id,
                    "name": data.name,
                    "image": data.image
                }
            }).success(callback);
        },
        deleteClient: function (callback) {
            $http({
                url: adminurl + "client/delete",
                method: "POST",
                data: {
                    "_id": $.jStorage.get("deleteclient")
                }
            }).success(callback);
        },
        getlimitedClient: function (data, callback) {
            $http({
                url: adminurl + "client/findlimited",
                method: "POST",
                data: {
                    "search": data.search,
                    "pagesize": parseInt(data.limit),
                    "pagenumber": parseInt(data.page)
                }
            }).success(callback);
        },
        getOneClient: function (id, callback) {
            $http({
                url: adminurl + "client/findone",
                method: "POST",
                data: {
                    "_id": id
                }
            }).success(callback);
        },
        createContactus: function (data, callback) {
            $http({
                url: adminurl + "contactus/save",
                method: "POST",
                data: {
                    "name": data.name,
                    "address": data.address,
                    "email": data.email,
                    "message": data.message,
                    "phone": data.phone
                }
            }).success(callback);
        },
        editContactus: function (data, callback) {
            $http({
                url: adminurl + "contactus/save",
                method: "POST",
                data: {
                    "_id": data._id,
                    "name": data.name,
                    "address": data.address,
                    "email": data.email,
                    "message": data.message,
                    "phone": data.phone
                }
            }).success(callback);
        },
        deleteContactus: function (callback) {
            $http({
                url: adminurl + "contactus/delete",
                method: "POST",
                data: {
                    "_id": $.jStorage.get("deletecontactus")
                }
            }).success(callback);
        },
        getlimitedContactus: function (data, callback) {
            $http({
                url: adminurl + "contactus/findlimited",
                method: "POST",
                data: {
                    "search": data.search,
                    "pagesize": parseInt(data.limit),
                    "pagenumber": parseInt(data.page)
                }
            }).success(callback);
        },
        getOneContactus: function (id, callback) {
            $http({
                url: adminurl + "contactus/findone",
                method: "POST",
                data: {
                    "_id": id
                }
            }).success(callback);
        }
    }
});