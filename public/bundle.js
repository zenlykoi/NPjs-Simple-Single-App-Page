/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("window.NP = __webpack_require__(/*! ./np.min.js */ \"./src/np.min.js\");\nvar testComponent = __webpack_require__(/*! ./components/test.js */ \"./src/components/test.js\")({ mess : 'hih' });\nNP.init('app');\nNP.data = {\n\ttest : 'hello world haha',\n\tif : {\n\t\tseen : false\n\t}\n};\nNP.routes = [\n\t{\n\t\tpath : '/',\n\t\ttemplate : {\n\t\t\ttitle : 'Simple SPA Demo',\n\t\t\thtml : `\n\t\t\t\t<a href=\"/test\">test</a>\n\t\t\t`\n\t\t}\n\t},\n\t{\n\t\tpath : '/test',\n\t\ttemplate : {\n\t\t\ttitle : 'Test Components',\n\t\t\thtml : testComponent\n\t\t}\n\t}\n];\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function() {\n  \treturn `\n  \t\tThis is Header ! <br>\n  \t\t<np tag=\"style\">\n  \t\t\tbody {\n  \t\t\t\tbackground-color:red;\n  \t\t\t}\n  \t\t</np>\n  \t`;\n};\n\n//# sourceURL=webpack:///./src/components/header.js?");

/***/ }),

/***/ "./src/components/test.js":
/*!********************************!*\
  !*** ./src/components/test.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let header = __webpack_require__(/*! ./header.js */ \"./src/components/header.js\")();\nmodule.exports = function(obj) {\n  \treturn `\n  \t\t${header}\n  \t\t${obj.mess}\n  \t\t{{test}}\n  \t\t<div np-if=\"test\">seen</div>\n  \t\t<np tag=\"script\">\n  \t\t\tNP.data.if.test = true;\n  \t\t</np>\n  \t`;\n};\n\n//# sourceURL=webpack:///./src/components/test.js?");

/***/ }),

/***/ "./src/np.min.js":
/*!***********************!*\
  !*** ./src/np.min.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var NP={initId:\"\",initElement:null,routes:[],data:{},dataProxy:{},renderDataSymbol:{open:\"{{\",close:\"}}\"},dataTag:\"np\",attrIf:\"np-if\",attrFor:\"np-for\",initTemplateByRouter:function(){var b=this.routes.length,a=\"/\"==location.pathname[location.pathname.length-1]&&\"/\"!=location.pathname?location.pathname.slice(0,location.pathname.length-1):location.pathname;if(0<b){for(var c=0;c<b;c++)if(a==this.routes[c].path){var e=this.routes[c].template;break}document.title=e.title;document.getElementById(this.initId).innerHTML=\ne.html;this.initCss();this.runScriptInTemplate();this.setDataProxy();this.renderTagWithAttr(\"if\");this.renderTagWithAttr(\"for\");this.initTextToHTML();this.initEventToClickRoute()}},initEventToClickRoute:function(){for(var b=this,a=document.getElementsByTagName(\"a\"),c=a.length,e,d={$jscomp$loop$prop$i$5:0};d.$jscomp$loop$prop$i$5<c;d={$jscomp$loop$prop$i$5:d.$jscomp$loop$prop$i$5},d.$jscomp$loop$prop$i$5++)location.origin==a[d.$jscomp$loop$prop$i$5].origin&&this.checkHaveRouter(a[d.$jscomp$loop$prop$i$5].pathname)&&\n(a[d.$jscomp$loop$prop$i$5].onclick=function(a){return function(){e=document.getElementsByTagName(\"a\")[a.$jscomp$loop$prop$i$5].href;document.getElementsByTagName(\"a\")[a.$jscomp$loop$prop$i$5].href=\"javascript: void(0)\";history.pushState({},\"\",e);b.initTemplateByRouter()}}(d))},renderTagWithAttr:function(b){if(\"if\"==b)for(var a=document.getElementById(this.initId),c=this.getAllElementsByAttr(this.attrIf),e=c.length,d=0;d<e;d++)0==this.data.if[c[d].getAttribute(this.attrIf)]?a.removeChild(c[d]):c[d].removeAttribute(this.attrIf);\nif(\"for\"==b){b=this.getAllElementsByAttr(this.attrFor);for(var f,g,l=0;l<b.length;l++){var m=\"\";e=b[l];d=e.cloneNode(!0);a=this.getObjDataByString(\"for.\"+e.getAttribute(this.attrFor));c=this.getAllElementsByAttrAndDataTag(\"tag\",e,\"text-for\");for(var h=0;h<a.length;h++){f=d.cloneNode(!0);if(0==h)for(f=0;f<c.length;f++)c[f].outerHTML=a[h][c[f].getAttribute(\"data\")];else{g=this.getAllElementsByAttrAndDataTag(\"tag\",f,\"text-for\");for(var k=0;k<c.length;k++)g[k].outerHTML=a[h][g[k].getAttribute(\"data\")];\nf.removeAttribute(this.attrFor);m+=f.outerHTML}e.removeAttribute(this.attrFor)}e.outerHTML+=m}}},initTextToHTML:function(b,a,c,e){a=void 0===a?this.initElement:a;c=void 0===c?this.renderDataSymbol.open:c;e=void 0===e?this.renderDataSymbol.close:e;b=a.innerHTML;for(var d=b.split(c),f=[],g=0;g<d.length;g++)-1!=d[g].indexOf(\"}}\")&&f.push(d[g].split(e)[0]);for(d=0;d<f.length;d++)b=b.replace(c+f[d]+e,this.getObjDataByString(f[d]));return a.innerHTML=b},getObjDataByString:function(b,a){a=void 0===a?this.data:\na;b=b.split(\".\");for(var c=0;c<b.length;c++)a=a[b[c]];return a},runScriptInTemplate:function(){for(var b=this.getAllElementsByAttrAndDataTag(\"tag\",this.initElement,\"script\"),a=0;a<b.length;a++)eval(b[a].innerHTML),b[a].outerHTML=\"\"},initCss:function(){for(var b=this.getAllElementsByAttrAndDataTag(\"tag\",this.initElement,\"style\"),a=0;a<b.length;a++){var c=document.createElement(\"style\");c.innerHTML=b[a].innerHTML;document.head.appendChild(c);b[a].outerHTML=\"\"}},setDataProxy:function(){var b=this,a=\n{get:function(c,b){return\"object\"===typeof c[b]&&null!==c[b]?new Proxy(c[b],a):c[b]},set:function(a,e,d){a[e]=d;b.initTemplateByRouter();return!0}};this.dataProxy=new Proxy(this.data,a)},checkHaveRouter:function(b){for(var a=0;a<this.routes.length;a++)if(b==this.routes[a].path)return!0;return!1},renderAfterLoad:function(){var b=this;b.initEventToClickRoute();window.onload=function(){b.initTemplateByRouter()};window.onbeforeunload=function(){b.initTemplateByRouter()};window.addEventListener(\"popstate\",\nfunction(){b.initTemplateByRouter()})},getAllElementsByAttr:function(b,a){a=void 0===a?this.initElement:a;return a.querySelectorAll(\"[\"+b+\"]\")},getAllElementsByAttrAndDataTag:function(b,a,c){a=void 0===a?this.initElement:a;c=void 0===c?\"\":c;a=a.getElementsByTagName(this.dataTag);var e=[];if(c&&void 0!=c&&null!=c&&\"\"!=c)for(var d=0;d<a.length;d++)a[d].hasAttribute(b)&&a[d].getAttribute(b)==c&&e.push(a[d]);else for(c=0;c<a.length;c++)a[c].hasAttribute(b)&&e.push(a[c]);return e},init:function(b){this.initId=\nb;this.initElement=document.getElementById(b);this.renderAfterLoad()}};module.exports=NP;\n\n//# sourceURL=webpack:///./src/np.min.js?");

/***/ })

/******/ });