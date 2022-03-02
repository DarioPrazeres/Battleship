/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class GameBoard{
    board;
    constructor(){
        this.board = [];
    }
    initialize = function(){
        for(let i = 0; i < 10; i++){
            this.board[i] = [];
            for(let j = 0; j < 10; j++){
                this.board[i][j] = 0;
            }
        }
    }
    createShip = function(y, x, length, positionS){
        if(positionS == 'h'){
            for(let j = x; j < x+length; j++){
                this.board[y][j] = 1;
            }
        }else{
            for(let i = y; i < y+length; i++){
                this.board[i][x] = 1;
            }
        }
    }
    analisePosition = function(y, x, length, positionS){
        if(length == 4){
            if(positionS == 'h'){
                if(x+length > 10){
                    return false;
                }else{
                    return true;
                }
            }else if(positionS == 'v'){
                if(y+length > 10){
                    return false;
                }else{
                    return true;
                }
            }
        }else if(y+length > 10){
            return false
        }else if(x+length > 10){
            return false
        }else{
            if(positionS == 'h'){
                return this.analiseHorizontal(y,x,length);
            }else if(positionS == 'v'){
                return this.analiseVertical(y, x, length);
            }
        }
    }
    analiseHorizontal = function(y, x, length){
    var pos = 0;
    if(x+length == 10){
        if(y==9 && x!=0){
            pos = 0;
            for(let i = y-1; i<y+1; i++){
                for(let j = x-1; j<x+length; j++){
                    pos += this.board[i][j];
                }
            }
            return this.validatePosition(pos);
        }
        if(y==0 && x!=0){
            pos = 0;
            for(let i = y; i<=y+1; i++){
                for(let j = x-1; j<x+length; j++){
                    pos += this.board[i][j];
                }
            }
            return this.validatePosition(pos);
        }else if(y!=0 && x!=0){
            pos=0;
            for(let i = y-1; i<=y+1; i++){
                for(let j = x-1; j<x+length; j++){
                    pos += this.board[i][j];
                }
            }
            return this.validatePosition(pos);
        }    
    }else if(y==0 && x==0){
        pos = 0;
        for(let i = y; i<=y+2; i++){
            for(let j = x; j<=x+length; j++){
                pos += this.board[i][j];
            }
        }
        return this.validatePosition(pos);
    }else if(y==0 && x!=0){
        pos = 0;
        for(let i = y; i<=y+1; i++){
            for(let j = x-1; j<=x+length; j++){
                pos += this.board[i][j];
            }
        }
        return this.validatePosition(pos);
    }else if(y==9 && x==0){
        pos =0;
        for(let i = y-1; i<=y; i++){
            for(let j = x; j<=x+length; j++){
                pos += this.board[i][j];
            }
        }
        return this.validatePosition(pos);
    }else if(y==9 && x!=0){
        pos =0;
        for(let i = y-1; i<=y; i++){
            for(let j = x-1; j<=x+length; j++){
                pos += this.board[i][j];
            }
        }
        return this.validatePosition(pos);
    }else if(y!=0 && x==0){
        pos =0;
        for(let i = y-1; i<=y; i++){
            for(let j = x; j<=x+length; j++){
                pos += this.board[i][j];
            }
        }
        return this.validatePosition(pos);
    }else if(y!=0 && x!=0){
        pos=0;
        for(let i = y-1; i<=y+1; i++){
            for(let j = x-1; j<=x+length; j++){
                pos += this.board[i][j];
            }
        }
        return this.validatePosition(pos);
    }
    } 
    analiseVertical = function(y, x, length){
        var pos = 0;
        if(y+length == 10){
            if(y != 0 && x == 9){
                pos=0;
                for(let i =y-1; i<y+length; i++){
                    for(let j=x-1; j<x+1; j++){
                      pos += this.board[i][j];  
                    }
                }
                return this.validatePosition(pos);
            }else if(y != 0 && x==0){
                pos=0;
                for(let i =y-1; i<y+length; i++){
                    for(let j=x; j<=x+1; j++){
                      pos += this.board[i][j];  
                    }
                }
                return this.validatePosition(pos);
            }else if(y != 0 && x != 0){
                pos=0;
                for(let i =y-1; i<y+length-1; i++){
                    for(let j=x-1; j<x+length-1; j++){
                      pos += this.board[i][j];  
                    }
                }
                return this.validatePosition(pos);
            }
        }else if(y ==0 && x==0){
            pos=0;
            for(let i =y; i<=length; i++){
                for(let j=x; j<=x+1; j++){
                  pos += this.board[i][j];  
                }
            }
            return this.validatePosition(pos);
        }else if(y == 0 && x == 9){
            pos=0;
            for(let i =y; i<y+length+1; i++){
                for(let j=x-1; j<x+1; j++){
                  pos += this.board[i][j];  
                }
            }
            return this.validatePosition(pos);
        }else if(y !=0 && x==0){
            pos=0;
            for(let i =y-1; i<y+length+1; i++){
                for(let j=x; j<x+1; j++){
                  pos += this.board[i][j];  
                }
            }
            return this.validatePosition(pos);
        }else if(y !=0 && x == 9){
            pos=0;
            for(let i =y-1; i<y+length; i++){
                for(let j=x-1; j<x+1; j++){
                  pos += this.board[i][j];  
                }
            }
            return this.validatePosition(pos);
        }else if(y !=0 && x !=0){
            pos=0;
            for(let i =y-1; i<y+length; i++){
                for(let j=x-1; j<x+length+1; j++){
                  pos += this.board[i][j];  
                }
            }
            return this.validatePosition(pos);
        }else if(y == 0 && x != 0){
            pos=0;
            for(let i =y; i<y+length; i++){
                for(let j=x-1; j<x+length-1; j++){
                  pos += this.board[i][j];  
                }
            }
            return this.validatePosition(pos);
        }
    }
    validatePosition = function(pos){
        if(pos !=0){
            return false;
        }else{
            return true;
        } 
    }
    atackShip = function(y, x){
        if(this.board[y][x] == 0){
            return false;
        }else if(this.board[y][x] == 1){        
            return true;
        }
    }
    isVictory = function(){
        var sum = 0;
        for(let i = 0; i < 10; i++){
            for(let j = 0; j < 10; j++){
                sum +=this.board[i][j];
            }
        }
        if(sum == -20){
            return 'WINNER!';
        }else{
            return 'LOSER!';
        }
    }
    position = function(number){
        if(number == 0){
            return 'h'
        }else{
            return 'v'
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);

/***/ }),

/***/ "./src/gameBoardGUI.js":
/*!*****************************!*\
  !*** ./src/gameBoardGUI.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _ramdomXY__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ramdomXY */ "./src/ramdomXY.js");


const table_1 = document.querySelector('div.table-1');
const turn = document.querySelector('button#turn');

const array = [];
var positionH = 'h';
var width = 10;
var number = 0;
table_1.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
table_1.style.gridTemplateRows = `repeat(${width}, 1fr)`; 
table_1.classList.add('table');
turn.addEventListener('click', ()=>{
    if(positionH == 'h'){
        positionH = 'v';
    }else{
        positionH = 'h';
    }
});
class GameBoardGuiPc {
    board_1 = new _gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"]();
    constructor(){

    }
    initializeGui = ()=>{
       this.board_1.initialize();
        for(let i = 0; i < 10; i++){
            array[i] = [];
            for(let j = 0; j < 10; j++){            
                const row = document.createElement('div');
                array[i][j] = row;
                row.classList.add('row');
                table_1.appendChild(row);
                row.addEventListener('click', ()=>{
                    console.log(`${i}, ${j}`)
                    this.actackShipGUI(i, j);
                });        
            }
        }  
    }
    shipGui=()=>{
        this.createShip(3, 9, 4, 'v');
        this.createShip(0, 6, 3, 'h');
        this.createShip(9, 6, 3, 'h');
        this.createShip(6, 7, 2, 'v');
        this.createShip(2, 7, 2, 'v');
        this.createShip(4, 5, 2, 'v');
        this.createShip(3, 2, 1, 'v');
        this.createShip(0, 2, 1, 'v');
        this.createShip(9, 2, 1, 'v');
        this.createShip(7, 2, 1, 'v');
    }
    createShip = (y, x, length, positionS) => {
        this.board_1.createShip(y, x, length, positionS)
        for(let i = 0; i < 10; i++){
            for(let j = 0; j < 10; j++){
                if(this.board_1.board[i][j] == 1){
                    array[i][j].classList.add('row-1');
                }
            }
        } 
    }
    actackShipGUI = (y,x)=>{
    if(this.board_1.atackShip(y, x) == false){
        this.board_1.board[y][x] = 0;
        array[y][x].classList.add('atackFailure');
        return false;
    }else if(this.board_1.atackShip(y, x) == true){
        this.board_1.board[y][x] = -1;
        array[y][x].classList.add('atackTarget');
        return true;
    }
}
analise = (index) => {
    var x = (0,_ramdomXY__WEBPACK_IMPORTED_MODULE_1__["default"])(10);
    var y = (0,_ramdomXY__WEBPACK_IMPORTED_MODULE_1__["default"])(10);
    var length = (0,_ramdomXY__WEBPACK_IMPORTED_MODULE_1__["default"])(5);
    var positionH = this.board_1.position((0,_ramdomXY__WEBPACK_IMPORTED_MODULE_1__["default"])(2));
    console.log(length);
    if(index == 0){
        if(this.board_1.analisePosition(y, x, 4, positionH) == true){
            this.createShip(y, x, 4, positionH); 
        }
    }else if(index >0 && index <3){
        if(this.board_1.analisePosition(y, x, 3, positionH) == true){
            this.createShip(y, x, 3, positionH); 
        }
    }else if(index >2 && index <6){
        if(this.board_1.analisePosition(y, x, 2, positionH) == true){
            this.createShip(y, x, 2, positionH); 
        }
    }else{
        if(this.board_1.analisePosition(y, x, 1, positionH) == true){
            this.createShip(y, x, 1, positionH); 
        }
    }
    
}
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoardGuiPc);


/***/ }),

/***/ "./src/playerPc.js":
/*!*************************!*\
  !*** ./src/playerPc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");

const table_1 = document.querySelector('div.table-0');
const turn = document.querySelector('button#turn');

const array = [];
var positionH = 'h';
var width = 10;
//var this.number = 0;
table_1.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
table_1.style.gridTemplateRows = `repeat(${width}, 1fr)`; 
table_1.classList.add('table');
turn.addEventListener('click', ()=>{
    if(positionH == 'h'){
        positionH = 'v';
    }else{
        positionH = 'h';
    }
});
class GameBoardPC {
    number;
    board_1 = new _gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"]();
    constructor(){
        this.number = 0;
    }
    initilizePlayer = ()=>{
        this.board_1.initialize();
        for(let i = 0; i < 10; i++){
            array[i] = [];
            for(let j = 0; j < 10; j++){            
                const row = document.createElement('div');
                array[i][j] = row;
                row.classList.add('row');
                table_1.appendChild(row);
                row.addEventListener('click', ()=>{
                    if(this.number < 10){             
                        if(this.board_1.analisePosition(i, j, 3, positionH) == true){
                            if(this.number == 9){
                                this.createShip(i, j, 4, positionH);
                                this.number++;
                            }else if(this.number<9 && this.number>6){
                                this.createShip(i, j, 3, positionH);
                                this.number++;
                            }else if(this.number<7 && this.number>3){
                                this.createShip(i, j, 2, positionH);
                                this.number++;
                            }else if(this.number >=0 && this.number<4){
                                this.createShip(i, j, 1, positionH);
                                this.number++;
                            }
                        }  
                    }  
                    console.log(this.number)                              
                });        
            }
        }  
    }
    actackShipGUI = (y,x)=>{
        if(this.board_1.atackShip(y, x) == false){
            this.board_1.board[y][x] = 0;
            array[y][x].classList.add('atackFailure');
            return false;
        }else if(this.board_1.atackShip(y, x) == true){
            this.board_1.board[y][x] = -1;
            array[y][x].classList.add('atackTarget');
            return true;
        }
    }
    createShip(y, x, length, positionS){
        if(positionS == 'h'){
            for(let j = x; j<x+length; j++){
                this.board_1.board[y][j] = 1;
                array[y][j].classList.add('row-1');
            }
        }else if(positionH == 'v'){
            for(let j = y; j< y+length; j++){
                array[j][x].classList.add('row-1');
                this.board_1.board[j][x] = 1;
            }        
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoardPC);


/***/ }),

/***/ "./src/ramdomXY.js":
/*!*************************!*\
  !*** ./src/ramdomXY.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showNumber)
/* harmony export */ });
function showNumber(inter){
    return Math.floor(Math.random() * inter);
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameBoardGUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoardGUI */ "./src/gameBoardGUI.js");
/* harmony import */ var _playerPc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerPc */ "./src/playerPc.js");
/* harmony import */ var _ramdomXY__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ramdomXY */ "./src/ramdomXY.js");

//import GameBoard from './gameBoard';


const table_1 = document.querySelector('div.table-1');
const turn = document.querySelector('button#turn');
const play = document.querySelector('button#play');

function game(){
    const pc = new _gameBoardGUI__WEBPACK_IMPORTED_MODULE_0__["default"];
    const player = new _playerPc__WEBPACK_IMPORTED_MODULE_1__["default"]();
    pc.initializeGui();        
    player.initilizePlayer();
    play.addEventListener('click', ()=>{
        if(player.number == 10){
            table_1.classList.add('table-d')
            console.log('entrei')
            pc.shipGui();  
            console.log(`I'm a PC ${pc.board_1.board.length}`);
            console.log(`I'm a Player ${player.board_1.board.length}`);
            
        }else{
            alert('you need a 10 Ship')
        }    
    });
}
game();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEM7QUFDNUM7QUFDcUM7QUFDRDtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFEQUFjO0FBQ2pDLHVCQUF1QixpREFBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx3QkFBd0I7QUFDNUQsd0NBQXdDLDRCQUE0QjtBQUNwRTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZEdVSS5qcyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vc3JjL3BsYXllclBjLmpzIiwid2VicGFjazovL0JhdHRsZXNoaXAvLi9zcmMvcmFtZG9tWFkuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR2FtZUJvYXJke1xyXG4gICAgYm9hcmQ7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBbXTtcclxuICAgIH1cclxuICAgIGluaXRpYWxpemUgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZFtpXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgMTA7IGorKyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2ldW2pdID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNyZWF0ZVNoaXAgPSBmdW5jdGlvbih5LCB4LCBsZW5ndGgsIHBvc2l0aW9uUyl7XHJcbiAgICAgICAgaWYocG9zaXRpb25TID09ICdoJyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IHg7IGogPCB4K2xlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1bal0gPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHk7IGkgPCB5K2xlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV1beF0gPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYW5hbGlzZVBvc2l0aW9uID0gZnVuY3Rpb24oeSwgeCwgbGVuZ3RoLCBwb3NpdGlvblMpe1xyXG4gICAgICAgIGlmKGxlbmd0aCA9PSA0KXtcclxuICAgICAgICAgICAgaWYocG9zaXRpb25TID09ICdoJyl7XHJcbiAgICAgICAgICAgICAgICBpZih4K2xlbmd0aCA+IDEwKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2UgaWYocG9zaXRpb25TID09ICd2Jyl7XHJcbiAgICAgICAgICAgICAgICBpZih5K2xlbmd0aCA+IDEwKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKHkrbGVuZ3RoID4gMTApe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9ZWxzZSBpZih4K2xlbmd0aCA+IDEwKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKHBvc2l0aW9uUyA9PSAnaCcpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYW5hbGlzZUhvcml6b250YWwoeSx4LGxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHBvc2l0aW9uUyA9PSAndicpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYW5hbGlzZVZlcnRpY2FsKHksIHgsIGxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhbmFsaXNlSG9yaXpvbnRhbCA9IGZ1bmN0aW9uKHksIHgsIGxlbmd0aCl7XHJcbiAgICB2YXIgcG9zID0gMDtcclxuICAgIGlmKHgrbGVuZ3RoID09IDEwKXtcclxuICAgICAgICBpZih5PT05ICYmIHghPTApe1xyXG4gICAgICAgICAgICBwb3MgPSAwO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSB5LTE7IGk8eSsxOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqID0geC0xOyBqPHgrbGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcyArPSB0aGlzLmJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoeT09MCAmJiB4IT0wKXtcclxuICAgICAgICAgICAgcG9zID0gMDtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0geTsgaTw9eSsxOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqID0geC0xOyBqPHgrbGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcyArPSB0aGlzLmJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgICAgICB9ZWxzZSBpZih5IT0wICYmIHghPTApe1xyXG4gICAgICAgICAgICBwb3M9MDtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0geS0xOyBpPD15KzE7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGogPSB4LTE7IGo8eCtsZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zICs9IHRoaXMuYm9hcmRbaV1bal07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICB9ZWxzZSBpZih5PT0wICYmIHg9PTApe1xyXG4gICAgICAgIHBvcyA9IDA7XHJcbiAgICAgICAgZm9yKGxldCBpID0geTsgaTw9eSsyOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IobGV0IGogPSB4OyBqPD14K2xlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIHBvcyArPSB0aGlzLmJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgIH1lbHNlIGlmKHk9PTAgJiYgeCE9MCl7XHJcbiAgICAgICAgcG9zID0gMDtcclxuICAgICAgICBmb3IobGV0IGkgPSB5OyBpPD15KzE7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IHgtMTsgajw9eCtsZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBwb3MgKz0gdGhpcy5ib2FyZFtpXVtqXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICB9ZWxzZSBpZih5PT05ICYmIHg9PTApe1xyXG4gICAgICAgIHBvcyA9MDtcclxuICAgICAgICBmb3IobGV0IGkgPSB5LTE7IGk8PXk7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IHg7IGo8PXgrbGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgcG9zICs9IHRoaXMuYm9hcmRbaV1bal07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVQb3NpdGlvbihwb3MpO1xyXG4gICAgfWVsc2UgaWYoeT09OSAmJiB4IT0wKXtcclxuICAgICAgICBwb3MgPTA7XHJcbiAgICAgICAgZm9yKGxldCBpID0geS0xOyBpPD15OyBpKyspe1xyXG4gICAgICAgICAgICBmb3IobGV0IGogPSB4LTE7IGo8PXgrbGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgcG9zICs9IHRoaXMuYm9hcmRbaV1bal07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVQb3NpdGlvbihwb3MpO1xyXG4gICAgfWVsc2UgaWYoeSE9MCAmJiB4PT0wKXtcclxuICAgICAgICBwb3MgPTA7XHJcbiAgICAgICAgZm9yKGxldCBpID0geS0xOyBpPD15OyBpKyspe1xyXG4gICAgICAgICAgICBmb3IobGV0IGogPSB4OyBqPD14K2xlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIHBvcyArPSB0aGlzLmJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgIH1lbHNlIGlmKHkhPTAgJiYgeCE9MCl7XHJcbiAgICAgICAgcG9zPTA7XHJcbiAgICAgICAgZm9yKGxldCBpID0geS0xOyBpPD15KzE7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IHgtMTsgajw9eCtsZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBwb3MgKz0gdGhpcy5ib2FyZFtpXVtqXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICB9XHJcbiAgICB9IFxyXG4gICAgYW5hbGlzZVZlcnRpY2FsID0gZnVuY3Rpb24oeSwgeCwgbGVuZ3RoKXtcclxuICAgICAgICB2YXIgcG9zID0gMDtcclxuICAgICAgICBpZih5K2xlbmd0aCA9PSAxMCl7XHJcbiAgICAgICAgICAgIGlmKHkgIT0gMCAmJiB4ID09IDkpe1xyXG4gICAgICAgICAgICAgICAgcG9zPTA7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPXktMTsgaTx5K2xlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGo9eC0xOyBqPHgrMTsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgICAgIHBvcyArPSB0aGlzLmJvYXJkW2ldW2pdOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZih5ICE9IDAgJiYgeD09MCl7XHJcbiAgICAgICAgICAgICAgICBwb3M9MDtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9eS0xOyBpPHkrbGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaj14OyBqPD14KzE7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3MgKz0gdGhpcy5ib2FyZFtpXVtqXTsgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYoeSAhPSAwICYmIHggIT0gMCl7XHJcbiAgICAgICAgICAgICAgICBwb3M9MDtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9eS0xOyBpPHkrbGVuZ3RoLTE7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqPXgtMTsgajx4K2xlbmd0aC0xOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zICs9IHRoaXMuYm9hcmRbaV1bal07ICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZih5ID09MCAmJiB4PT0wKXtcclxuICAgICAgICAgICAgcG9zPTA7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9eTsgaTw9bGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqPXg7IGo8PXgrMTsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgcG9zICs9IHRoaXMuYm9hcmRbaV1bal07ICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgfWVsc2UgaWYoeSA9PSAwICYmIHggPT0gOSl7XHJcbiAgICAgICAgICAgIHBvcz0wO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPXk7IGk8eStsZW5ndGgrMTsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaj14LTE7IGo8eCsxOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICBwb3MgKz0gdGhpcy5ib2FyZFtpXVtqXTsgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgICAgICB9ZWxzZSBpZih5ICE9MCAmJiB4PT0wKXtcclxuICAgICAgICAgICAgcG9zPTA7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9eS0xOyBpPHkrbGVuZ3RoKzE7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo9eDsgajx4KzE7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgIHBvcyArPSB0aGlzLmJvYXJkW2ldW2pdOyAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIH1lbHNlIGlmKHkgIT0wICYmIHggPT0gOSl7XHJcbiAgICAgICAgICAgIHBvcz0wO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPXktMTsgaTx5K2xlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaj14LTE7IGo8eCsxOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICBwb3MgKz0gdGhpcy5ib2FyZFtpXVtqXTsgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgICAgICB9ZWxzZSBpZih5ICE9MCAmJiB4ICE9MCl7XHJcbiAgICAgICAgICAgIHBvcz0wO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPXktMTsgaTx5K2xlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaj14LTE7IGo8eCtsZW5ndGgrMTsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgcG9zICs9IHRoaXMuYm9hcmRbaV1bal07ICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgfWVsc2UgaWYoeSA9PSAwICYmIHggIT0gMCl7XHJcbiAgICAgICAgICAgIHBvcz0wO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPXk7IGk8eStsZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo9eC0xOyBqPHgrbGVuZ3RoLTE7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgIHBvcyArPSB0aGlzLmJvYXJkW2ldW2pdOyAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhbGlkYXRlUG9zaXRpb24gPSBmdW5jdGlvbihwb3Mpe1xyXG4gICAgICAgIGlmKHBvcyAhPTApe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbiAgICBhdGFja1NoaXAgPSBmdW5jdGlvbih5LCB4KXtcclxuICAgICAgICBpZih0aGlzLmJvYXJkW3ldW3hdID09IDApe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5ib2FyZFt5XVt4XSA9PSAxKXsgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpc1ZpY3RvcnkgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBzdW0gPSAwO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IDEwOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgc3VtICs9dGhpcy5ib2FyZFtpXVtqXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihzdW0gPT0gLTIwKXtcclxuICAgICAgICAgICAgcmV0dXJuICdXSU5ORVIhJztcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuICdMT1NFUiEnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHBvc2l0aW9uID0gZnVuY3Rpb24obnVtYmVyKXtcclxuICAgICAgICBpZihudW1iZXIgPT0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybiAnaCdcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuICd2J1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBHYW1lQm9hcmQiLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL2dhbWVCb2FyZFwiO1xyXG5pbXBvcnQgc2hvd051bWJlciBmcm9tIFwiLi9yYW1kb21YWVwiO1xyXG5jb25zdCB0YWJsZV8xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnRhYmxlLTEnKTtcclxuY29uc3QgdHVybiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbiN0dXJuJyk7XHJcblxyXG5jb25zdCBhcnJheSA9IFtdO1xyXG52YXIgcG9zaXRpb25IID0gJ2gnO1xyXG52YXIgd2lkdGggPSAxMDtcclxudmFyIG51bWJlciA9IDA7XHJcbnRhYmxlXzEuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHt3aWR0aH0sIDFmcilgO1xyXG50YWJsZV8xLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBgcmVwZWF0KCR7d2lkdGh9LCAxZnIpYDsgXHJcbnRhYmxlXzEuY2xhc3NMaXN0LmFkZCgndGFibGUnKTtcclxudHVybi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICBpZihwb3NpdGlvbkggPT0gJ2gnKXtcclxuICAgICAgICBwb3NpdGlvbkggPSAndic7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBwb3NpdGlvbkggPSAnaCc7XHJcbiAgICB9XHJcbn0pO1xyXG5jbGFzcyBHYW1lQm9hcmRHdWlQYyB7XHJcbiAgICBib2FyZF8xID0gbmV3IEdhbWVCb2FyZCgpO1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICB9XHJcbiAgICBpbml0aWFsaXplR3VpID0gKCk9PntcclxuICAgICAgIHRoaXMuYm9hcmRfMS5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspe1xyXG4gICAgICAgICAgICBhcnJheVtpXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgMTA7IGorKyl7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGFycmF5W2ldW2pdID0gcm93O1xyXG4gICAgICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xyXG4gICAgICAgICAgICAgICAgdGFibGVfMS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgICAgICAgICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpfSwgJHtqfWApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RhY2tTaGlwR1VJKGksIGopO1xyXG4gICAgICAgICAgICAgICAgfSk7ICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gIFxyXG4gICAgfVxyXG4gICAgc2hpcEd1aT0oKT0+e1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU2hpcCgzLCA5LCA0LCAndicpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU2hpcCgwLCA2LCAzLCAnaCcpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU2hpcCg5LCA2LCAzLCAnaCcpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU2hpcCg2LCA3LCAyLCAndicpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU2hpcCgyLCA3LCAyLCAndicpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU2hpcCg0LCA1LCAyLCAndicpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU2hpcCgzLCAyLCAxLCAndicpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU2hpcCgwLCAyLCAxLCAndicpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU2hpcCg5LCAyLCAxLCAndicpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU2hpcCg3LCAyLCAxLCAndicpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlU2hpcCA9ICh5LCB4LCBsZW5ndGgsIHBvc2l0aW9uUykgPT4ge1xyXG4gICAgICAgIHRoaXMuYm9hcmRfMS5jcmVhdGVTaGlwKHksIHgsIGxlbmd0aCwgcG9zaXRpb25TKVxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IDEwOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5ib2FyZF8xLmJvYXJkW2ldW2pdID09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5W2ldW2pdLmNsYXNzTGlzdC5hZGQoJ3Jvdy0xJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgfVxyXG4gICAgYWN0YWNrU2hpcEdVSSA9ICh5LHgpPT57XHJcbiAgICBpZih0aGlzLmJvYXJkXzEuYXRhY2tTaGlwKHksIHgpID09IGZhbHNlKXtcclxuICAgICAgICB0aGlzLmJvYXJkXzEuYm9hcmRbeV1beF0gPSAwO1xyXG4gICAgICAgIGFycmF5W3ldW3hdLmNsYXNzTGlzdC5hZGQoJ2F0YWNrRmFpbHVyZScpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1lbHNlIGlmKHRoaXMuYm9hcmRfMS5hdGFja1NoaXAoeSwgeCkgPT0gdHJ1ZSl7XHJcbiAgICAgICAgdGhpcy5ib2FyZF8xLmJvYXJkW3ldW3hdID0gLTE7XHJcbiAgICAgICAgYXJyYXlbeV1beF0uY2xhc3NMaXN0LmFkZCgnYXRhY2tUYXJnZXQnKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5hbmFsaXNlID0gKGluZGV4KSA9PiB7XHJcbiAgICB2YXIgeCA9IHNob3dOdW1iZXIoMTApO1xyXG4gICAgdmFyIHkgPSBzaG93TnVtYmVyKDEwKTtcclxuICAgIHZhciBsZW5ndGggPSBzaG93TnVtYmVyKDUpO1xyXG4gICAgdmFyIHBvc2l0aW9uSCA9IHRoaXMuYm9hcmRfMS5wb3NpdGlvbihzaG93TnVtYmVyKDIpKTtcclxuICAgIGNvbnNvbGUubG9nKGxlbmd0aCk7XHJcbiAgICBpZihpbmRleCA9PSAwKXtcclxuICAgICAgICBpZih0aGlzLmJvYXJkXzEuYW5hbGlzZVBvc2l0aW9uKHksIHgsIDQsIHBvc2l0aW9uSCkgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2hpcCh5LCB4LCA0LCBwb3NpdGlvbkgpOyBcclxuICAgICAgICB9XHJcbiAgICB9ZWxzZSBpZihpbmRleCA+MCAmJiBpbmRleCA8Myl7XHJcbiAgICAgICAgaWYodGhpcy5ib2FyZF8xLmFuYWxpc2VQb3NpdGlvbih5LCB4LCAzLCBwb3NpdGlvbkgpID09IHRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNoaXAoeSwgeCwgMywgcG9zaXRpb25IKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfWVsc2UgaWYoaW5kZXggPjIgJiYgaW5kZXggPDYpe1xyXG4gICAgICAgIGlmKHRoaXMuYm9hcmRfMS5hbmFsaXNlUG9zaXRpb24oeSwgeCwgMiwgcG9zaXRpb25IKSA9PSB0cnVlKXtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVTaGlwKHksIHgsIDIsIHBvc2l0aW9uSCk7IFxyXG4gICAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICAgIGlmKHRoaXMuYm9hcmRfMS5hbmFsaXNlUG9zaXRpb24oeSwgeCwgMSwgcG9zaXRpb25IKSA9PSB0cnVlKXtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVTaGlwKHksIHgsIDEsIHBvc2l0aW9uSCk7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lQm9hcmRHdWlQYztcclxuIiwiaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcclxuY29uc3QgdGFibGVfMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi50YWJsZS0wJyk7XHJcbmNvbnN0IHR1cm4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24jdHVybicpO1xyXG5cclxuY29uc3QgYXJyYXkgPSBbXTtcclxudmFyIHBvc2l0aW9uSCA9ICdoJztcclxudmFyIHdpZHRoID0gMTA7XHJcbi8vdmFyIHRoaXMubnVtYmVyID0gMDtcclxudGFibGVfMS5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke3dpZHRofSwgMWZyKWA7XHJcbnRhYmxlXzEuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHt3aWR0aH0sIDFmcilgOyBcclxudGFibGVfMS5jbGFzc0xpc3QuYWRkKCd0YWJsZScpO1xyXG50dXJuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGlmKHBvc2l0aW9uSCA9PSAnaCcpe1xyXG4gICAgICAgIHBvc2l0aW9uSCA9ICd2JztcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHBvc2l0aW9uSCA9ICdoJztcclxuICAgIH1cclxufSk7XHJcbmNsYXNzIEdhbWVCb2FyZFBDIHtcclxuICAgIG51bWJlcjtcclxuICAgIGJvYXJkXzEgPSBuZXcgR2FtZUJvYXJkKCk7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMubnVtYmVyID0gMDtcclxuICAgIH1cclxuICAgIGluaXRpbGl6ZVBsYXllciA9ICgpPT57XHJcbiAgICAgICAgdGhpcy5ib2FyZF8xLmluaXRpYWxpemUoKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKyl7XHJcbiAgICAgICAgICAgIGFycmF5W2ldID0gW107XHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCAxMDsgaisrKXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgYXJyYXlbaV1bal0gPSByb3c7XHJcbiAgICAgICAgICAgICAgICByb3cuY2xhc3NMaXN0LmFkZCgncm93Jyk7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV8xLmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgICAgICAgICByb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMubnVtYmVyIDwgMTApeyAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5ib2FyZF8xLmFuYWxpc2VQb3NpdGlvbihpLCBqLCAzLCBwb3NpdGlvbkgpID09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5udW1iZXIgPT0gOSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVTaGlwKGksIGosIDQsIHBvc2l0aW9uSCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1iZXIrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMubnVtYmVyPDkgJiYgdGhpcy5udW1iZXI+Nil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVTaGlwKGksIGosIDMsIHBvc2l0aW9uSCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1iZXIrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMubnVtYmVyPDcgJiYgdGhpcy5udW1iZXI+Myl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVTaGlwKGksIGosIDIsIHBvc2l0aW9uSCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1iZXIrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMubnVtYmVyID49MCAmJiB0aGlzLm51bWJlcjw0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVNoaXAoaSwgaiwgMSwgcG9zaXRpb25IKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm51bWJlcisrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm51bWJlcikgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pOyAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICBcclxuICAgIH1cclxuICAgIGFjdGFja1NoaXBHVUkgPSAoeSx4KT0+e1xyXG4gICAgICAgIGlmKHRoaXMuYm9hcmRfMS5hdGFja1NoaXAoeSwgeCkgPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkXzEuYm9hcmRbeV1beF0gPSAwO1xyXG4gICAgICAgICAgICBhcnJheVt5XVt4XS5jbGFzc0xpc3QuYWRkKCdhdGFja0ZhaWx1cmUnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuYm9hcmRfMS5hdGFja1NoaXAoeSwgeCkgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRfMS5ib2FyZFt5XVt4XSA9IC0xO1xyXG4gICAgICAgICAgICBhcnJheVt5XVt4XS5jbGFzc0xpc3QuYWRkKCdhdGFja1RhcmdldCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjcmVhdGVTaGlwKHksIHgsIGxlbmd0aCwgcG9zaXRpb25TKXtcclxuICAgICAgICBpZihwb3NpdGlvblMgPT0gJ2gnKXtcclxuICAgICAgICAgICAgZm9yKGxldCBqID0geDsgajx4K2xlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRfMS5ib2FyZFt5XVtqXSA9IDE7XHJcbiAgICAgICAgICAgICAgICBhcnJheVt5XVtqXS5jbGFzc0xpc3QuYWRkKCdyb3ctMScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYocG9zaXRpb25IID09ICd2Jyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IHk7IGo8IHkrbGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgYXJyYXlbal1beF0uY2xhc3NMaXN0LmFkZCgncm93LTEnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRfMS5ib2FyZFtqXVt4XSA9IDE7XHJcbiAgICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvYXJkUEM7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dOdW1iZXIoaW50ZXIpe1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGludGVyKTtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEdhbWVCb2FyZEd1aVBjIGZyb20gJy4vZ2FtZUJvYXJkR1VJJztcclxuLy9pbXBvcnQgR2FtZUJvYXJkIGZyb20gJy4vZ2FtZUJvYXJkJztcclxuaW1wb3J0IEdhbWVCb2FyZFBDIGZyb20gJy4vcGxheWVyUGMnO1xyXG5pbXBvcnQgc2hvd051bWJlciBmcm9tICcuL3JhbWRvbVhZJztcclxuY29uc3QgdGFibGVfMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi50YWJsZS0xJyk7XHJcbmNvbnN0IHR1cm4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24jdHVybicpO1xyXG5jb25zdCBwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uI3BsYXknKTtcclxuXHJcbmZ1bmN0aW9uIGdhbWUoKXtcclxuICAgIGNvbnN0IHBjID0gbmV3IEdhbWVCb2FyZEd1aVBjO1xyXG4gICAgY29uc3QgcGxheWVyID0gbmV3IEdhbWVCb2FyZFBDKCk7XHJcbiAgICBwYy5pbml0aWFsaXplR3VpKCk7ICAgICAgICBcclxuICAgIHBsYXllci5pbml0aWxpemVQbGF5ZXIoKTtcclxuICAgIHBsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgIGlmKHBsYXllci5udW1iZXIgPT0gMTApe1xyXG4gICAgICAgICAgICB0YWJsZV8xLmNsYXNzTGlzdC5hZGQoJ3RhYmxlLWQnKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZW50cmVpJylcclxuICAgICAgICAgICAgcGMuc2hpcEd1aSgpOyAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBJJ20gYSBQQyAke3BjLmJvYXJkXzEuYm9hcmQubGVuZ3RofWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgSSdtIGEgUGxheWVyICR7cGxheWVyLmJvYXJkXzEuYm9hcmQubGVuZ3RofWApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYWxlcnQoJ3lvdSBuZWVkIGEgMTAgU2hpcCcpXHJcbiAgICAgICAgfSAgICBcclxuICAgIH0pO1xyXG59XHJcbmdhbWUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9