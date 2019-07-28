let NP = {
    initId: "",
    routes: [],
    checkRouter: function() {
        let routesLength = this.routes.length;
        let path = (location.pathname[location.pathname.length-1] == '/') ? location.pathname.slice(0,location.pathname.length-1) : location.pathname;
        let index;
        if (routesLength > 0){
            for (let i = 0; i< routesLength; i++) {
                if(path == this.routes[i].path){
                    index = i;
                    break;
                }
            }
            this.initTemplate(this.routes[index].template);
        }
    },
    initTemplate: function(template) {
        document.title = template.title;
        document.getElementById(this.initId).innerHTML = template.html;
        this.initEventToClickRoute();
    },
    initEventToClickRoute: function() {
        let that = this;
        let routes = document.getElementsByTagName("a");
        let routeLength = routes.length;
        for(let i=0; i<routeLength; i++){
            if(location.origin == routes[i].origin){
                routes[i].onclick = function(){
                    let routeLink = document.getElementsByTagName("a")[i].href;
                    document.getElementsByTagName("a")[i].href = 'javascript: void(0)';
                    history.pushState({}, '',routeLink);
                    that.checkRouter();
                }
            }
        }
    },
    checkAfterLoad: function() {
        let that = this;
        that.initEventToClickRoute();

        window.onload = function() {
            that.checkRouter();
        };
        window.onbeforeunload = function() {
            that.checkRouter();
        };
        window.addEventListener("popstate", function() {
            that.checkRouter();
        })
    },
    init: function(id) {
        this.initId = id;
        this.checkAfterLoad()
    }
};