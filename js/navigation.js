var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function () {
    var navigation = [{
        name: "Dashboard",
        classis: "active",
        link: "#/dashboard",
        show: false,
        subnav: [
            {
                name: "Dashboard",
                classis: "",
                link: "#/dashboard",
            },
            {
                name: "Dashboard",
                classis: "",
                link: "#/dashboard",
            }
        ]
    }, {
        name: "User",
        active: "",
        link: "#/user",
        show: false,
        subnav: []
    }, {
        name: "Forms",
        classis: "",
        link: "#/forms",
        show: false,
        subnav: []
    }, {
        name: "Grid View",
        classis: "",
        link: "#/gridview",
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