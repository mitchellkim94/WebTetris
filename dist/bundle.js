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

/***/ "./src/class/BarBlock.ts":
/*!*******************************!*\
  !*** ./src/class/BarBlock.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BarBlock)\n/* harmony export */ });\n/* harmony import */ var _BasicBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicBlock */ \"./src/class/BasicBlock.ts\");\n\nclass BarBlock extends _BasicBlock__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(x, y, w, h) {\n        super(x, y, w, h);\n    }\n    changeShape() {\n        if (this.shape > 1) {\n            this.shape = 1;\n        }\n        else {\n            this.shape++;\n        }\n    }\n    coordinateShape() {\n        switch (this.shape) {\n            case 1: return [\n                { x: this.x, y: this.y },\n                { x: this.x, y: this.y + this.h },\n                { x: this.x, y: this.y + this.h * 2 },\n                { x: this.x, y: this.y + this.h * 3 },\n            ];\n            case 2: return [\n                { x: this.x, y: this.y },\n                { x: this.x + this.w, y: this.y },\n                { x: this.x + this.w * 2, y: this.y },\n                { x: this.x + this.w * 3, y: this.y },\n            ];\n            default: return [\n                { x: this.x, y: this.y },\n                { x: this.x, y: this.y + this.h },\n                { x: this.x, y: this.y + this.h * 2 },\n                { x: this.x, y: this.y + this.h * 3 },\n            ];\n        }\n    }\n}\n\n\n//# sourceURL=webpack://tetris/./src/class/BarBlock.ts?");

/***/ }),

/***/ "./src/class/BasicBlock.ts":
/*!*********************************!*\
  !*** ./src/class/BasicBlock.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TetrisBlock)\n/* harmony export */ });\n;\n/**\n * Class\n */\nclass TetrisBlock {\n    constructor(x, y, w, h) {\n        this._shape = 1;\n        this._pixelTo = 0;\n        this._x = x;\n        this._y = y;\n        this._w = w;\n        this._h = h;\n    }\n    ;\n    /**\n     * Getters\n     */\n    get x() {\n        return this._x;\n    }\n    get y() {\n        return this._y;\n    }\n    get w() {\n        return this._w;\n    }\n    get h() {\n        return this._h;\n    }\n    get shape() {\n        return this._shape;\n    }\n    get pixelTo() {\n        return this._pixelTo;\n    }\n    /**\n     * Setters\n     */\n    set x(x) {\n        if (x < 0)\n            throw new Error(\"coords X is too small\");\n        this._x = x;\n    }\n    set y(y) {\n        if (y < 0)\n            throw new Error(\"coords Y is too small\");\n        this._y = y;\n    }\n    set w(w) {\n        if (w < 0)\n            throw new Error(\"Width is too small\");\n        this._w = w;\n    }\n    set h(h) {\n        if (h < 0)\n            throw new Error(\"Height is too small\");\n        this._h = h;\n    }\n    set shape(state) {\n        this._shape = state;\n    }\n    set pixelTo(pixel) {\n        this._pixelTo = pixel;\n    }\n    changeBack() {\n        this.shape--;\n    }\n    moveX(pixel) {\n        const xPixel = this.x + pixel;\n        this.x = xPixel > 0 ? xPixel : 0;\n    }\n    moveY() {\n        this.y = this.pixelTo > this.h\n            ? this.y + this.h\n            : this.y + this.pixelTo;\n        this.pixelTo = 0;\n    }\n    draw(ctx, style) {\n        for (const coord of this.coordinateShape()) {\n            ctx.fillStyle = style + '80';\n            ctx.fillRect(coord.x, coord.y, this.w, this.h);\n        }\n    }\n}\n\n\n//# sourceURL=webpack://tetris/./src/class/BasicBlock.ts?");

/***/ }),

/***/ "./src/class/HatBlock.ts":
/*!*******************************!*\
  !*** ./src/class/HatBlock.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HatBlock)\n/* harmony export */ });\n/* harmony import */ var _BasicBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicBlock */ \"./src/class/BasicBlock.ts\");\n\nclass HatBlock extends _BasicBlock__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(x, y, w, h) {\n        super(x, y, w, h);\n    }\n    changeShape() {\n        if (this.shape > 3) {\n            this.shape = 1;\n        }\n        else {\n            this.shape++;\n        }\n    }\n    coordinateShape() {\n        switch (this.shape) {\n            case 1: return [\n                { x: this.x, y: this.y },\n                { x: this.x - this.w, y: this.y + this.h },\n                { x: this.x, y: this.y + this.h },\n                { x: this.x + this.w, y: this.y + this.h },\n            ];\n            case 2: return [\n                { x: this.x, y: this.y },\n                { x: this.x - this.w, y: this.y - this.h },\n                { x: this.x - this.w, y: this.y },\n                { x: this.x - this.w, y: this.y + this.h },\n            ];\n            case 3: return [\n                { x: this.x, y: this.y },\n                { x: this.x - this.w, y: this.y - this.h },\n                { x: this.x, y: this.y - this.h },\n                { x: this.x + this.w, y: this.y - this.h },\n            ];\n            case 4: return [\n                { x: this.x, y: this.y },\n                { x: this.x + this.w, y: this.y - this.h },\n                { x: this.x + this.w, y: this.y },\n                { x: this.x + this.w, y: this.y + this.h },\n            ];\n            default: return [\n                { x: this.x, y: this.y },\n                { x: this.x + this.w, y: this.y - this.h },\n                { x: this.x + this.w, y: this.y },\n                { x: this.x + this.w, y: this.y - this.h },\n            ];\n        }\n    }\n}\n\n\n//# sourceURL=webpack://tetris/./src/class/HatBlock.ts?");

/***/ }),

/***/ "./src/class/Playground.ts":
/*!*********************************!*\
  !*** ./src/class/Playground.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Playground)\n/* harmony export */ });\nclass Playground {\n    constructor(g_width, g_height, b_width, b_height) {\n        this.coords = [];\n        this.stackCount = [];\n        this._groundWidth = g_width;\n        this._groundHeight = g_height;\n        this._blockWidth = b_width;\n        this._blockHeight = b_height;\n    }\n    /**\n     * Getters\n     */\n    get G_WIDTH() {\n        return this._groundWidth;\n    }\n    get G_HEIGHT() {\n        return this._groundHeight;\n    }\n    get B_WIDTH() {\n        return this._blockWidth;\n    }\n    get B_HEIGHT() {\n        return this._blockHeight;\n    }\n    get MAX_X_INDEX() {\n        return (this.G_WIDTH / this.B_WIDTH) - 1;\n    }\n    get MAX_Y_INDEX() {\n        return (this.G_HEIGHT / this.B_HEIGHT) - 1;\n    }\n    get ground() {\n        return this.coords;\n    }\n    /**\n     * Methods\n     */\n    getCoordX(x) {\n        return Math.floor(x / this.B_WIDTH);\n    }\n    getCoordY(y) {\n        return Math.floor(y / this.B_HEIGHT);\n    }\n    getCoordBottomY(y) {\n        return Math.ceil(y / this.B_HEIGHT);\n    }\n    makeGround() {\n        for (let i = 0; i <= this.MAX_X_INDEX; i++) {\n            this.coords[i] = [];\n            for (let j = 0; j <= this.MAX_Y_INDEX; j++) {\n                this.coords[i][j] = 0;\n                if (i === 0) {\n                    this.stackCount.push(0);\n                }\n            }\n        }\n    }\n    recordBlockOnGround(x, y) {\n        this.coords[x][y] = 1;\n        this.stackCount[y] += 1;\n    }\n    drawBlocksOnGround(ctx, style) {\n        ctx.fillStyle = style;\n        for (let i = 0; i < this.G_WIDTH / this.B_WIDTH; i++) {\n            for (let j = 0; j < this.G_HEIGHT / this.B_HEIGHT; j++) {\n                if (this.coords[i][j] === 1) {\n                    ctx.fillRect(i * this.B_WIDTH, j * this.B_HEIGHT, this.B_WIDTH, this.B_HEIGHT);\n                }\n            }\n        }\n    }\n}\n\n\n//# sourceURL=webpack://tetris/./src/class/Playground.ts?");

/***/ }),

/***/ "./src/class/SquareBlock.ts":
/*!**********************************!*\
  !*** ./src/class/SquareBlock.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HatBlock)\n/* harmony export */ });\n/* harmony import */ var _BasicBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicBlock */ \"./src/class/BasicBlock.ts\");\n\nclass HatBlock extends _BasicBlock__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(x, y, w, h) {\n        super(x, y, w, h);\n    }\n    changeShape() {\n        return;\n    }\n    coordinateShape() {\n        return [\n            { x: this.x, y: this.y },\n            { x: this.x + this.w, y: this.y },\n            { x: this.x, y: this.y + this.h },\n            { x: this.x + this.w, y: this.y + this.h },\n        ];\n    }\n}\n\n\n//# sourceURL=webpack://tetris/./src/class/SquareBlock.ts?");

/***/ }),

/***/ "./src/controls.ts":
/*!*************************!*\
  !*** ./src/controls.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"willCollideY\": () => (/* binding */ willCollideY),\n/* harmony export */   \"forceCrashBlock\": () => (/* binding */ forceCrashBlock),\n/* harmony export */   \"rotateBlock\": () => (/* binding */ rotateBlock),\n/* harmony export */   \"moveDown\": () => (/* binding */ moveDown),\n/* harmony export */   \"moveRight\": () => (/* binding */ moveRight),\n/* harmony export */   \"moveLeft\": () => (/* binding */ moveLeft)\n/* harmony export */ });\n/**\n * 블룩 충돌 검사\n */\nfunction willCollideY(nextBlock, playground) {\n    for (const coords of nextBlock.coordinateShape()) {\n        const gX = playground.getCoordX(coords.x);\n        const gY = playground.getCoordY(coords.y);\n        const gBY = playground.getCoordBottomY(coords.y);\n        if (gX < 0 ||\n            gX > playground.MAX_X_INDEX ||\n            gBY > playground.MAX_Y_INDEX ||\n            playground.ground[gX][gBY] === 1 ||\n            playground.ground[gX][gY] === 1)\n            return true;\n    }\n    return false;\n}\nfunction willCollideX(nextBlock, playground) {\n    for (const coords of nextBlock.coordinateShape()) {\n        const gX = playground.getCoordX(coords.x);\n        const gY = playground.getCoordY(coords.y);\n        const gBY = playground.getCoordBottomY(coords.y);\n        if (gX < 0 ||\n            gX > playground.MAX_X_INDEX ||\n            gY > playground.MAX_Y_INDEX ||\n            playground.ground[gX][gY] === 1 ||\n            playground.ground[gX][gBY] === 1)\n            return true;\n    }\n    return false;\n}\n/**\n * @spacebar 블록 강제 충돌\n */\nfunction forceCrashBlock(block, playground) {\n    // 현재 x 값들 찾기\n    // 각 x 값의 현재 y와 playground의 y의 좌표차이가 가장 작은 애를 찾기\n    // 가장 작은애 만큼 기준 점의 y를 이동시키기\n    let amountOfMoveY = playground.MAX_Y_INDEX;\n    for (const coords of block.coordinateShape()) {\n        let gY = playground.coords[playground.getCoordX(coords.x)].findIndex(el => { return el === 1; });\n        if (gY < 0)\n            gY = playground.MAX_Y_INDEX + 1;\n        const distance = gY - playground.getCoordY(coords.y) - 1;\n        if (amountOfMoveY > distance)\n            amountOfMoveY = distance;\n    }\n    block.y += amountOfMoveY * block.h;\n}\n/**\n * @arrowup 블록 모양을 바꿈\n */\nfunction rotateBlock(block, playground) {\n    block.changeShape();\n    if (willCollideY(block, playground)) {\n        block.changeBack();\n    }\n}\n/**\n * @arrowdown 블록을 아래로 이동\n */\nfunction moveDown(block) {\n    block.pixelTo = block.h;\n}\n/**\n * @arrowright 블록을 오른쪽으로 이동\n */\nfunction moveRight(block, playground) {\n    block.moveX(block.w);\n    if (willCollideX(block, playground)) {\n        console.log(\"충돌\");\n        block.moveX(-block.w);\n    }\n}\n/**\n * @arrowleft 블록을 왼쪽으로 이동\n */\nfunction moveLeft(block, playground) {\n    block.moveX(-block.w);\n    if (willCollideX(block, playground)) {\n        console.log(\"충돌\");\n        block.moveX(block.w);\n    }\n}\n\n\n//# sourceURL=webpack://tetris/./src/controls.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class_BarBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/BarBlock */ \"./src/class/BarBlock.ts\");\n/* harmony import */ var _class_SquareBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class/SquareBlock */ \"./src/class/SquareBlock.ts\");\n/* harmony import */ var _class_HatBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class/HatBlock */ \"./src/class/HatBlock.ts\");\n/* harmony import */ var _class_Playground__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class/Playground */ \"./src/class/Playground.ts\");\n/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls */ \"./src/controls.ts\");\n\n\n\n\n\nconst gameCanvas = document.querySelector(\"#game_canvas\");\nconst gameCtx = gameCanvas.getContext(\"2d\");\nconst GROUND_X = 0;\nconst GROUND_Y = 0;\nconst GROUND_WIDTH = 300;\nconst GROUND_HEIGHT = 600;\nconst BLOCK_WIDTH = 25;\nconst BLOCK_HEIGHT = 25;\nconst playground = new _class_Playground__WEBPACK_IMPORTED_MODULE_3__[\"default\"](GROUND_WIDTH, GROUND_HEIGHT, BLOCK_WIDTH, BLOCK_HEIGHT);\nplayground.makeGround();\nlet falling;\ngameCanvas.width = GROUND_WIDTH;\ngameCanvas.height = GROUND_HEIGHT;\nfunction initializeFalling() {\n    const random = Math.floor(Math.random() * 3);\n    switch (random) {\n        case 0: return falling = new _class_BarBlock__WEBPACK_IMPORTED_MODULE_0__[\"default\"](GROUND_WIDTH / 2, GROUND_Y, BLOCK_WIDTH, BLOCK_HEIGHT);\n        case 1: return falling = new _class_HatBlock__WEBPACK_IMPORTED_MODULE_2__[\"default\"](GROUND_WIDTH / 2, GROUND_Y, BLOCK_WIDTH, BLOCK_HEIGHT);\n        case 2: return falling = new _class_SquareBlock__WEBPACK_IMPORTED_MODULE_1__[\"default\"](GROUND_WIDTH / 2, GROUND_Y, BLOCK_WIDTH, BLOCK_HEIGHT);\n        default: falling = new _class_BarBlock__WEBPACK_IMPORTED_MODULE_0__[\"default\"](GROUND_WIDTH / 2, GROUND_Y, BLOCK_WIDTH, BLOCK_HEIGHT);\n    }\n}\nfunction moveBlock(e) {\n    switch (e.key) {\n        case ' ': return (0,_controls__WEBPACK_IMPORTED_MODULE_4__.forceCrashBlock)(falling, playground);\n        case 'ArrowUp': return (0,_controls__WEBPACK_IMPORTED_MODULE_4__.rotateBlock)(falling, playground);\n        case 'ArrowDown': return (0,_controls__WEBPACK_IMPORTED_MODULE_4__.moveDown)(falling);\n        case 'ArrowRight': return (0,_controls__WEBPACK_IMPORTED_MODULE_4__.moveRight)(falling, playground);\n        case 'ArrowLeft': return (0,_controls__WEBPACK_IMPORTED_MODULE_4__.moveLeft)(falling, playground);\n        default: return;\n    }\n}\nfunction lineClear(stacktedY, playground) {\n    for (const y of stacktedY) {\n        if (playground.stackCount[y] > playground.MAX_X_INDEX) {\n            for (let x = 0; x <= playground.MAX_X_INDEX; x++) {\n                playground.coords[x].splice(y, 1);\n                playground.coords[x].unshift(0);\n            }\n            playground.stackCount.splice(y, 1);\n            playground.stackCount.unshift(0);\n        }\n    }\n}\nfunction stack(blockCoords, playground) {\n    const stackedY = new Set();\n    for (const coords of blockCoords) {\n        const x = playground.getCoordX(coords.x);\n        const y = playground.getCoordY(coords.y);\n        playground.recordBlockOnGround(x, y);\n        stackedY.add(y);\n    }\n    lineClear(stackedY, playground);\n}\nfunction draw() {\n    gameCtx.clearRect(GROUND_X, GROUND_Y, GROUND_WIDTH, GROUND_HEIGHT);\n    playground.drawBlocksOnGround(gameCtx, '#00B0FF');\n    falling.draw(gameCtx, '#F50057');\n    falling.pixelTo += 1;\n    falling.moveY();\n    if ((0,_controls__WEBPACK_IMPORTED_MODULE_4__.willCollideY)(falling, playground)) {\n        stack(falling.coordinateShape(), playground);\n        initializeFalling();\n    }\n    requestAnimationFrame(draw);\n}\nfunction init() {\n    addEventListener(\"keydown\", moveBlock);\n    initializeFalling();\n    requestAnimationFrame(draw);\n}\ninit();\n\n\n//# sourceURL=webpack://tetris/./src/index.ts?");

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