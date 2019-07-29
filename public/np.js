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
    data: {},
    /*
     * @name : dataProxy
     * @type : variable(object)
     * @description : If you change this -> data change and All variable in HTML document change ...
     */
    dataProxy: {},
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
     * @name : attrDataForOfDataTag
     * @type : variable(string)
     * @description : The attribute's name of element to render for loop data
     */
    attrDataForOfDataTag: 'data-for',
    /*
     * @name : attrTextOfDataTag
     * @type : variable(string)
     * @description : The name of attribute in dataTag to render text
     */
    attrTextOfDataTag: 'text',
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

            this.setDataProxy();

            this.renderTagWithAttr('if');

            this.renderTagWithAttr('for');

            this.initTextToHTML();

            this.initEventToClickRoute();

            this.runScriptInTemplate();
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
     *      - Render for DOM (developing...)
     */
    renderTagWithAttr: function(attr){
        if(attr == 'if'){
            let parentNode = document.getElementById(this.initId);
            let listIfDOM = this.getAllElementsByAttr(this.attrIf);
            let listIfDOMLength = listIfDOM.length;
            for(let i=0; i<listIfDOMLength; i++){
                if(this.data.if[listIfDOM[i].getAttribute(this.attrIf)] == false){
                    parentNode.removeChild(listIfDOM[i]);
                }
            }
        }
        if(attr == 'for'){
            // let listForDOM = this.getAllElementsByAttr(this.attrFor);
            // let listForDOMLength = listForDOM.length;
            // let attrForValue,listDataTagInThisNode,forDOMData;
            // for(let i=0; i<listForDOMLength; i++){
            //     forDOMDataLength = this.data.for[listForDOM[i].getAttribute(this.attrFor)].length;
            //     let clone = listForDOM[i].cloneNode(true).outerHTML;
            //     for(let j=0; j<forDOMDataLength - 1; j++){
            //         clone += listForDOM[i].outerHTML;
            //     }
            //     listForDOM[i].outerHTML = clone;

            //     let attrForDOMValue = listForDOM[i].getAttribute(this.attrFor);
            //     let ArrayAttrForDOMValue = attrForDOMValue.split('.');

            //     let listForData = this.getAllElementsByAttr(this.attrDataForOfDataTag);
            //     let index = 0;
            //     for(let j=0; j<listForData.length; j++){
            //         let attrForDataValue = listForData[i].getAttribute(this.attrDataForOfDataTag);
            //         let ArrayAttrForDataValue = attrForDataValue.split('.');
            //         if(ArrayAttrForDOMValue[0] == ArrayAttrForDataValue[0]){
            //             listForData[j].outerHTML = this.data.for[attrForDOMValue][index][ArrayAttrForDataValue[1]];
            //             index ++;
            //         }
            //     }
            // }
        }
    },
    /*
     * @name : initTextToHTML
     * @author : Nguyen Phuong(NP)
     * @type : function
     * @functional : 
     *      - Render any text in HTML document like template egine
     * @example : 
     *      - <np tag='text'>Nguyen Phuong</np>   ->  'Nguyen Phuong'
     *      - <np tag='text' data='test'></np>  ->  data.test
     */
    initTextToHTML: function(){
        let listTextTag = this.getAllElementsByAttrAndDataTag('tag',this.initElement,'text');
        for(let i=0; i<listTextTag.length; i++){
            if(listTextTag[i].hasAttribute('data')){
                listTextTag[i].outerHTML = this.data[listTextTag[i].getAttribute('data')];
            }else{
                listTextTag[i].outerHTML = listTextTag[i].innerHTML;
            }
        }
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
     * @name : setDataProxy
     * @author : Nguyen Phuong(NP)
     * @type : function
     * @functional : 
     *      - Add proxy to data,if change dataProxy -> data change and all var in HTML document change...
     */
    setDataProxy: function(){
        var that = this;
        this.dataProxy = new Proxy(this.data, {
            set: function (target, key, value) {
                target[key] = value;
                that.initTemplateByRouter();
                return true;
            }
        });
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
        let listDataTag = document.getElementsByTagName(this.dataTag);
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