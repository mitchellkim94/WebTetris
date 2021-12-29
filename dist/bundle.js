/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _types_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/block */ \"./src/types/block.ts\");\n\nconst gameCanvas = document.querySelector(\"#game_canvas\");\nconst gameCtx = gameCanvas.getContext(\"2d\");\ngameCanvas.width = 300;\ngameCanvas.height = 600;\ngameCtx.fillStyle = 'blue';\ngameCtx.strokeRect(0, 0, 300, 600);\nclass TetrisBlock {\n    constructor(x, y, w, h) {\n        this._x = x;\n        this._y = y;\n        this._w = w;\n        this._h = h;\n    }\n    ;\n    get x() {\n        return this._x;\n    }\n    get y() {\n        return this._y;\n    }\n    get w() {\n        return this._w;\n    }\n    get h() {\n        return this._h;\n    }\n    set x(x) {\n        this._x = x;\n    }\n    set y(y) {\n        this._y = y;\n    }\n    set w(w) {\n        this._w = w;\n    }\n    set h(h) {\n        this._h = h;\n    }\n}\nconst b1 = new TetrisBlock(0, 0, 4, 4);\nfunction block(ctx, style, props) {\n    ctx.strokeStyle = _types_block__WEBPACK_IMPORTED_MODULE_0__.Colors.BLOCK_BORDER;\n    ctx.fillStyle = style;\n    ctx.strokeRect(props.x, props.y, props.w, props.h);\n    ctx.fillRect(props.x, props.y, props.w, props.h);\n}\nfunction draw() {\n    b1.x += 0.01;\n    b1.y += 0.01;\n    block(gameCtx, 'red', b1);\n}\nsetInterval(draw, 10);\n\n\n//# sourceURL=webpack://tetris/./src/index.ts?");

/***/ }),

/***/ "./src/types/block.ts":
/*!****************************!*\
  !*** ./src/types/block.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Colors\": () => (/* binding */ Colors)\n/* harmony export */ });\nconst Colors = {\n    BLOCK_BORDER: '#FFFFFF',\n};\n\n\n//# sourceURL=webpack://tetris/./src/types/block.ts?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;