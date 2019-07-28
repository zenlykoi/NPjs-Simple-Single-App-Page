let NP = {
    initId: "",
    routes: [],
    checkRouter: function() {
        let routesLength = this.routes.length;
        let path = (location.pathname[location.pathname.length-1] == '/') ? location.pathname.slice(0,location.pathname.length-1) : location.pathname;
        if (routesLength > 0){
            for (let i = 0; i< routesLength; i++) {
                if(path == this.routes[i].path){
                    this.initTemplate(this.routes[i].template);
                }
            }
        }
    },
    initTemplate: function(template) {
        document.title = template.title;
        document.getElementById(this.initId).innerHTML = template.html;
        this.initEventToClickRoute();
    },
    initCss: function() {
        let styleElem = document.createElement("style");
        styleElem.innerHTML = `
            route {
                color: -webkit-link;
                cursor: pointer;
                text-decoration: underline;
            }
        `;
        document.head.appendChild(styleElem)
    },
    initEventToClickRoute: function() {
        let that = this;
        let routes = document.getElementsByTagName("route");
        let routeLength = routes.length;
        for(let i=0; i<routeLength; i++){
            routes[i].onclick = function(){
                history.pushState({}, '',document.getElementsByTagName("route")[i].getAttribute("path"));
                that.checkRouter();
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
        this.initCss();
        this.checkAfterLoad()
    }
};