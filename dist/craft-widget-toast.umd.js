/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Craft"));
	else if(typeof define === 'function' && define.amd)
		define(["Craft"], factory);
	else if(typeof exports === 'object')
		exports["Toast"] = factory(require("Craft"));
	else
		root["Toast"] = factory(root["Craft"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__craftkit_craft_uikit__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst Toast = __webpack_require__(/*! ./main.js */ \"./main.js\");\n\nmodule.exports = Toast.default || Toast;\n\n\n//# sourceURL=webpack://Toast/./index.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_Toast_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Toast.js */ \"./src/Toast.js\");\n\n\n\nconst Packages = {\n\tToast : _src_Toast_js__WEBPACK_IMPORTED_MODULE_0__.Toast\n};\n\nPackages.inject = function(Craft){\n\tCraft.Widget = Craft.Widget || {};\n\tif( !Craft.Widget.Toast ){\n\t\tCraft.Widget.Toast = Packages;\n\t}\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Packages);\n\n\n\n//# sourceURL=webpack://Toast/./main.js?");

/***/ }),

/***/ "./src/Toast.js":
/*!**********************!*\
  !*** ./src/Toast.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Toast\": () => (/* binding */ Toast)\n/* harmony export */ });\n/* harmony import */ var _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @craftkit/craft-uikit */ \"@craftkit/craft-uikit\");\n/* harmony import */ var _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ToastPanel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToastPanel.js */ \"./src/ToastPanel.js\");\n\n\n\n\n\n/** \n * Toast \n * \n * @packagename Craft.Widget.Toast\n * \n * @example\n * \n * const toast = new Toast();\n * this.appendView(toast);\n * toast.show(\"Hello World\");\n * \n * const toast = new Craft.Widget.Toast({\n *     title    : \"My first toast\",\n *     message  : \"This is my first toast\",\n *     color    : \"green\",\n *     opacity  : 0.8,\n *     duration : 3000\n * });\n * toast.show();\n * \n */\nclass Toast extends _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__.UI.View {\n\n    /**\n     * Toast constructor\n     * \n     * @param {Object} options - options\n     */\n    constructor(options) {\n        super();\n        this.packagename = \"Craft.Widget.Toast\";\n        if (!options) { options = {}; }\n    }\n\n    show(options) {\n        if (options instanceof String) {\n            options = { message: options };\n        }\n        if (!options) { options = {}; }\n        let panel = new _ToastPanel_js__WEBPACK_IMPORTED_MODULE_1__.ToastPanel(options);\n        this.appendView(panel);\n    }\n\n    /**\n     * style\n     * @protected\n     */\n    style(componentId) {\n        return `\n            :host {\n                position: fixed;\n                min-width: 250px;\n                height: auto;\n                bottom: 20px;\n                right: 20px;\n            }\n\t\t\t.root {\n                display: flex;\n                flex-direction: column;\n                justify-content: flex-end;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t}\n\t\t`;\n    }\n\n    /**\n     * template\n     * @protected\n     */\n    template(componentId) {\n        return `\n\t\t\t<div class=\"root\">\n\t\t\t</div>\n\t\t`;\n    }\n\n}\n\n\n//# sourceURL=webpack://Toast/./src/Toast.js?");

/***/ }),

/***/ "./src/ToastPanel.js":
/*!***************************!*\
  !*** ./src/ToastPanel.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToastPanel\": () => (/* binding */ ToastPanel)\n/* harmony export */ });\n/* harmony import */ var _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @craftkit/craft-uikit */ \"@craftkit/craft-uikit\");\n/* harmony import */ var _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nclass ToastPanel extends _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__.UI.View {\n    /**\n     * ToastPanel constructor\n     * \n     * @param {Object} options - options\n     * @param {string} options.title - title\n     * @param {string} options.message - message\n     * @param {string} options.color - color\n     * @param {string} options.textColor - text color\n     * @param {number} options.opacity - opacity\n     * @param {number} options.duration - duration\n     */\n    constructor(options) {\n        super();\n        this.packagename = \"Craft.Widget.ToastPanel\";\n\n        if (!options) { options = {}; }\n\n        this.title = options.title || \"\";\n        this.message = options.message || \"\";\n        this.color = options.color || \"#333333\";\n        this.textColor = options.textColor || \"white\";\n        this.opacity = options.opacity || 0.8;\n        this.duration = options.duration || 3000;\n    }\n\n    viewDidAppear(callback) {\n        this.root.style.visibility = \"visible\";\n        _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__.Core.Transition.animate({\n            element: this.root,\n            properties: { \"opacity\": this.opacity },\n            duration: 100,\n            callback: () => {\n                setTimeout(() => {\n                    _craftkit_craft_uikit__WEBPACK_IMPORTED_MODULE_0__.Core.Transition.animate({\n                        element: this.root,\n                        properties: { \"opacity\": 0 },\n                        duration: 100,\n                        callback: () => {\n                            this.unloadView();\n                        }\n                    });\n                }, this.duration);\n            }\n        });\n        if (callback) { callback(); }\n    }\n\n    /**\n     * style\n     * @protected\n     */\n    style(componentId) {\n        return `\n            :host {\n            }\n\t\t\t.root {\n                visibility: hidden;\n                display: flex;\n                flex-direction: column;\n\t\t\t\tbox-sizing: border-box;\n                margin-top: 10px;\n                padding: 10px;\n                border-radius: 5px;\n                background-color: ${this.color};\n                opacity: 0.1;\n                color: ${this.textColor};\n                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n            }\n            .show {\n                transform: translateY(-10px);\n            }\n            .title {\n                font-size: 16px;\n                font-weight: bold;\n                margin-bottom: 5px;\n            }\n            .message {\n                font-size: 14px;\n                font-weight: normal;\n            }\n\t\t`;\n    }\n\n    /**\n     * template\n     * @protected\n     */\n    template(componentId) {\n        return `\n\t\t\t<div class=\"root\">\n                <div id=\"title\">${this.title}</div>\n                <div id=\"message\">${this.message}</div>\n\t\t\t</div>\n\t\t`;\n    }\n}\n\n\n//# sourceURL=webpack://Toast/./src/ToastPanel.js?");

/***/ }),

/***/ "@craftkit/craft-uikit":
/*!************************!*\
  !*** external "Craft" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__craftkit_craft_uikit__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});