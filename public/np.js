let NP = {
    initId: "",
    routes: [],
    initTemplateByRouter: function() {
        let routesLength = this.routes.length;
        let path = (location.pathname[location.pathname.length-1] == '/') ? location.pathname.slice(0,location.pathname.length-1) : location.pathname;
        let template;
        if (routesLength > 0){
            for (let i = 0; i< routesLength; i++) {
                if(path == this.routes[i].path){
                    template = this.routes[i].template;
                    break;
                }
            }
            document.title = template.title;
            document.getElementById(this.initId).innerHTML = template.html;
            this.initEventToClickRoute();
        }
    },
    initEventToClickRoute: function() {
        let that = this;
        let routes = document.getElementsByTagName("a");
        let routeLength = routes.length;
        let routeLink;
        for(let i=0; i<routeLength; i++){
            if(location.origin == routes[i].origin){
                routes[i].onclick = function(){
                    routeLink = document.getElementsByTagName("a")[i].href;
                    document.getElementsByTagName("a")[i].href = 'javascript: void(0)';
                    history.pushState({}, '',routeLink);
                    that.initTemplateByRouter();
                }
            }
        }
    },
    renderAfterLoad: function() {
        let that = this;
        that.initEventToClickRoute();

        window.onload = function() {
            that.initTemplateByRouter();
        };
        window.onbeforeunload = function() {
            that.initTemplateByRouter();
        };
        window.addEventListener("popstate", function() {
            that.initTemplateByRouter();
        })
    },
    getAllElementsByAttr: function(attrib){
        return document.querySelectorAll('['+attrib+']');
    },
    init: function(id) {
        this.initId = id;
        this.renderAfterLoad();
    }
};