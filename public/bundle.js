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

eval("var NP = __webpack_require__(/*! ./np.min.js */ \"./src/np.min.js\");\r\nvar indexTpl = __webpack_require__(/*! ./components/index.js */ \"./src/components/index.js\");\r\nvar homeTpl = __webpack_require__(/*! ./components/home.js */ \"./src/components/home.js\");\r\nvar blogTpl = __webpack_require__(/*! ./components/blog.js */ \"./src/components/blog.js\");\r\nvar contactTpl = __webpack_require__(/*! ./components/contact.js */ \"./src/components/contact.js\");\r\nNP.init('app');\r\nNP.routes = [\r\n\t{\r\n\t\tpath : '/',\r\n\t\ttemplate : {\r\n\t\t\ttitle : 'Simple SPA Demo',\r\n\t\t\thtml : indexTpl\r\n\t\t}\r\n\t},\r\n\t{\r\n\t\tpath : '/home',\r\n\t\ttemplate : {\r\n\t\t\ttitle : 'Home',\r\n\t\t\thtml : homeTpl\r\n\t\t}\r\n\t},\r\n\t{\r\n\t\tpath : '/blog',\r\n\t\ttemplate : {\r\n\t\t\ttitle : 'Blog',\r\n\t\t\thtml : blogTpl\r\n\t\t}\r\n\t},\r\n\t{\r\n\t\tpath : '/contact',\r\n\t\ttemplate : {\r\n\t\t\ttitle : 'Contact',\r\n\t\t\thtml : contactTpl\r\n\t\t}\r\n\t}\r\n];\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/components/blog.js":
/*!********************************!*\
  !*** ./src/components/blog.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = `\r\n\t<b>Blog Page</b><br>\r\n\t<route path=\"/home\">home</route><br>\r\n\t<route path=\"/contact\">contact</route>\r\n`;\n\n//# sourceURL=webpack:///./src/components/blog.js?");

/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = `\r\n\t<b>Contact Page</b><br>\r\n\t<route path=\"/home\">home</route><br>\r\n\t<route path=\"/blog\">blog</route>\r\n`;\n\n//# sourceURL=webpack:///./src/components/contact.js?");

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = `\r\n\t<b>Home Page</b><br>\r\n\t<route path=\"/blog\">blog</route><br>\r\n\t<route path=\"/contact\">contact</route>\r\n`;\n\n//# sourceURL=webpack:///./src/components/home.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = `\r\n\t<route path=\"/home\">home</route><br>\r\n\t<route path=\"/blog\">blog</route><br>\r\n\t<route path=\"/contact\">contact</route>\r\n`;\n\n//# sourceURL=webpack:///./src/components/index.js?");

/***/ }),

/***/ "./src/np.min.js":
/*!***********************!*\
  !*** ./src/np.min.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var NP={initId:\"\",routes:[],checkRouter:function(){var a=this.routes.length;if(0<a)for(var c=location.pathname,b=0;b<a;b++)this.routes[b].path==c&&this.initTemplate(this.routes[b].template)},initTemplate:function(a){document.title=a.title;document.getElementById(this.initId).innerHTML=a.html;this.initEventToClickRoute()},initCss:function(){var a=document.createElement(\"style\");a.innerHTML=\"\\n\\t\\t\\troute {\\n\\t\\t\\t\\tcolor: -webkit-link;\\n    \\t\\t\\tcursor: pointer;\\n    \\t\\t\\ttext-decoration: underline;\\n\\t\\t\\t}\\n\\t\\t\";\r\ndocument.head.appendChild(a)},initEventToClickRoute:function(){for(var a=this,c=document.getElementsByTagName(\"route\").length,b={$jscomp$loop$prop$i$1:0};b.$jscomp$loop$prop$i$1<c;b={$jscomp$loop$prop$i$1:b.$jscomp$loop$prop$i$1},b.$jscomp$loop$prop$i$1++)document.getElementsByTagName(\"route\")[b.$jscomp$loop$prop$i$1].onclick=function(b){return function(){history.pushState({},\"\",document.getElementsByTagName(\"route\")[b.$jscomp$loop$prop$i$1].getAttribute(\"path\"));a.checkRouter()}}(b)},checkAfterLoad:function(){var a=\r\nthis;a.initEventToClickRoute();window.onload=function(){a.checkRouter()};window.onbeforeunload=function(){a.checkRouter()};window.addEventListener(\"popstate\",function(){a.checkRouter()})},init:function(a){this.initId=a;this.initCss();this.checkAfterLoad()}};module.exports = NP;\n\n//# sourceURL=webpack:///./src/np.min.js?");

/***/ })

/******/ });