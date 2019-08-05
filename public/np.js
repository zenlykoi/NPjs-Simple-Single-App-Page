/*
 * @name : NPjs
 * @description : The simple single page app
 * @author : Nguyen Phuong(NP)
 * @contributors : Nguyen Phuong(NP),...
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
     * @name : initElement
     * @type : variable(DOM object)
     * @description : DOM by initId
     */
    initElement: null,
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
    data: {if:{},for:{}},
    /*
     * @name : dataProxy
     * @type : variable(object)
     * @description : If you change this -> data change and All variable in HTML document change ...
     */
    dataProxy: {},
    /*
     * @name : renderDataSymbol
     * @type : variable(object)
     * @description : Symbol to render data in HTML document
     */
    renderDataSymbol: { open : '{{' , close : '}}' },
    /*
     * @name : dataTag
     * @type : variable(string)
     * @description : The name of tag to init any text in HTML document
     */
    dataTag: 'np',
    /*
     * @name : attrIf
     * @type : variable(string)
     * @description : The name of attribute if DOM
     */
    attrIf: 'np-if',
    /*
     * @name : attrFor
     * @type : variable(string)
     * @description : The name of attribute for DOM
     */
    attrFor: 'np-for',
    /*
     * @name : initTemplateByRouter
     * @author : Nguyen Phuong(NP)
     * @type : function
     * @functional : 
     *      - Init HTML of router to DOM(initId)
     *      - Add proxy to data (listen when data change)
     *      - Delete all DOM have attribute np-if == false -> renderTagWithAttr('if')
     *      - Render all tag have np-for attribute -> renderTagWithAttr('for')
     *      - Init any text in HTML document like template egine -> initTextToHTML()
     *      - Init event when click to link -> initEventToClickRoute()
     *      - Run all script in template after load
     */
    initTemplateByRouter: function() {
        let routesLength = this.routes.length;
        let path = (location.pathname[location.pathname.length-1] == '/' && location.pathname != '/') ? location.pathname.slice(0,location.pathname.length-1) : location.pathname;
        let template = null;

        if (routesLength > 0){
            for (let i = 0; i< routesLength; i++) {
                if(path == this.routes[i].path){
                    template = this.routes[i].template;
                    break;
                }
            }
            if(template != null){
                document.title = template.title;
                if(template.html != '' && template.html != undefined && template.html.replace(/\s/g, "") != ''){
                    document.getElementById(this.initId).innerHTML = template.html;
                }
            }
        }

        this.initCss();

        this.runScriptInTemplate();

        this.setDataProxy();

        this.renderTagWithAttr('if');

        this.renderTagWithAttr('for');

        this.initTextToHTML();

        this.initEventToClickRoute();
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
            if(location.origin == routes[i].origin && this.checkHaveRouter(routes[i].pathname)){
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
     * @name : renderTagWithAttr
     * @author : Nguyen Phuong(NP)
     * @type : function
     * @param : attr 
     * @functional : 
     *      - Delete all DOM have attribute np-if == false
     *      - Render for DOM
     */
    renderTagWithAttr: function(attr){
        if(attr == 'if'){
            let parentNode = document.getElementById(this.initId);
            let listIfDOM = this.getAllElementsByAttr(this.attrIf);
            let listIfDOMLength = listIfDOM.length;
            for(let i=0; i<listIfDOMLength; i++){
                if(this.data.if[listIfDOM[i].getAttribute(this.attrIf)] == false){
                    parentNode.removeChild(listIfDOM[i]);
                }else{
                    listIfDOM[i].removeAttribute(this.attrIf);
                }
            }
        }
        if(attr == 'for'){
            let listForLoop = this.getAllElementsByAttr(this.attrFor);
            let dataLoop,listTextTag,forLoopElement,cloneNode,cloneNodelv2,cloneListTextTag;
            for(let i=0; i<listForLoop.length; i++){
                let html = '';
                forLoopElement = listForLoop[i];
                cloneNode = forLoopElement.cloneNode(true);
                dataLoop = this.getObjDataByString('for.' + forLoopElement.getAttribute(this.attrFor));
                listTextTag = this.getAllElementsByAttrAndDataTag('tag',forLoopElement,'text-for');
                for(let j=0; j<dataLoop.length; j++){
                    cloneNodelv2 = cloneNode.cloneNode(true);
                    if(j == 0){
                        for(let k=0; k<listTextTag.length; k++){
                            listTextTag[k].outerHTML = dataLoop[j][listTextTag[k].getAttribute('data')];
                        }
                    }else{
                        cloneListTextTag = this.getAllElementsByAttrAndDataTag('tag',cloneNodelv2,'text-for');
                        for(let k=0; k<listTextTag.length; k++){
                            cloneListTextTag[k].outerHTML = dataLoop[j][cloneListTextTag[k].getAttribute('data')];
                        }
                        cloneNodelv2.removeAttribute(this.attrFor);
                        html += cloneNodelv2.outerHTML;
                    }
                    forLoopElement.removeAttribute(this.attrFor);
                }
                forLoopElement.outerHTML += html;
            }
        }
    },
    /*
     * @name : initTextToHTML
     * @author : Nguyen Phuong(NP)
     * @type : function
     * @functional : 
     *      - Render any text in HTML document like template egine
     * @example : 
     *      - {{example.test.1.a}}   ->  data[example][test][1][a]
     */
    initTextToHTML: function(data = this.data, parent = this.initElement, symbolOpen = this.renderDataSymbol.open, symbolClose = this.renderDataSymbol.close){
        let innerHTML = parent.innerHTML;
        let cloneHTML = innerHTML;
        let arr1 = cloneHTML.split(symbolOpen);
        let arr2 = [];
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i].indexOf('}}') != -1) {
                arr2.push(arr1[i].split(symbolClose)[0]);
            }
        }
        for (let i = 0; i < arr2.length; i++) {
            cloneHTML = cloneHTML.replace(symbolOpen + arr2[i] + symbolClose, this.getObjDataByString(arr2[i]));
        }
        parent.innerHTML = cloneHTML;
        return cloneHTML;
    },
    /*
     * @name : getObjDataByString
     * @author : Nguyen Phuong(NP)
     * @type : function
     * @functional : 
     *      - Return data by string
     * @param :
     *      - str : string description data you want to get
     * @example : 
     *      - str = 'example.hello.0.world' -> data[example][hello][0][world]
     */
    getObjDataByString: function(str , data = this.data){
        let arr = str.split('.');
        let result = data;
        for(let i=0; i<arr.length; i++){
            result = result[arr[i]];
        }
        return result;
    },
    /*
     * @name : runScriptInTemplate
     * @author : Nguyen Phuong(NP)
     * @type : function
     * @functional : 
     *      - Run all script in template after load
     */
    runScriptInTemplate: function(){
        let listScriptTag = this.getAllElementsByAttrAndDataTag('tag',this.initElement,'script');
        for(let i=0; i<listScriptTag.length; i++){
            eval(listScriptTag[i].innerHTML);
            listScriptTag[i].outerHTML = '';
        }
    },
    /*
     * @name : initCss
     * @author : Nguyen Phuong(NP)
     * @type : function
     * @functional : 
     *      - Append style tag to head document
     */
    initCss: function() {
        let listStyleTag = this.getAllElementsByAttrAndDataTag('tag',this.initElement,'style');
        for(let i=0; i<listStyleTag.length; i++){
            let styleElem = document.createElement("style");
            styleElem.innerHTML = listStyleTag[i].innerHTML;
            document.head.appendChild(styleElem);
            listStyleTag[i].outerHTML = '';
        }
    },
    /*
     * @name : setDataProxy
     * @author : Nguyen Phuong(NP)
     * @type : function
     * @functional : 
     *      - Add proxy to data,if change dataProxy -> data change and all var in HTML document change...
     */
    setDataProxy: function(){
        let that = this;
        var handle = {
            get(target, key) {
                if(typeof target[key] === 'object' && target[key] !== null) {
                    return new Proxy(target[key], handle)
                } else {
                  return target[key];
                }
            },
            set (target, key, value) {
                target[key] = value;
                that.initTemplateByRouter();
                return true
            }
        };
        this.dataProxy = new Proxy(this.data, handle);
    },
    /*
     * @name : checkHaveRouter
     * @author : Nguyen Phuong(NP)
     * @type : function
     * @params : 
     *      - path : Path of link you want to check
     * @functional : 
     *      - Check have router with any path
     * @return : 
     *      - True if have router
     *      - False if not have router
     */
    checkHaveRouter: function(path){
        for (let i = 0; i< this.routes.length; i++) {
            if(path == this.routes[i].path){
                return true;
            }
        }
        return false;
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
     * @type : function
     * @params : 
     *      - attr : Attribute of DOM element you want to get
     *      - parent : ParentNode of element (define = document)
     * @functional : 
     *      - Get all element have someone attribute
     * @return : DOM element have attr attribute
     */
    getAllElementsByAttr: function(attr,parent = this.initElement){
        return parent.querySelectorAll('['+attr+']');
    },
    /*
     * @name : getAllElementsByAttrAndDataTag
     * @author : Nguyen Phuong(NP)
     * @type : function
     * @params : 
     *      - attr : Attribute of DOM element you want to get
     *      - parent : ParentNode of element (define = document)
     *      - attrValue : Value of attr
     * @functional : 
     *      - Get all element have someone attribute and dataTag
     * @return : List search result by attr and dataTag
     */
    getAllElementsByAttrAndDataTag: function(attr,parent = this.initElement,attrValue = ''){
        let listDataTag = parent.getElementsByTagName(this.dataTag);
        let result = [];
        if(attrValue && attrValue != undefined && attrValue != null && attrValue != ''){
            for(let i=0; i<listDataTag.length; i++){
                if(listDataTag[i].hasAttribute(attr) && listDataTag[i].getAttribute(attr) == attrValue){
                    result.push(listDataTag[i]);
                }
            }
        }else{
            for(let i=0; i<listDataTag.length; i++){
                if(listDataTag[i].hasAttribute(attr)){
                    result.push(listDataTag[i]);
                }
            }
        }
        return result;
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
        this.initElement = document.getElementById(id);
        this.renderAfterLoad();
    }
};