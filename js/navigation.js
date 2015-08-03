var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function () {
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

    }
});