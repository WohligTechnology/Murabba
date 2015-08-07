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
        },
        createHome: function (data, callback) {
            $http({
                url: adminurl + "home/save",
                method: "POST",
                data: {
                    "menu": data.menu,
                    "image": data.image
                }
            }).success(callback);
        },
        editHome: function (data, callback) {
            $http({
                url: adminurl + "home/save",
                method: "POST",
                data: {
                    "_id": data._id,
                    "menu": data.menu,
                    "image": data.image
                }
            }).success(callback);
        },
        deleteHome: function (callback) {
            $http({
                url: adminurl + "home/delete",
                method: "POST",
                data: {
                    "_id": $.jStorage.get("deletehome")
                }
            }).success(callback);
        },
        getlimitedHome: function (data, callback) {
            $http({
                url: adminurl + "home/findlimited",
                method: "POST",
                data: {
                    "search": data.search,
                    "pagesize": parseInt(data.limit),
                    "pagenumber": parseInt(data.page)
                }
            }).success(callback);
        },
        getOneHome: function (id, callback) {
            $http({
                url: adminurl + "home/findone",
                method: "POST",
                data: {
                    "_id": id
                }
            }).success(callback);
        },
        createPortfolio: function (data, callback) {
            $http({
                url: adminurl + "portfolio/save",
                method: "POST",
                data: {
                    "menu": data.menu,
                    "image": data.image,
                    "name": data.name,
                    "description": data.description,
                    "tech": data.tech
                }
            }).success(callback);
        },
        editPortfolio: function (data, callback) {
            $http({
                url: adminurl + "portfolio/save",
                method: "POST",
                data: {
                    "_id": data._id,
                    "menu": data.menu,
                    "image": data.image,
                    "name": data.name,
                    "description": data.description,
                    "tech": data.tech
                }
            }).success(callback);
        },
        deletePortfolio: function (callback) {
            $http({
                url: adminurl + "portfolio/delete",
                method: "POST",
                data: {
                    "_id": $.jStorage.get("deleteportfolio")
                }
            }).success(callback);
        },
        getlimitedPortfolio: function (data, callback) {
            $http({
                url: adminurl + "portfolio/findlimited",
                method: "POST",
                data: {
                    "search": data.search,
                    "pagesize": parseInt(data.limit),
                    "pagenumber": parseInt(data.page)
                }
            }).success(callback);
        },
        getOnePortfolio: function (id, callback) {
            $http({
                url: adminurl + "portfolio/findone",
                method: "POST",
                data: {
                    "_id": id
                }
            }).success(callback);
        },
        createProduct: function (data, callback) {
            $http({
                url: adminurl + "product/save",
                method: "POST",
                data: {
                    "menu": data.menu,
                    "description": data.description
                }
            }).success(callback);
        },
        editProduct: function (data, callback) {
            $http({
                url: adminurl + "product/save",
                method: "POST",
                data: {
                    "_id": data._id,
                    "menu": data.menu,
                    "description": data.description
                }
            }).success(callback);
        },
        deleteProduct: function (callback) {
            $http({
                url: adminurl + "product/delete",
                method: "POST",
                data: {
                    "_id": $.jStorage.get("deleteproduct")
                }
            }).success(callback);
        },
        getlimitedProduct: function (data, callback) {
            $http({
                url: adminurl + "product/findlimited",
                method: "POST",
                data: {
                    "search": data.search,
                    "pagesize": parseInt(data.limit),
                    "pagenumber": parseInt(data.page)
                }
            }).success(callback);
        },
        getOneProduct: function (id, callback) {
            $http({
                url: adminurl + "product/findone",
                method: "POST",
                data: {
                    "_id": id
                }
            }).success(callback);
        },
        createTeam: function (data, callback) {
            $http({
                url: adminurl + "team/save",
                method: "POST",
                data: {
                    "name": data.name,
                    "designation": data.designation,
                    "movie": data.movie,
                    "quote": data.quote,
                    "description": data.description,
                    "oneword": data.oneword,
                    "phone": data.phone,
                    "email": data.email,
                    "image": data.image
                }
            }).success(callback);
        },
        editTeam: function (data, callback) {
            $http({
                url: adminurl + "team/save",
                method: "POST",
                data: {
                    "_id": data._id,
                    "name": data.name,
                    "designation": data.designation,
                    "movie": data.movie,
                    "quote": data.quote,
                    "description": data.description,
                    "oneword": data.oneword,
                    "phone": data.phone,
                    "email": data.email,
                    "image": data.image
                }
            }).success(callback);
        },
        deleteTeam: function (callback) {
            $http({
                url: adminurl + "team/delete",
                method: "POST",
                data: {
                    "_id": $.jStorage.get("deleteteam")
                }
            }).success(callback);
        },
        getlimitedTeam: function (data, callback) {
            $http({
                url: adminurl + "team/findlimited",
                method: "POST",
                data: {
                    "search": data.search,
                    "pagesize": parseInt(data.limit),
                    "pagenumber": parseInt(data.page)
                }
            }).success(callback);
        },
        getOneTeam: function (id, callback) {
            $http({
                url: adminurl + "team/findone",
                method: "POST",
                data: {
                    "_id": id
                }
            }).success(callback);
        },
        createTestimonial: function (data, callback) {
            $http({
                url: adminurl + "testimonial/save",
                method: "POST",
                data: {
                    "name": data.name,
                    "message": data.message
                }
            }).success(callback);
        },
        editTestimonial: function (data, callback) {
            $http({
                url: adminurl + "testimonial/save",
                method: "POST",
                data: {
                    "_id": data._id,
                    "name": data.name,
                    "message": data.message
                }
            }).success(callback);
        },
        deleteTestimonial: function (callback) {
            $http({
                url: adminurl + "testimonial/delete",
                method: "POST",
                data: {
                    "_id": $.jStorage.get("deleteTestimonial")
                }
            }).success(callback);
        },
        getlimitedTestimonial: function (data, callback) {
            $http({
                url: adminurl + "testimonial/findlimited",
                method: "POST",
                data: {
                    "search": data.search,
                    "pagesize": parseInt(data.limit),
                    "pagenumber": parseInt(data.page)
                }
            }).success(callback);
        },
        getOneTestimonial: function (id, callback) {
            $http({
                url: adminurl + "testimonial/findone",
                method: "POST",
                data: {
                    "_id": id
                }
            }).success(callback);
        }
    }
});