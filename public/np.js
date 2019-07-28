/*
 * @name : NPjs
 * @description : The simple single page app
 * @author : Nguyen Phuong(NP)
 * @version : 0.1.0
 */
let NP = {
    /*
     * @name : initId
     * @type : variable(string)
     * @description : DOM id to init NPjs
     */
    initId: "",
    /*
     * @name : routes
     * @type : variable(array)
     * @description : Array to store all page router
     * @struct : [
     *              {
     *                  path : 'Url page',
     *                  template : {
     *                      title : 'Title of page',
     *                      html : `HTML of page (multiline string)`
     *                  } 
     *              },...
     *          ]
     */
    routes: [],
    /*
     * @name : data
     * @type : variable(object)
     * @description : Object to store all NP data
     * @struct : {
     *              if : {
     *                  example : true(or false)  -> if DOM
     *              },...
     *           }
     */
    data: {},
    /*
     * @name : attrIf
     * @type : variable(string)
     * @description : The name of attribute if DOM
     */
    attrIf: 'np-if',
    /*
     * @name : initTemplateByRouter
     * @author : Nguyen Phuong(NP)
     * @type : function
     * @functional : 
     *      - Init HTML of router to DOM(initId)
     *      - Delete all DOM have attribute np-if == false
     */
    initTemplateByRouter: function() {
        let routesLength = this.routes.length;
        let path = (location.pathname[location.pathname.length-1] == '/') ? location.pathname.slice(0,location.pathname.length-1) : location.pathname;
        let template,listIfDOM,listIfDOMLength;
        if (routesLength > 0){
            for (let i = 0; i< routesLength; i++) {
                if(path == this.routes[i].path){
                    template = this.routes[i].template;
                    break;
                }
            }
            document.title = template.title;
            document.getElementById(this.initId).innerHTML = template.html;
            listIfDOM = this.getAllElementsByAttr(this.attrIf);
            listIfDOMLength = listIfDOM.length;
            for(let i=0; i<listIfDOMLength; i++){
                if(this.data.if[listIfDOM[i].getAttribute(this.attrIf)] == false){
                    document.getElementById(this.initId).removeChild(listIfDOM[i]);
                }
            }
            this.initEventToClickRoute();
        }
    },
    /*
     * @name : initEventToClickRoute
     * @author : Nguyen Phuong(NP)
     * @type : function
     * @functional : 
     *      - Init onclick event to all tag 'a' of DOM and disable attr href of this tag
     *      - When click tag 'a',NP will run history.pushState() function with 'a' href
     *      - After that,NP run initTemplateByRouter() function to init HTML
     */
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
    /*
     * @name : renderAfterLoad
     * @author : Nguyen Phuong(NP)
     * @type : function
     * @functional : 
     *      - Active initEventToClickRoute() function and initTemplateByRouter() function in some cases
     */
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
    /*
     * @name : getAllElementsByAttr
     * @author : Nguyen Phuong(NP)
     * @type : function(support)
     * @params : 
     *      - attrib : Attribute of DOM element you want to get
     * @functional : 
     *      - Get all element have someone attribute
     */
    getAllElementsByAttr: function(attrib){
        return document.querySelectorAll('['+attrib+']');
    },
    /*
     * @name : init
     * @author : Nguyen Phuong(NP)
     * @type : function
     * @params : 
     *      - id : The attribute 'id' of DOM element you want to init NPjs
     * @functional : 
     *      - Init NPjs
     */
    init: function(id) {
        this.initId = id;
        this.renderAfterLoad();
    }
};