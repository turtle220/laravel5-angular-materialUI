<<<<<<< HEAD
!function(){"use strict";angular.module("app",["app.controllers","app.filters","app.services","app.components","app.routes","app.config","partialsModule"]),angular.module("app.routes",[]),angular.module("app.controllers",["ui.router","ngMaterial","ngStorage","restangular","angular-loading-bar"]),angular.module("app.filters",[]),angular.module("app.services",[]),angular.module("app.components",[]),angular.module("app.config",[])}(),function(){"use strict";angular.module("app.routes").config(["$stateProvider","$urlRouterProvider",function(t,r){var e=function(t){return"./views/app/pages/"+t+"/"+t+".html"};r.otherwise("/"),t.state("app",{"abstract":!0,views:{header:{templateUrl:e("header")},footer:{templateUrl:e("footer")},main:{}}}).state("app.landing",{url:"/",data:{},views:{"main@":{templateUrl:e("landing")}}})}])}(),function(){"use strict";angular.module("app.config").config(["cfpLoadingBarProvider",function(t){t.includeSpinner=!1}])}(),function(){"use strict";angular.module("app.config").config(["$mdThemingProvider",function(t){t.theme("default").primaryPalette("indigo").accentPalette("grey").warnPalette("red")}])}(),function(){"use strict";angular.module("app.filters").filter("capitalize",function(){return function(t){return t?t.replace(/([^\W_]+[^\s-]*) */g,function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()}):""}})}(),function(){"use strict";angular.module("app.filters").filter("humanReadable",function(){return function(t){if(!t)return"";for(var r=t.split("_"),e=0;e<r.length;e++)r[e]=r[e].charAt(0).toUpperCase()+r[e].slice(1);return r.join(" ")}})}(),function(){"use strict";angular.module("app.filters").filter("truncateCharacters",function(){return function(t,r,e){if(isNaN(r))return t;if(0>=r)return"";if(t&&t.length>r){if(t=t.substring(0,r),e)for(;" "===t.charAt(t.length-1);)t=t.substr(0,t.length-1);else{var n=t.lastIndexOf(" ");-1!==n&&(t=t.substr(0,n))}return t+"..."}return t}})}(),function(){"use strict";angular.module("app.filters").filter("truncateWords",function(){return function(t,r){if(isNaN(r))return t;if(0>=r)return"";if(t){var e=t.split(/\s+/);e.length>r&&(t=e.slice(0,r).join(" ")+"...")}return t}})}(),function(){"use strict";angular.module("app.filters").filter("trustHtml",["$sce",function(t){return function(r){return t.trustAsHtml(r)}}])}(),function(){"use strict";angular.module("app.filters").filter("ucfirst",function(){return function(t){return t?t.substring(0,1).toUpperCase()+t.substring(1):null}})}(),function(){"use strict";angular.module("app.services").factory("API",["Restangular","ToastService","$localStorage",function(t,r,e){var n={"Content-Type":"application/json",Accept:"application/x.laravel.v1+json"};return t.withConfig(function(t){t.setBaseUrl("/api/").setDefaultHeaders(n).setErrorInterceptor(function(t){if(422===t.status)for(var e in t.data.errors)return r.error(t.data.errors[e][0])}).addFullRequestInterceptor(function(t,r,n,a,i){e.jwt&&(i.Authorization="Bearer "+e.jwt)})})}])}(),function(){"use strict";angular.module("app.services").factory("DialogService",["$mdDialog",function(t){return{fromTemplate:function(r,e){return r?(e||(e={}),e.templateUrl="./views/dialogs/"+r+"/"+r+".html",t.show(e)):!1},hide:function(){return t.hide()},alert:function(r,e){t.show(t.alert().title(r).content(e).ok("Ok"))},confirm:function(r,e){return t.show(t.confirm().title(r).content(e).ok("Ok").cancel("Cancel"))}}}])}(),function(){"use strict";angular.module("app.services").factory("ToastService",["$mdToast",function(t){var r=6e3,e="top right",n="OK";return{show:function(a){return a?t.show(t.simple().content(a).position(e).action(n).hideDelay(r)):!1},error:function(a){return a?t.show(t.simple().content(a).position(e).theme("warn").action(n).hideDelay(r)):!1}}}])}(),function(){"use strict";function t(){var t=this;t.laravel_description="Response macros integrated with your Angular app",t.angular_description="Query your API without worrying about validations",t.iOS=/iPad|iPhone|iPod/.test(navigator.userAgent)}angular.module("app.controllers").controller("LandingController",t)}();
=======
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(2);

	__webpack_require__(3);

	__webpack_require__(5);

	__webpack_require__(7);

	__webpack_require__(8);

	__webpack_require__(9);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	angular.module('app', ['app.controllers', 'app.filters', 'app.services', 'app.components', 'app.routes', 'app.config', 'partialsModule']);

	angular.module('app.routes', []);
	angular.module('app.controllers', ['ui.router', 'ngMaterial', 'ngStorage', 'restangular', 'angular-loading-bar']);
	angular.module('app.filters', []);
	angular.module('app.services', []);
	angular.module('app.components', []);
	angular.module('app.config', []);

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _landing = __webpack_require__(4);

	angular.module('app.controllers').controller('LandingController', _landing.LandingController);

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LandingController = exports.LandingController = function LandingController() {
		_classCallCheck(this, LandingController);

		var vm = this;

		vm.laravel_description = 'Response macros integrated with your Angular app';
		vm.angular_description = 'Query your API without worrying about validations';

		/*
	 This is a terrible temporary hack,
	 to fix layout issues with flex on iOS (chrome & safari)
	 Make sure to remove this when you modify this demo
	 */
		vm.iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _RoutesConfig = __webpack_require__(6);

	angular.module('app.routes').config(_RoutesConfig.RoutesConfig);

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.RoutesConfig = RoutesConfig;
	function RoutesConfig($stateProvider, $urlRouterProvider) {

		var getView = function getView(viewName) {
			return './views/app/' + viewName + '/' + viewName + '.html';
		};

		$urlRouterProvider.otherwise('/');

		$stateProvider.state('app', {
			abstract: true,
			views: {
				header: {
					templateUrl: getView('header')
				},
				footer: {
					templateUrl: getView('footer')
				},
				main: {}
			}
		}).state('app.landing', {
			url: '/',
			data: {},
			views: {
				'main@': {
					templateUrl: getView('landing')
				}
			}
		});
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

/***/ }
/******/ ]);
>>>>>>> 8670b54... REfactored main.js and routes.js to fit the new ES6 syntax
