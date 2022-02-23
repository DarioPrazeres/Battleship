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
const board_1 = new _gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"]();
turn.addEventListener('click', ()=>{
    if(positionH == 'h'){
        positionH = 'v';
    }else{
        positionH = 'h';
    }
});
class GameBoardPC {
    number;
    constructor(){
        this.number = 0;
    }
    initilizePlayer = ()=>{
        board_1.initialize();
        for(let i = 0; i < 10; i++){
            array[i] = [];
            for(let j = 0; j < 10; j++){            
                const row = document.createElement('div');
                array[i][j] = row;
                row.classList.add('row');
                table_1.appendChild(row);
                row.addEventListener('click', ()=>{
                    if(this.number < 10){             
                        if(board_1.analisePosition(i, j, 3, positionH) == true){
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
        if(board_1.atackShip(y, x) == false){
            board_1.board[y][x] = 0;
            array[y][x].classList.add('atackFailure');
            return false;
        }else if(board_1.atackShip(y, x) == true){
            board_1.board[y][x] = -1;
            array[y][x].classList.add('atackTarget');
            return true;
        }
    }
    createShip(y, x, length, positionS){
        if(positionS == 'h'){
            for(let j = x; j<x+length; j++){
                board_1.board[y][j] = 1;
                array[y][j].classList.add('row-1');
            }
        }else if(positionH == 'v'){
            for(let j = y; j< y+length; j++){
                array[j][x].classList.add('row-1');
                board_1.board[j][x] = 1;
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
            //pc.actackShipGUI(0,0);
        }else{
            alert('you need a 10 Ship')
        }
    
    });
}
game();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEM7QUFDNUM7QUFDcUM7QUFDRDtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFEQUFjO0FBQ2pDLHVCQUF1QixpREFBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmRHVUkuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXJQYy5qcyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vc3JjL3JhbWRvbVhZLmpzIiwid2VicGFjazovL0JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbWVCb2FyZHtcclxuICAgIGJvYXJkO1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmJvYXJkID0gW107XHJcbiAgICB9XHJcbiAgICBpbml0aWFsaXplID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbaV0gPSBbXTtcclxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IDEwOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXVtqXSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjcmVhdGVTaGlwID0gZnVuY3Rpb24oeSwgeCwgbGVuZ3RoLCBwb3NpdGlvblMpe1xyXG4gICAgICAgIGlmKHBvc2l0aW9uUyA9PSAnaCcpe1xyXG4gICAgICAgICAgICBmb3IobGV0IGogPSB4OyBqIDwgeCtsZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ldW2pdID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSB5OyBpIDwgeStsZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2ldW3hdID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFuYWxpc2VQb3NpdGlvbiA9IGZ1bmN0aW9uKHksIHgsIGxlbmd0aCwgcG9zaXRpb25TKXtcclxuICAgICAgICBpZihsZW5ndGggPT0gNCl7XHJcbiAgICAgICAgICAgIGlmKHBvc2l0aW9uUyA9PSAnaCcpe1xyXG4gICAgICAgICAgICAgICAgaWYoeCtsZW5ndGggPiAxMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHBvc2l0aW9uUyA9PSAndicpe1xyXG4gICAgICAgICAgICAgICAgaWYoeStsZW5ndGggPiAxMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZih5K2xlbmd0aCA+IDEwKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfWVsc2UgaWYoeCtsZW5ndGggPiAxMCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZihwb3NpdGlvblMgPT0gJ2gnKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFuYWxpc2VIb3Jpem9udGFsKHkseCxsZW5ndGgpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihwb3NpdGlvblMgPT0gJ3YnKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFuYWxpc2VWZXJ0aWNhbCh5LCB4LCBsZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYW5hbGlzZUhvcml6b250YWwgPSBmdW5jdGlvbih5LCB4LCBsZW5ndGgpe1xyXG4gICAgdmFyIHBvcyA9IDA7XHJcbiAgICBpZih4K2xlbmd0aCA9PSAxMCl7XHJcbiAgICAgICAgaWYoeT09OSAmJiB4IT0wKXtcclxuICAgICAgICAgICAgcG9zID0gMDtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0geS0xOyBpPHkrMTsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IHgtMTsgajx4K2xlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgICBwb3MgKz0gdGhpcy5ib2FyZFtpXVtqXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHk9PTAgJiYgeCE9MCl7XHJcbiAgICAgICAgICAgIHBvcyA9IDA7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHk7IGk8PXkrMTsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IHgtMTsgajx4K2xlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgICBwb3MgKz0gdGhpcy5ib2FyZFtpXVtqXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgfWVsc2UgaWYoeSE9MCAmJiB4IT0wKXtcclxuICAgICAgICAgICAgcG9zPTA7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHktMTsgaTw9eSsxOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqID0geC0xOyBqPHgrbGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcyArPSB0aGlzLmJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgICAgICB9ICAgIFxyXG4gICAgfWVsc2UgaWYoeT09MCAmJiB4PT0wKXtcclxuICAgICAgICBwb3MgPSAwO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IHk7IGk8PXkrMjsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKGxldCBqID0geDsgajw9eCtsZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBwb3MgKz0gdGhpcy5ib2FyZFtpXVtqXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICB9ZWxzZSBpZih5PT0wICYmIHghPTApe1xyXG4gICAgICAgIHBvcyA9IDA7XHJcbiAgICAgICAgZm9yKGxldCBpID0geTsgaTw9eSsxOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IobGV0IGogPSB4LTE7IGo8PXgrbGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgcG9zICs9IHRoaXMuYm9hcmRbaV1bal07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVQb3NpdGlvbihwb3MpO1xyXG4gICAgfWVsc2UgaWYoeT09OSAmJiB4PT0wKXtcclxuICAgICAgICBwb3MgPTA7XHJcbiAgICAgICAgZm9yKGxldCBpID0geS0xOyBpPD15OyBpKyspe1xyXG4gICAgICAgICAgICBmb3IobGV0IGogPSB4OyBqPD14K2xlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIHBvcyArPSB0aGlzLmJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgIH1lbHNlIGlmKHk9PTkgJiYgeCE9MCl7XHJcbiAgICAgICAgcG9zID0wO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IHktMTsgaTw9eTsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKGxldCBqID0geC0xOyBqPD14K2xlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIHBvcyArPSB0aGlzLmJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgIH1lbHNlIGlmKHkhPTAgJiYgeD09MCl7XHJcbiAgICAgICAgcG9zID0wO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IHktMTsgaTw9eTsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKGxldCBqID0geDsgajw9eCtsZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBwb3MgKz0gdGhpcy5ib2FyZFtpXVtqXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICB9ZWxzZSBpZih5IT0wICYmIHghPTApe1xyXG4gICAgICAgIHBvcz0wO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IHktMTsgaTw9eSsxOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IobGV0IGogPSB4LTE7IGo8PXgrbGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgcG9zICs9IHRoaXMuYm9hcmRbaV1bal07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVQb3NpdGlvbihwb3MpO1xyXG4gICAgfVxyXG4gICAgfSBcclxuICAgIGFuYWxpc2VWZXJ0aWNhbCA9IGZ1bmN0aW9uKHksIHgsIGxlbmd0aCl7XHJcbiAgICAgICAgdmFyIHBvcyA9IDA7XHJcbiAgICAgICAgaWYoeStsZW5ndGggPT0gMTApe1xyXG4gICAgICAgICAgICBpZih5ICE9IDAgJiYgeCA9PSA5KXtcclxuICAgICAgICAgICAgICAgIHBvcz0wO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID15LTE7IGk8eStsZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqPXgtMTsgajx4KzE7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3MgKz0gdGhpcy5ib2FyZFtpXVtqXTsgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYoeSAhPSAwICYmIHg9PTApe1xyXG4gICAgICAgICAgICAgICAgcG9zPTA7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPXktMTsgaTx5K2xlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGo9eDsgajw9eCsxOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zICs9IHRoaXMuYm9hcmRbaV1bal07ICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHkgIT0gMCAmJiB4ICE9IDApe1xyXG4gICAgICAgICAgICAgICAgcG9zPTA7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPXktMTsgaTx5K2xlbmd0aC0xOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaj14LTE7IGo8eCtsZW5ndGgtMTsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgICAgIHBvcyArPSB0aGlzLmJvYXJkW2ldW2pdOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYoeSA9PTAgJiYgeD09MCl7XHJcbiAgICAgICAgICAgIHBvcz0wO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPXk7IGk8PWxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaj14OyBqPD14KzE7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgIHBvcyArPSB0aGlzLmJvYXJkW2ldW2pdOyAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIH1lbHNlIGlmKHkgPT0gMCAmJiB4ID09IDkpe1xyXG4gICAgICAgICAgICBwb3M9MDtcclxuICAgICAgICAgICAgZm9yKGxldCBpID15OyBpPHkrbGVuZ3RoKzE7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo9eC0xOyBqPHgrMTsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgcG9zICs9IHRoaXMuYm9hcmRbaV1bal07ICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgfWVsc2UgaWYoeSAhPTAgJiYgeD09MCl7XHJcbiAgICAgICAgICAgIHBvcz0wO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPXktMTsgaTx5K2xlbmd0aCsxOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqPXg7IGo8eCsxOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICBwb3MgKz0gdGhpcy5ib2FyZFtpXVtqXTsgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgICAgICB9ZWxzZSBpZih5ICE9MCAmJiB4ID09IDkpe1xyXG4gICAgICAgICAgICBwb3M9MDtcclxuICAgICAgICAgICAgZm9yKGxldCBpID15LTE7IGk8eStsZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo9eC0xOyBqPHgrMTsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgcG9zICs9IHRoaXMuYm9hcmRbaV1bal07ICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgfWVsc2UgaWYoeSAhPTAgJiYgeCAhPTApe1xyXG4gICAgICAgICAgICBwb3M9MDtcclxuICAgICAgICAgICAgZm9yKGxldCBpID15LTE7IGk8eStsZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo9eC0xOyBqPHgrbGVuZ3RoKzE7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgIHBvcyArPSB0aGlzLmJvYXJkW2ldW2pdOyAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIH1lbHNlIGlmKHkgPT0gMCAmJiB4ICE9IDApe1xyXG4gICAgICAgICAgICBwb3M9MDtcclxuICAgICAgICAgICAgZm9yKGxldCBpID15OyBpPHkrbGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqPXgtMTsgajx4K2xlbmd0aC0xOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICBwb3MgKz0gdGhpcy5ib2FyZFtpXVtqXTsgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YWxpZGF0ZVBvc2l0aW9uID0gZnVuY3Rpb24ocG9zKXtcclxuICAgICAgICBpZihwb3MgIT0wKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG4gICAgYXRhY2tTaGlwID0gZnVuY3Rpb24oeSwgeCl7XHJcbiAgICAgICAgaWYodGhpcy5ib2FyZFt5XVt4XSA9PSAwKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuYm9hcmRbeV1beF0gPT0gMSl7ICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaXNWaWN0b3J5ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgc3VtID0gMDtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCAxMDsgaisrKXtcclxuICAgICAgICAgICAgICAgIHN1bSArPXRoaXMuYm9hcmRbaV1bal07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoc3VtID09IC0yMCl7XHJcbiAgICAgICAgICAgIHJldHVybiAnV0lOTkVSISc7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiAnTE9TRVIhJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwb3NpdGlvbiA9IGZ1bmN0aW9uKG51bWJlcil7XHJcbiAgICAgICAgaWYobnVtYmVyID09IDApe1xyXG4gICAgICAgICAgICByZXR1cm4gJ2gnXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiAndidcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvYXJkIiwiaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcclxuaW1wb3J0IHNob3dOdW1iZXIgZnJvbSBcIi4vcmFtZG9tWFlcIjtcclxuY29uc3QgdGFibGVfMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi50YWJsZS0xJyk7XHJcbmNvbnN0IHR1cm4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24jdHVybicpO1xyXG5cclxuY29uc3QgYXJyYXkgPSBbXTtcclxudmFyIHBvc2l0aW9uSCA9ICdoJztcclxudmFyIHdpZHRoID0gMTA7XHJcbnZhciBudW1iZXIgPSAwO1xyXG50YWJsZV8xLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7d2lkdGh9LCAxZnIpYDtcclxudGFibGVfMS5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gYHJlcGVhdCgke3dpZHRofSwgMWZyKWA7IFxyXG50YWJsZV8xLmNsYXNzTGlzdC5hZGQoJ3RhYmxlJyk7XHJcbnR1cm4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgaWYocG9zaXRpb25IID09ICdoJyl7XHJcbiAgICAgICAgcG9zaXRpb25IID0gJ3YnO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcG9zaXRpb25IID0gJ2gnO1xyXG4gICAgfVxyXG59KTtcclxuY2xhc3MgR2FtZUJvYXJkR3VpUGMge1xyXG4gICAgYm9hcmRfMSA9IG5ldyBHYW1lQm9hcmQoKTtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgfVxyXG4gICAgaW5pdGlhbGl6ZUd1aSA9ICgpPT57XHJcbiAgICAgICB0aGlzLmJvYXJkXzEuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKXtcclxuICAgICAgICAgICAgYXJyYXlbaV0gPSBbXTtcclxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IDEwOyBqKyspeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBhcnJheVtpXVtqXSA9IHJvdztcclxuICAgICAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcclxuICAgICAgICAgICAgICAgIHRhYmxlXzEuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICAgICAgICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7aX0sICR7an1gKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0YWNrU2hpcEdVSShpLCBqKTtcclxuICAgICAgICAgICAgICAgIH0pOyAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICBcclxuICAgIH1cclxuICAgIHNoaXBHdWk9KCk9PntcclxuICAgICAgICB0aGlzLmNyZWF0ZVNoaXAoMywgOSwgNCwgJ3YnKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVNoaXAoMCwgNiwgMywgJ2gnKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVNoaXAoOSwgNiwgMywgJ2gnKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVNoaXAoNiwgNywgMiwgJ3YnKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVNoaXAoMiwgNywgMiwgJ3YnKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVNoaXAoNCwgNSwgMiwgJ3YnKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVNoaXAoMywgMiwgMSwgJ3YnKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVNoaXAoMCwgMiwgMSwgJ3YnKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVNoaXAoOSwgMiwgMSwgJ3YnKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVNoaXAoNywgMiwgMSwgJ3YnKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZVNoaXAgPSAoeSwgeCwgbGVuZ3RoLCBwb3NpdGlvblMpID0+IHtcclxuICAgICAgICB0aGlzLmJvYXJkXzEuY3JlYXRlU2hpcCh5LCB4LCBsZW5ndGgsIHBvc2l0aW9uUylcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCAxMDsgaisrKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRfMS5ib2FyZFtpXVtqXSA9PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICBhcnJheVtpXVtqXS5jbGFzc0xpc3QuYWRkKCdyb3ctMScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICAgIGFjdGFja1NoaXBHVUkgPSAoeSx4KT0+e1xyXG4gICAgaWYodGhpcy5ib2FyZF8xLmF0YWNrU2hpcCh5LCB4KSA9PSBmYWxzZSl7XHJcbiAgICAgICAgdGhpcy5ib2FyZF8xLmJvYXJkW3ldW3hdID0gMDtcclxuICAgICAgICBhcnJheVt5XVt4XS5jbGFzc0xpc3QuYWRkKCdhdGFja0ZhaWx1cmUnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9ZWxzZSBpZih0aGlzLmJvYXJkXzEuYXRhY2tTaGlwKHksIHgpID09IHRydWUpe1xyXG4gICAgICAgIHRoaXMuYm9hcmRfMS5ib2FyZFt5XVt4XSA9IC0xO1xyXG4gICAgICAgIGFycmF5W3ldW3hdLmNsYXNzTGlzdC5hZGQoJ2F0YWNrVGFyZ2V0Jyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuYW5hbGlzZSA9IChpbmRleCkgPT4ge1xyXG4gICAgdmFyIHggPSBzaG93TnVtYmVyKDEwKTtcclxuICAgIHZhciB5ID0gc2hvd051bWJlcigxMCk7XHJcbiAgICB2YXIgbGVuZ3RoID0gc2hvd051bWJlcig1KTtcclxuICAgIHZhciBwb3NpdGlvbkggPSB0aGlzLmJvYXJkXzEucG9zaXRpb24oc2hvd051bWJlcigyKSk7XHJcbiAgICBjb25zb2xlLmxvZyhsZW5ndGgpO1xyXG4gICAgaWYoaW5kZXggPT0gMCl7XHJcbiAgICAgICAgaWYodGhpcy5ib2FyZF8xLmFuYWxpc2VQb3NpdGlvbih5LCB4LCA0LCBwb3NpdGlvbkgpID09IHRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVNoaXAoeSwgeCwgNCwgcG9zaXRpb25IKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfWVsc2UgaWYoaW5kZXggPjAgJiYgaW5kZXggPDMpe1xyXG4gICAgICAgIGlmKHRoaXMuYm9hcmRfMS5hbmFsaXNlUG9zaXRpb24oeSwgeCwgMywgcG9zaXRpb25IKSA9PSB0cnVlKXtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVTaGlwKHksIHgsIDMsIHBvc2l0aW9uSCk7IFxyXG4gICAgICAgIH1cclxuICAgIH1lbHNlIGlmKGluZGV4ID4yICYmIGluZGV4IDw2KXtcclxuICAgICAgICBpZih0aGlzLmJvYXJkXzEuYW5hbGlzZVBvc2l0aW9uKHksIHgsIDIsIHBvc2l0aW9uSCkgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2hpcCh5LCB4LCAyLCBwb3NpdGlvbkgpOyBcclxuICAgICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBpZih0aGlzLmJvYXJkXzEuYW5hbGlzZVBvc2l0aW9uKHksIHgsIDEsIHBvc2l0aW9uSCkgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU2hpcCh5LCB4LCAxLCBwb3NpdGlvbkgpOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvYXJkR3VpUGM7XHJcbiIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XHJcbmNvbnN0IHRhYmxlXzEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYudGFibGUtMCcpO1xyXG5jb25zdCB0dXJuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uI3R1cm4nKTtcclxuXHJcbmNvbnN0IGFycmF5ID0gW107XHJcbnZhciBwb3NpdGlvbkggPSAnaCc7XHJcbnZhciB3aWR0aCA9IDEwO1xyXG4vL3ZhciB0aGlzLm51bWJlciA9IDA7XHJcbnRhYmxlXzEuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHt3aWR0aH0sIDFmcilgO1xyXG50YWJsZV8xLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBgcmVwZWF0KCR7d2lkdGh9LCAxZnIpYDsgXHJcbnRhYmxlXzEuY2xhc3NMaXN0LmFkZCgndGFibGUnKTtcclxuY29uc3QgYm9hcmRfMSA9IG5ldyBHYW1lQm9hcmQoKTtcclxudHVybi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICBpZihwb3NpdGlvbkggPT0gJ2gnKXtcclxuICAgICAgICBwb3NpdGlvbkggPSAndic7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBwb3NpdGlvbkggPSAnaCc7XHJcbiAgICB9XHJcbn0pO1xyXG5jbGFzcyBHYW1lQm9hcmRQQyB7XHJcbiAgICBudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMubnVtYmVyID0gMDtcclxuICAgIH1cclxuICAgIGluaXRpbGl6ZVBsYXllciA9ICgpPT57XHJcbiAgICAgICAgYm9hcmRfMS5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspe1xyXG4gICAgICAgICAgICBhcnJheVtpXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgMTA7IGorKyl7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGFycmF5W2ldW2pdID0gcm93O1xyXG4gICAgICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xyXG4gICAgICAgICAgICAgICAgdGFibGVfMS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgICAgICAgICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLm51bWJlciA8IDEwKXsgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJvYXJkXzEuYW5hbGlzZVBvc2l0aW9uKGksIGosIDMsIHBvc2l0aW9uSCkgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLm51bWJlciA9PSA5KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVNoaXAoaSwgaiwgNCwgcG9zaXRpb25IKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm51bWJlcisrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5udW1iZXI8OSAmJiB0aGlzLm51bWJlcj42KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVNoaXAoaSwgaiwgMywgcG9zaXRpb25IKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm51bWJlcisrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5udW1iZXI8NyAmJiB0aGlzLm51bWJlcj4zKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVNoaXAoaSwgaiwgMiwgcG9zaXRpb25IKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm51bWJlcisrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5udW1iZXIgPj0wICYmIHRoaXMubnVtYmVyPDQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlU2hpcChpLCBqLCAxLCBwb3NpdGlvbkgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubnVtYmVyKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSk7ICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gIFxyXG4gICAgfVxyXG4gICAgYWN0YWNrU2hpcEdVSSA9ICh5LHgpPT57XHJcbiAgICAgICAgaWYoYm9hcmRfMS5hdGFja1NoaXAoeSwgeCkgPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICBib2FyZF8xLmJvYXJkW3ldW3hdID0gMDtcclxuICAgICAgICAgICAgYXJyYXlbeV1beF0uY2xhc3NMaXN0LmFkZCgnYXRhY2tGYWlsdXJlJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9ZWxzZSBpZihib2FyZF8xLmF0YWNrU2hpcCh5LCB4KSA9PSB0cnVlKXtcclxuICAgICAgICAgICAgYm9hcmRfMS5ib2FyZFt5XVt4XSA9IC0xO1xyXG4gICAgICAgICAgICBhcnJheVt5XVt4XS5jbGFzc0xpc3QuYWRkKCdhdGFja1RhcmdldCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjcmVhdGVTaGlwKHksIHgsIGxlbmd0aCwgcG9zaXRpb25TKXtcclxuICAgICAgICBpZihwb3NpdGlvblMgPT0gJ2gnKXtcclxuICAgICAgICAgICAgZm9yKGxldCBqID0geDsgajx4K2xlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIGJvYXJkXzEuYm9hcmRbeV1bal0gPSAxO1xyXG4gICAgICAgICAgICAgICAgYXJyYXlbeV1bal0uY2xhc3NMaXN0LmFkZCgncm93LTEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKHBvc2l0aW9uSCA9PSAndicpe1xyXG4gICAgICAgICAgICBmb3IobGV0IGogPSB5OyBqPCB5K2xlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIGFycmF5W2pdW3hdLmNsYXNzTGlzdC5hZGQoJ3Jvdy0xJyk7XHJcbiAgICAgICAgICAgICAgICBib2FyZF8xLmJvYXJkW2pdW3hdID0gMTtcclxuICAgICAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lQm9hcmRQQztcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd051bWJlcihpbnRlcil7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaW50ZXIpO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgR2FtZUJvYXJkR3VpUGMgZnJvbSAnLi9nYW1lQm9hcmRHVUknO1xyXG4vL2ltcG9ydCBHYW1lQm9hcmQgZnJvbSAnLi9nYW1lQm9hcmQnO1xyXG5pbXBvcnQgR2FtZUJvYXJkUEMgZnJvbSAnLi9wbGF5ZXJQYyc7XHJcbmltcG9ydCBzaG93TnVtYmVyIGZyb20gJy4vcmFtZG9tWFknO1xyXG5jb25zdCB0YWJsZV8xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnRhYmxlLTEnKTtcclxuY29uc3QgdHVybiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbiN0dXJuJyk7XHJcbmNvbnN0IHBsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24jcGxheScpO1xyXG5cclxuZnVuY3Rpb24gZ2FtZSgpe1xyXG4gICAgY29uc3QgcGMgPSBuZXcgR2FtZUJvYXJkR3VpUGM7XHJcbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgR2FtZUJvYXJkUEMoKTtcclxuICAgIHBjLmluaXRpYWxpemVHdWkoKTsgICAgICAgIFxyXG4gICAgcGxheWVyLmluaXRpbGl6ZVBsYXllcigpO1xyXG4gICAgcGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgaWYocGxheWVyLm51bWJlciA9PSAxMCl7XHJcbiAgICAgICAgICAgIHRhYmxlXzEuY2xhc3NMaXN0LmFkZCgndGFibGUtZCcpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbnRyZWknKVxyXG4gICAgICAgICAgICBwYy5zaGlwR3VpKCk7ICBcclxuICAgICAgICAgICAgLy9wYy5hY3RhY2tTaGlwR1VJKDAsMCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGFsZXJ0KCd5b3UgbmVlZCBhIDEwIFNoaXAnKVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfSk7XHJcbn1cclxuZ2FtZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=