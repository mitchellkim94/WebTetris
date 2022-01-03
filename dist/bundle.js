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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BarBlock)\n/* harmony export */ });\n/* harmony import */ var _BasicBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicBlock */ \"./src/class/BasicBlock.ts\");\n\nclass BarBlock extends _BasicBlock__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(x, y) {\n        super(x, y);\n    }\n    changeShape() {\n        if (this.shape > 2) {\n            this.shape = 1;\n        }\n        else {\n            this.shape++;\n        }\n    }\n    coordinateShape() {\n        switch (this.shape) {\n            case 1:\n                this.shapeCoords = [\n                    [1, 1, 1, 1],\n                    [0, 0, 0, 0],\n                    [0, 0, 0, 0],\n                    [0, 0, 0, 0],\n                ];\n                break;\n            case 2:\n                this.shapeCoords = [\n                    [0, 1, 0, 0],\n                    [0, 1, 0, 0],\n                    [0, 1, 0, 0],\n                    [0, 1, 0, 0],\n                ];\n                break;\n            default:\n                this.shapeCoords = [\n                    [1, 1, 1, 1],\n                    [0, 0, 0, 0],\n                    [0, 0, 0, 0],\n                    [0, 0, 0, 0],\n                ];\n        }\n    }\n}\n\n\n//# sourceURL=webpack://tetris/./src/class/BarBlock.ts?");

/***/ }),

/***/ "./src/class/BasicBlock.ts":
/*!*********************************!*\
  !*** ./src/class/BasicBlock.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TetrisBlock)\n/* harmony export */ });\n/**\n * Class\n */\nclass TetrisBlock {\n    constructor(x, y) {\n        this._shape = 1;\n        this._shapeCoords = [];\n        this._x = x;\n        this._y = y;\n    }\n    ;\n    /**\n     * Getters\n     */\n    get x() {\n        return this._x;\n    }\n    get y() {\n        return this._y;\n    }\n    get shape() {\n        return this._shape;\n    }\n    get shapeCoords() {\n        return this._shapeCoords;\n    }\n    /**\n     * Setters\n     */\n    set x(x) {\n        this._x = x;\n    }\n    set y(y) {\n        this._y = y;\n    }\n    set shape(state) {\n        this._shape = state;\n    }\n    set shapeCoords(coords) {\n        this._shapeCoords = coords;\n    }\n    changeBack() {\n        this.shape--;\n    }\n    moveX(x) {\n        this.x += x;\n    }\n    moveY(y) {\n        this.y += y;\n    }\n    draw(ctx, style) {\n        ctx.fillStyle = style;\n        this.shapeCoords.forEach((rows, y) => {\n            rows.forEach((value, x) => {\n                if (value > 0) {\n                    ctx.fillRect(this.x + x, this.y + y, 1, 1);\n                }\n            });\n        });\n    }\n}\n\n\n//# sourceURL=webpack://tetris/./src/class/BasicBlock.ts?");

/***/ }),

/***/ "./src/class/HatBlock.ts":
/*!*******************************!*\
  !*** ./src/class/HatBlock.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HatBlock)\n/* harmony export */ });\n/* harmony import */ var _BasicBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicBlock */ \"./src/class/BasicBlock.ts\");\n\nclass HatBlock extends _BasicBlock__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(x, y) {\n        super(x, y);\n    }\n    changeShape() {\n        if (this.shape > 3) {\n            this.shape = 1;\n        }\n        else {\n            this.shape++;\n        }\n    }\n    coordinateShape() {\n        switch (this.shape) {\n            case 1:\n                this.shapeCoords = [\n                    [0, 1, 0],\n                    [1, 1, 1],\n                    [0, 0, 0]\n                ];\n                break;\n            case 2:\n                this.shapeCoords = [\n                    [1, 0, 0],\n                    [1, 1, 0],\n                    [1, 0, 0]\n                ];\n                break;\n            case 3:\n                this.shapeCoords = [\n                    [1, 1, 1],\n                    [0, 1, 0],\n                    [0, 0, 0]\n                ];\n                break;\n            case 4:\n                this.shapeCoords = [\n                    [0, 0, 1],\n                    [0, 1, 1],\n                    [0, 0, 1]\n                ];\n                break;\n            default:\n                this.shapeCoords = [\n                    [0, 1, 0],\n                    [1, 1, 1],\n                    [0, 0, 0]\n                ];\n        }\n    }\n}\n\n\n//# sourceURL=webpack://tetris/./src/class/HatBlock.ts?");

/***/ }),

/***/ "./src/class/LBlock.ts":
/*!*****************************!*\
  !*** ./src/class/LBlock.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LBlock)\n/* harmony export */ });\n/* harmony import */ var _BasicBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicBlock */ \"./src/class/BasicBlock.ts\");\n\nclass LBlock extends _BasicBlock__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(x, y) {\n        super(x, y);\n    }\n    changeShape() {\n        if (this.shape > 3) {\n            this.shape = 1;\n        }\n        else {\n            this.shape++;\n        }\n    }\n    coordinateShape() {\n        switch (this.shape) {\n            case 1:\n                this.shapeCoords = [\n                    [1, 0, 0],\n                    [1, 0, 0],\n                    [1, 1, 0]\n                ];\n                break;\n            case 2:\n                this.shapeCoords = [\n                    [1, 1, 1],\n                    [1, 0, 0],\n                    [0, 0, 0]\n                ];\n                break;\n            case 3:\n                this.shapeCoords = [\n                    [0, 1, 1],\n                    [0, 0, 1],\n                    [0, 0, 1]\n                ];\n                break;\n            case 4:\n                this.shapeCoords = [\n                    [0, 0, 0],\n                    [0, 0, 1],\n                    [1, 1, 1]\n                ];\n                break;\n            default:\n                this.shapeCoords = [\n                    [1, 0, 0],\n                    [1, 0, 0],\n                    [1, 1, 0]\n                ];\n        }\n    }\n}\n\n\n//# sourceURL=webpack://tetris/./src/class/LBlock.ts?");

/***/ }),

/***/ "./src/class/Playground.ts":
/*!*********************************!*\
  !*** ./src/class/Playground.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Playground)\n/* harmony export */ });\nclass Playground {\n    constructor(bWidth, bHeight, cols, rows) {\n        this.coords = [];\n        this.stackCount = [];\n        this._blockWidth = bWidth;\n        this._blockHeight = bHeight;\n        this._cols = cols;\n        this._rows = rows;\n    }\n    /**\n     * Getters\n     */\n    get cols() {\n        return this._cols;\n    }\n    get rows() {\n        return this._rows;\n    }\n    get B_WIDTH() {\n        return this._blockWidth;\n    }\n    get B_HEIGHT() {\n        return this._blockHeight;\n    }\n    get GROUND_WIDTH() {\n        return this.cols * this.B_WIDTH;\n    }\n    get GROUND_HEIGHT() {\n        return this.rows * this.B_HEIGHT;\n    }\n    get MAX_X_INDEX() {\n        return this._cols - 1;\n    }\n    get MAX_Y_INDEX() {\n        return this._rows - 1;\n    }\n    get ground() {\n        return this.coords;\n    }\n    /**\n     * Methods\n     */\n    getCoordX(x) {\n        return Math.floor(x / this.B_WIDTH);\n    }\n    getCoordY(y) {\n        return Math.floor(y / this.B_HEIGHT);\n    }\n    getCoordBottomY(y) {\n        return Math.ceil(y / this.B_HEIGHT);\n    }\n    makeGround() {\n        for (let i = 0; i <= this.MAX_X_INDEX; i++) {\n            this.coords[i] = [];\n            for (let j = 0; j <= this.MAX_Y_INDEX; j++) {\n                this.coords[i][j] = 0;\n                if (i === 0) {\n                    this.stackCount.push(0);\n                }\n            }\n        }\n    }\n    recordBlockOnGround(x, y, colorIndex) {\n        this.coords[x][y] = 1 + colorIndex;\n        this.stackCount[y] += 1;\n    }\n    drawBlocksOnGround(ctx, style) {\n        this.ground.forEach((rows, x) => {\n            rows.forEach((value, y) => {\n                if (value > 0) {\n                    ctx.fillStyle = style[value - 1];\n                    ctx.fillRect(x, y, 1, 1);\n                }\n            });\n        });\n    }\n}\n\n\n//# sourceURL=webpack://tetris/./src/class/Playground.ts?");

/***/ }),

/***/ "./src/class/ReverseLBlock.ts":
/*!************************************!*\
  !*** ./src/class/ReverseLBlock.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ReverseLBlock)\n/* harmony export */ });\n/* harmony import */ var _BasicBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicBlock */ \"./src/class/BasicBlock.ts\");\n\nclass ReverseLBlock extends _BasicBlock__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(x, y) {\n        super(x, y);\n    }\n    changeShape() {\n        if (this.shape > 3) {\n            this.shape = 1;\n        }\n        else {\n            this.shape++;\n        }\n    }\n    coordinateShape() {\n        switch (this.shape) {\n            case 1:\n                this.shapeCoords = [\n                    [0, 0, 1],\n                    [0, 0, 1],\n                    [0, 1, 1]\n                ];\n                break;\n            case 2:\n                this.shapeCoords = [\n                    [0, 0, 0],\n                    [1, 0, 0],\n                    [1, 1, 1]\n                ];\n                break;\n            case 3:\n                this.shapeCoords = [\n                    [1, 1, 0],\n                    [1, 0, 0],\n                    [1, 0, 0]\n                ];\n                break;\n            case 4:\n                this.shapeCoords = [\n                    [1, 1, 1],\n                    [0, 0, 1],\n                    [0, 0, 0]\n                ];\n                break;\n            default:\n                this.shapeCoords = [\n                    [0, 0, 1],\n                    [0, 0, 1],\n                    [0, 1, 1]\n                ];\n        }\n    }\n}\n\n\n//# sourceURL=webpack://tetris/./src/class/ReverseLBlock.ts?");

/***/ }),

/***/ "./src/class/ReverseSBlock.ts":
/*!************************************!*\
  !*** ./src/class/ReverseSBlock.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ReverseSBlock)\n/* harmony export */ });\n/* harmony import */ var _BasicBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicBlock */ \"./src/class/BasicBlock.ts\");\n\nclass ReverseSBlock extends _BasicBlock__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(x, y) {\n        super(x, y);\n    }\n    changeShape() {\n        if (this.shape > 1) {\n            this.shape = 1;\n        }\n        else {\n            this.shape++;\n        }\n    }\n    coordinateShape() {\n        switch (this.shape) {\n            case 1:\n                this.shapeCoords = [\n                    [1, 1, 0],\n                    [0, 1, 1],\n                    [0, 0, 0]\n                ];\n                break;\n            case 2:\n                this.shapeCoords = [\n                    [0, 0, 1],\n                    [0, 1, 1],\n                    [0, 1, 0]\n                ];\n                break;\n            default:\n                this.shapeCoords = [\n                    [1, 1, 0],\n                    [0, 1, 1],\n                    [0, 0, 0]\n                ];\n        }\n    }\n}\n\n\n//# sourceURL=webpack://tetris/./src/class/ReverseSBlock.ts?");

/***/ }),

/***/ "./src/class/SBlock.ts":
/*!*****************************!*\
  !*** ./src/class/SBlock.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SBlock)\n/* harmony export */ });\n/* harmony import */ var _BasicBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicBlock */ \"./src/class/BasicBlock.ts\");\n\nclass SBlock extends _BasicBlock__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(x, y) {\n        super(x, y);\n    }\n    changeShape() {\n        if (this.shape > 1) {\n            this.shape = 1;\n        }\n        else {\n            this.shape++;\n        }\n    }\n    coordinateShape() {\n        switch (this.shape) {\n            case 1:\n                this.shapeCoords = [\n                    [0, 1, 1],\n                    [1, 1, 0],\n                    [0, 0, 0]\n                ];\n                break;\n            case 2:\n                this.shapeCoords = [\n                    [1, 0, 0],\n                    [1, 1, 0],\n                    [0, 1, 0]\n                ];\n                break;\n            default:\n                this.shapeCoords = [\n                    [0, 1, 1],\n                    [1, 1, 0],\n                    [0, 0, 0]\n                ];\n        }\n    }\n}\n\n\n//# sourceURL=webpack://tetris/./src/class/SBlock.ts?");

/***/ }),

/***/ "./src/class/SquareBlock.ts":
/*!**********************************!*\
  !*** ./src/class/SquareBlock.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SquareBlock)\n/* harmony export */ });\n/* harmony import */ var _BasicBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicBlock */ \"./src/class/BasicBlock.ts\");\n\nclass SquareBlock extends _BasicBlock__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(x, y) {\n        super(x, y);\n    }\n    changeShape() {\n        this.shape = 1;\n    }\n    coordinateShape() {\n        this.shapeCoords = [\n            [1, 1],\n            [1, 1],\n        ];\n    }\n}\n\n\n//# sourceURL=webpack://tetris/./src/class/SquareBlock.ts?");

/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GROUND_X\": () => (/* binding */ GROUND_X),\n/* harmony export */   \"GROUND_Y\": () => (/* binding */ GROUND_Y),\n/* harmony export */   \"SIZE_COLS\": () => (/* binding */ SIZE_COLS),\n/* harmony export */   \"SIZE_ROWS\": () => (/* binding */ SIZE_ROWS),\n/* harmony export */   \"BLOCK_WIDTH\": () => (/* binding */ BLOCK_WIDTH),\n/* harmony export */   \"BLOCK_HEIGHT\": () => (/* binding */ BLOCK_HEIGHT),\n/* harmony export */   \"COLORS\": () => (/* binding */ COLORS)\n/* harmony export */ });\nconst GROUND_X = 0;\nconst GROUND_Y = 0;\nconst SIZE_COLS = 10;\nconst SIZE_ROWS = 20;\nconst BLOCK_WIDTH = 25;\nconst BLOCK_HEIGHT = 25;\nconst COLORS = ['red', 'blue', 'green', 'orange', 'magenta'];\n\n\n//# sourceURL=webpack://tetris/./src/constants.ts?");

/***/ }),

/***/ "./src/controls.ts":
/*!*************************!*\
  !*** ./src/controls.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stack\": () => (/* binding */ stack),\n/* harmony export */   \"isValidMove\": () => (/* binding */ isValidMove),\n/* harmony export */   \"hardDrop\": () => (/* binding */ hardDrop),\n/* harmony export */   \"rotateBlock\": () => (/* binding */ rotateBlock),\n/* harmony export */   \"moveDown\": () => (/* binding */ moveDown),\n/* harmony export */   \"moveRight\": () => (/* binding */ moveRight),\n/* harmony export */   \"moveLeft\": () => (/* binding */ moveLeft)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.ts\");\n\nlet score = 0;\nfunction clearLine(stacktedY, playground) {\n    for (const y of stacktedY) {\n        if (playground.stackCount[y] > playground.MAX_X_INDEX) {\n            for (let x = 0; x <= playground.MAX_X_INDEX; x++) {\n                playground.coords[x].splice(y, 1);\n                playground.coords[x].unshift(0);\n                score++;\n                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.scoreUp)(score);\n            }\n            playground.stackCount.splice(y, 1);\n            playground.stackCount.unshift(0);\n        }\n    }\n}\nfunction stack(stackCoords, playground, style) {\n    const stackedY = new Set();\n    stackCoords.shapeCoords.forEach((rows, y) => {\n        rows.forEach((value, x) => {\n            if (value > 0) {\n                const gX = stackCoords.x + x;\n                const gY = Math.floor(stackCoords.y + y);\n                playground.recordBlockOnGround(gX, gY, style);\n                stackedY.add(gY);\n            }\n        });\n    });\n    clearLine(stackedY, playground);\n}\n/**\n * 블룩 충돌 검사\n */\nfunction isValidMove(nextBlock, playground) {\n    return nextBlock.shapeCoords.every((rows, y) => {\n        return rows.every((value, x) => {\n            if (value > 0) {\n                const gX = nextBlock.x + x;\n                const gY = Math.floor(nextBlock.y + y);\n                const gBy = Math.ceil(nextBlock.y + y);\n                return (gBy <= playground.MAX_Y_INDEX &&\n                    playground.ground[gX][gBy] === 0 &&\n                    gX >= 0 &&\n                    gX <= playground.MAX_X_INDEX &&\n                    playground.ground[gX][gY] === 0 &&\n                    playground.ground[gX][gBy] === 0);\n            }\n            return true;\n        });\n    });\n}\nfunction isValidMoveX(nextBlock, playground) {\n    return nextBlock.shapeCoords.every((rows, y) => {\n        return rows.every((value, x) => {\n            if (value > 0) {\n                const gX = nextBlock.x + x;\n                const gY = Math.floor(nextBlock.y + y);\n                const gBy = Math.ceil(nextBlock.y + y);\n                return (gX >= 0 &&\n                    gX <= playground.MAX_X_INDEX &&\n                    playground.ground[gX][gY] === 0 &&\n                    playground.ground[gX][gBy] === 0);\n            }\n            return true;\n        });\n    });\n}\n/**\n * @spacebar 블록 강제 충돌\n */\nfunction hardDrop(block, playground) {\n    moveDown(block);\n    if (!isValidMove(block, playground)) {\n        return block.moveY(-1);\n    }\n    hardDrop(block, playground);\n}\n/**\n * @arrowup 블록 모양을 바꿈\n */\nfunction rotateBlock(block, playground) {\n    block.changeShape();\n    block.coordinateShape();\n    if (!isValidMove(block, playground)) {\n        block.changeBack();\n        block.coordinateShape();\n    }\n}\n/**\n * @arrowdown 블록을 아래로 이동\n */\nfunction moveDown(block) {\n    block.moveY(1);\n}\n/**\n * @arrowright 블록을 오른쪽으로 이동\n */\nfunction moveRight(block, playground) {\n    block.moveX(1);\n    if (!isValidMoveX(block, playground)) {\n        block.moveX(-1);\n    }\n}\n/**\n * @arrowleft 블록을 왼쪽으로 이동\n */\nfunction moveLeft(block, playground) {\n    block.moveX(-1);\n    if (!isValidMoveX(block, playground)) {\n        block.moveX(1);\n    }\n}\n\n\n//# sourceURL=webpack://tetris/./src/controls.ts?");

/***/ }),

/***/ "./src/dom.ts":
/*!********************!*\
  !*** ./src/dom.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": () => (/* binding */ $),\n/* harmony export */   \"startButton\": () => (/* binding */ startButton),\n/* harmony export */   \"scoreBoard\": () => (/* binding */ scoreBoard),\n/* harmony export */   \"leftButton\": () => (/* binding */ leftButton),\n/* harmony export */   \"upButton\": () => (/* binding */ upButton),\n/* harmony export */   \"dropButton\": () => (/* binding */ dropButton),\n/* harmony export */   \"downButton\": () => (/* binding */ downButton),\n/* harmony export */   \"rightButton\": () => (/* binding */ rightButton),\n/* harmony export */   \"clickTrigger\": () => (/* binding */ clickTrigger),\n/* harmony export */   \"scoreUp\": () => (/* binding */ scoreUp)\n/* harmony export */ });\nfunction $(id) {\n    return document.querySelector(`#${id}`);\n}\nconst startButton = $('start_btn');\nconst scoreBoard = $('score');\nconst leftButton = $('btn_left');\nconst upButton = $('btn_up');\nconst dropButton = $('btn_drop');\nconst downButton = $('btn_down');\nconst rightButton = $('btn_right');\nconst clickTrigger = (el, handler, key) => {\n    el.addEventListener(\"click\", () => {\n        handler(key);\n    });\n};\nconst scoreUp = (score) => {\n    scoreBoard.innerHTML = `${score}`;\n};\n\n\n//# sourceURL=webpack://tetris/./src/dom.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class_HatBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/HatBlock */ \"./src/class/HatBlock.ts\");\n/* harmony import */ var _class_Playground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class/Playground */ \"./src/class/Playground.ts\");\n/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ \"./src/controls.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./src/constants.ts\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom */ \"./src/dom.ts\");\n/* harmony import */ var _class_BarBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./class/BarBlock */ \"./src/class/BarBlock.ts\");\n/* harmony import */ var _class_SquareBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./class/SquareBlock */ \"./src/class/SquareBlock.ts\");\n/* harmony import */ var _class_SBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./class/SBlock */ \"./src/class/SBlock.ts\");\n/* harmony import */ var _class_ReverseSBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./class/ReverseSBlock */ \"./src/class/ReverseSBlock.ts\");\n/* harmony import */ var _class_LBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./class/LBlock */ \"./src/class/LBlock.ts\");\n/* harmony import */ var _class_ReverseLBlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./class/ReverseLBlock */ \"./src/class/ReverseLBlock.ts\");\n\n\n\n\n\n\n\n\n\n\n\n/**\n * Game\n */\nconst gameCanvas = document.querySelector(\"#game_canvas\");\nconst gameCtx = gameCanvas.getContext(\"2d\");\nconst playground = new _class_Playground__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_constants__WEBPACK_IMPORTED_MODULE_3__.BLOCK_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_3__.BLOCK_HEIGHT, _constants__WEBPACK_IMPORTED_MODULE_3__.SIZE_COLS, _constants__WEBPACK_IMPORTED_MODULE_3__.SIZE_ROWS);\nplayground.makeGround();\nlet ongoing = false;\nlet animID = 0;\nlet falling;\nlet colorIdx = 0;\ngameCanvas.width = playground.GROUND_WIDTH;\ngameCanvas.height = playground.GROUND_HEIGHT;\ngameCtx.scale(_constants__WEBPACK_IMPORTED_MODULE_3__.BLOCK_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_3__.BLOCK_HEIGHT);\nfunction initializeFalling() {\n    colorIdx = colorIdx < _constants__WEBPACK_IMPORTED_MODULE_3__.COLORS.length - 1 ? colorIdx + 1 : 0;\n    const random = Math.floor(Math.random() * 7);\n    const startPoint = Math.floor(_constants__WEBPACK_IMPORTED_MODULE_3__.SIZE_COLS / 2);\n    switch (random) {\n        case 0:\n            falling = new _class_HatBlock__WEBPACK_IMPORTED_MODULE_0__[\"default\"](startPoint, 0);\n            break;\n        case 1:\n            falling = new _class_BarBlock__WEBPACK_IMPORTED_MODULE_5__[\"default\"](startPoint, 0);\n            break;\n        case 2:\n            falling = new _class_SquareBlock__WEBPACK_IMPORTED_MODULE_6__[\"default\"](startPoint, 0);\n            break;\n        case 3:\n            falling = new _class_SBlock__WEBPACK_IMPORTED_MODULE_7__[\"default\"](startPoint, 0);\n            break;\n        case 4:\n            falling = new _class_ReverseSBlock__WEBPACK_IMPORTED_MODULE_8__[\"default\"](startPoint, 0);\n            break;\n        case 5:\n            falling = new _class_LBlock__WEBPACK_IMPORTED_MODULE_9__[\"default\"](startPoint, 0);\n            break;\n        case 6:\n            falling = new _class_ReverseLBlock__WEBPACK_IMPORTED_MODULE_10__[\"default\"](startPoint, 0);\n            break;\n        default:\n            break;\n    }\n    falling.coordinateShape();\n}\nfunction moveBlock(key) {\n    switch (key) {\n        case ' ': return (0,_controls__WEBPACK_IMPORTED_MODULE_2__.hardDrop)(falling, playground);\n        case 'ArrowUp': return (0,_controls__WEBPACK_IMPORTED_MODULE_2__.rotateBlock)(falling, playground);\n        case 'ArrowDown': return (0,_controls__WEBPACK_IMPORTED_MODULE_2__.moveDown)(falling);\n        case 'ArrowRight': return (0,_controls__WEBPACK_IMPORTED_MODULE_2__.moveRight)(falling, playground);\n        case 'ArrowLeft': return (0,_controls__WEBPACK_IMPORTED_MODULE_2__.moveLeft)(falling, playground);\n        default: return;\n    }\n}\nfunction draw() {\n    gameCtx.clearRect(_constants__WEBPACK_IMPORTED_MODULE_3__.GROUND_X, _constants__WEBPACK_IMPORTED_MODULE_3__.GROUND_Y, _constants__WEBPACK_IMPORTED_MODULE_3__.SIZE_COLS, _constants__WEBPACK_IMPORTED_MODULE_3__.SIZE_ROWS);\n    gameCtx.fillStyle = \"black\";\n    gameCtx.fillRect(0, 0, playground.GROUND_WIDTH, playground.GROUND_HEIGHT);\n    playground.drawBlocksOnGround(gameCtx, _constants__WEBPACK_IMPORTED_MODULE_3__.COLORS);\n    falling.draw(gameCtx, _constants__WEBPACK_IMPORTED_MODULE_3__.COLORS[colorIdx]);\n    falling.moveY(1 / playground.B_HEIGHT);\n    if (!(0,_controls__WEBPACK_IMPORTED_MODULE_2__.isValidMove)(falling, playground)) {\n        (0,_controls__WEBPACK_IMPORTED_MODULE_2__.stack)(falling, playground, colorIdx);\n        initializeFalling();\n    }\n    animID = requestAnimationFrame(draw);\n}\nfunction touchPad() {\n    (0,_dom__WEBPACK_IMPORTED_MODULE_4__.clickTrigger)(_dom__WEBPACK_IMPORTED_MODULE_4__.leftButton, moveBlock, 'ArrowLeft');\n    (0,_dom__WEBPACK_IMPORTED_MODULE_4__.clickTrigger)(_dom__WEBPACK_IMPORTED_MODULE_4__.upButton, moveBlock, 'ArrowUp');\n    (0,_dom__WEBPACK_IMPORTED_MODULE_4__.clickTrigger)(_dom__WEBPACK_IMPORTED_MODULE_4__.dropButton, moveBlock, ' ');\n    (0,_dom__WEBPACK_IMPORTED_MODULE_4__.clickTrigger)(_dom__WEBPACK_IMPORTED_MODULE_4__.downButton, moveBlock, 'ArrowDown');\n    (0,_dom__WEBPACK_IMPORTED_MODULE_4__.clickTrigger)(_dom__WEBPACK_IMPORTED_MODULE_4__.rightButton, moveBlock, 'ArrowRight');\n}\nfunction init() {\n    gameCtx.fillStyle = \"black\";\n    gameCtx.fillRect(0, 0, playground.GROUND_WIDTH, playground.GROUND_HEIGHT);\n    addEventListener(\"keydown\", e => {\n        moveBlock(e.key);\n    });\n    initializeFalling();\n    _dom__WEBPACK_IMPORTED_MODULE_4__.startButton.addEventListener(\"click\", () => {\n        ongoing = !ongoing;\n        if (ongoing) {\n            animID = requestAnimationFrame(draw);\n            _dom__WEBPACK_IMPORTED_MODULE_4__.startButton.innerHTML = 'PAUSE';\n            _dom__WEBPACK_IMPORTED_MODULE_4__.startButton.classList.add('pause');\n        }\n        else {\n            cancelAnimationFrame(animID);\n            _dom__WEBPACK_IMPORTED_MODULE_4__.startButton.innerHTML = 'GAME START';\n            _dom__WEBPACK_IMPORTED_MODULE_4__.startButton.classList.remove('pause');\n        }\n        _dom__WEBPACK_IMPORTED_MODULE_4__.startButton.blur();\n    });\n    touchPad();\n}\ninit();\n\n\n//# sourceURL=webpack://tetris/./src/index.ts?");

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