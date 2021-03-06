var LightBox = LightBox || {}; LightBox["Overlay"] =
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
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @author Victor Häggqvist
	 * @since 2016-01-14
	 */

	var Overlay = function () {
	    function Overlay() {
	        _classCallCheck(this, Overlay);

	        this.element = document.createElement('div');
	        this.element.id = 'imagelightbox-overlay';
	    }

	    _createClass(Overlay, [{
	        key: 'register',
	        value: function register(lightbox) {
	            lightbox.addOnStartListener(this.overlayOn.bind(this));
	            lightbox.addOnEndListener(this.overlayOff.bind(this));
	        }
	    }, {
	        key: 'overlayOn',
	        value: function overlayOn() {
	            document.body.appendChild(this.element);
	        }
	    }, {
	        key: 'overlayOff',
	        value: function overlayOff() {
	            document.body.removeChild(this.element);
	        }
	    }]);

	    return Overlay;
	}();

	exports.default = Overlay;
	module.exports = exports['default'];

/***/ }
/******/ ]);