var templateservicemod = angular.module('templateservicemod', []);
templateservicemod.service('TemplateService', function () {
    this.title = "Home";
    this.meta = "Google";
    this.metadesc = "Home";

    this.header = "views/header.html";
    this.sidemenu = "views/sidemenu.html";
    this.content = "views/content.html";
    this.footer = "views/footer.html";
//    this.contentmenu = "views/contentmenu.html";

    var d = new Date();
    this.year = d.getFullYear();
});