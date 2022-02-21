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


const table_1 = document.querySelector('div.table-0');
const turn = document.querySelector('button#turn');

const array = [];
var positionH = 'h';
var width = 10;
var number = 0;
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
function gameBoard(){
    board_1.initialize();
    for(let i = 0; i < 10; i++){
        array[i] = [];
        for(let j = 0; j < 10; j++){            
            const row = document.createElement('div');
            array[i][j] = row;
            row.classList.add('row');
            table_1.appendChild(row);
            row.addEventListener('click', ()=>{
                console.log(`${i}, ${j}`)
            });        
        }
    } 
    createShip(3, 9, 4, 'v');
    createShip(0, 6, 3, 'h');
    createShip(9, 6, 3, 'h');
    createShip(6, 7, 2, 'v');
    createShip(2, 7, 2, 'v');
    createShip(4, 5, 2, 'v');
    createShip(3, 2, 1, 'v');
    createShip(0, 2, 1, 'v');
    createShip(9, 2, 1, 'v');
    createShip(7, 2, 1, 'v');
    
}
function actackShipGUI(y,x){
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
function createShip(y, x, length, positionS){
    board_1.createShip(y, x, length, positionS)
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            if(board_1.board[i][j] == 1){
                array[i][j].classList.add('row-1');
            }
        }
    } 
}
function analise(index){
    var x = (0,_ramdomXY__WEBPACK_IMPORTED_MODULE_1__["default"])(10);
    var y = (0,_ramdomXY__WEBPACK_IMPORTED_MODULE_1__["default"])(10);
    var length = (0,_ramdomXY__WEBPACK_IMPORTED_MODULE_1__["default"])(5);
    var positionH = board_1.position((0,_ramdomXY__WEBPACK_IMPORTED_MODULE_1__["default"])(2));
    console.log(length);
    if(index == 0){
        if(board_1.analisePosition(y, x, 4, positionH) == true){
            createShip(y, x, 4, positionH); 
        }
    }else if(index >0 && index <3){
        if(board_1.analisePosition(y, x, 3, positionH) == true){
            createShip(y, x, 3, positionH); 
        }
    }else if(index >2 && index <6){
        if(board_1.analisePosition(y, x, 2, positionH) == true){
            createShip(y, x, 2, positionH); 
        }
    }else{
        if(board_1.analisePosition(y, x, 1, positionH) == true){
            createShip(y, x, 1, positionH); 
        }
    }
    
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoard);


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

const table_1 = document.querySelector('div.table-1');
const turn = document.querySelector('button#turn');

const array = [];
var positionH = 'h';
var width = 10;
var number = 0;
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
function gameBoardPC(){
    board_1.initialize();
    for(let i = 0; i < 10; i++){
        array[i] = [];
        for(let j = 0; j < 10; j++){            
            const row = document.createElement('div');
            array[i][j] = row;
            row.classList.add('row');
            table_1.appendChild(row);
            row.addEventListener('click', ()=>{
                if(number < 10){             
                    if(board_1.analisePosition(i, j, 3, positionH) == true){
                        if(number == 9){
                            createShip(i, j, 4, positionH);
                            number++;
                        }else if(number<9 && number>6){
                            createShip(i, j, 3, positionH);
                            number++;
                        }else if(number<7 && number>3){
                            createShip(i, j, 2, positionH);
                            number++;
                        }else if(number >=0 && number<4){
                            createShip(i, j, 1, positionH);
                            number++;
                        }
                    }  
                }else {
                    if(actackShipGUI(i, j)== true){
                        console.log('On Target');
                    }
                    console.log(board_1.isVictory());
                }              
            });        
        }
    } 
}
function actackShipGUI(y,x){
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
function createShip(y, x, length, positionS){
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoardPC);


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


(0,_gameBoardGUI__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_playerPc__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL0JhdHRsZXNoaXAvLi9zcmMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL0JhdHRsZXNoaXAvLi9zcmMvZ2FtZUJvYXJkR1VJLmpzIiwid2VicGFjazovL0JhdHRsZXNoaXAvLi9zcmMvcGxheWVyUGMuanMiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC8uL3NyYy9yYW1kb21YWS5qcyIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9CYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHYW1lQm9hcmR7XHJcbiAgICBib2FyZDtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5ib2FyZCA9IFtdO1xyXG4gICAgfVxyXG4gICAgaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkW2ldID0gW107XHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCAxMDsgaisrKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV1bal0gPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY3JlYXRlU2hpcCA9IGZ1bmN0aW9uKHksIHgsIGxlbmd0aCwgcG9zaXRpb25TKXtcclxuICAgICAgICBpZihwb3NpdGlvblMgPT0gJ2gnKXtcclxuICAgICAgICAgICAgZm9yKGxldCBqID0geDsgaiA8IHgrbGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt5XVtqXSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0geTsgaSA8IHkrbGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXVt4XSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhbmFsaXNlUG9zaXRpb24gPSBmdW5jdGlvbih5LCB4LCBsZW5ndGgsIHBvc2l0aW9uUyl7XHJcbiAgICAgICAgaWYobGVuZ3RoID09IDQpe1xyXG4gICAgICAgICAgICBpZihwb3NpdGlvblMgPT0gJ2gnKXtcclxuICAgICAgICAgICAgICAgIGlmKHgrbGVuZ3RoID4gMTApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZSBpZihwb3NpdGlvblMgPT0gJ3YnKXtcclxuICAgICAgICAgICAgICAgIGlmKHkrbGVuZ3RoID4gMTApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYoeStsZW5ndGggPiAxMCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1lbHNlIGlmKHgrbGVuZ3RoID4gMTApe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYocG9zaXRpb25TID09ICdoJyl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hbmFsaXNlSG9yaXpvbnRhbCh5LHgsbGVuZ3RoKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYocG9zaXRpb25TID09ICd2Jyl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hbmFsaXNlVmVydGljYWwoeSwgeCwgbGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFuYWxpc2VIb3Jpem9udGFsID0gZnVuY3Rpb24oeSwgeCwgbGVuZ3RoKXtcclxuICAgIHZhciBwb3MgPSAwO1xyXG4gICAgaWYoeCtsZW5ndGggPT0gMTApe1xyXG4gICAgICAgIGlmKHk9PTkgJiYgeCE9MCl7XHJcbiAgICAgICAgICAgIHBvcyA9IDA7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHktMTsgaTx5KzE7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGogPSB4LTE7IGo8eCtsZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zICs9IHRoaXMuYm9hcmRbaV1bal07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih5PT0wICYmIHghPTApe1xyXG4gICAgICAgICAgICBwb3MgPSAwO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSB5OyBpPD15KzE7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGogPSB4LTE7IGo8eCtsZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zICs9IHRoaXMuYm9hcmRbaV1bal07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIH1lbHNlIGlmKHkhPTAgJiYgeCE9MCl7XHJcbiAgICAgICAgICAgIHBvcz0wO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSB5LTE7IGk8PXkrMTsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IHgtMTsgajx4K2xlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgICBwb3MgKz0gdGhpcy5ib2FyZFtpXVtqXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgfSAgICBcclxuICAgIH1lbHNlIGlmKHk9PTAgJiYgeD09MCl7XHJcbiAgICAgICAgcG9zID0gMDtcclxuICAgICAgICBmb3IobGV0IGkgPSB5OyBpPD15KzI7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IHg7IGo8PXgrbGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgcG9zICs9IHRoaXMuYm9hcmRbaV1bal07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVQb3NpdGlvbihwb3MpO1xyXG4gICAgfWVsc2UgaWYoeT09MCAmJiB4IT0wKXtcclxuICAgICAgICBwb3MgPSAwO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IHk7IGk8PXkrMTsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKGxldCBqID0geC0xOyBqPD14K2xlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIHBvcyArPSB0aGlzLmJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgIH1lbHNlIGlmKHk9PTkgJiYgeD09MCl7XHJcbiAgICAgICAgcG9zID0wO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IHktMTsgaTw9eTsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKGxldCBqID0geDsgajw9eCtsZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBwb3MgKz0gdGhpcy5ib2FyZFtpXVtqXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICB9ZWxzZSBpZih5PT05ICYmIHghPTApe1xyXG4gICAgICAgIHBvcyA9MDtcclxuICAgICAgICBmb3IobGV0IGkgPSB5LTE7IGk8PXk7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IHgtMTsgajw9eCtsZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBwb3MgKz0gdGhpcy5ib2FyZFtpXVtqXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICB9ZWxzZSBpZih5IT0wICYmIHg9PTApe1xyXG4gICAgICAgIHBvcyA9MDtcclxuICAgICAgICBmb3IobGV0IGkgPSB5LTE7IGk8PXk7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IHg7IGo8PXgrbGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgcG9zICs9IHRoaXMuYm9hcmRbaV1bal07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVQb3NpdGlvbihwb3MpO1xyXG4gICAgfWVsc2UgaWYoeSE9MCAmJiB4IT0wKXtcclxuICAgICAgICBwb3M9MDtcclxuICAgICAgICBmb3IobGV0IGkgPSB5LTE7IGk8PXkrMTsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKGxldCBqID0geC0xOyBqPD14K2xlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIHBvcyArPSB0aGlzLmJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgIH1cclxuICAgIH0gXHJcbiAgICBhbmFsaXNlVmVydGljYWwgPSBmdW5jdGlvbih5LCB4LCBsZW5ndGgpe1xyXG4gICAgICAgIHZhciBwb3MgPSAwO1xyXG4gICAgICAgIGlmKHkrbGVuZ3RoID09IDEwKXtcclxuICAgICAgICAgICAgaWYoeSAhPSAwICYmIHggPT0gOSl7XHJcbiAgICAgICAgICAgICAgICBwb3M9MDtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9eS0xOyBpPHkrbGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaj14LTE7IGo8eCsxOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zICs9IHRoaXMuYm9hcmRbaV1bal07ICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHkgIT0gMCAmJiB4PT0wKXtcclxuICAgICAgICAgICAgICAgIHBvcz0wO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID15LTE7IGk8eStsZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqPXg7IGo8PXgrMTsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgICAgIHBvcyArPSB0aGlzLmJvYXJkW2ldW2pdOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZih5ICE9IDAgJiYgeCAhPSAwKXtcclxuICAgICAgICAgICAgICAgIHBvcz0wO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID15LTE7IGk8eStsZW5ndGgtMTsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGo9eC0xOyBqPHgrbGVuZ3RoLTE7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3MgKz0gdGhpcy5ib2FyZFtpXVtqXTsgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKHkgPT0wICYmIHg9PTApe1xyXG4gICAgICAgICAgICBwb3M9MDtcclxuICAgICAgICAgICAgZm9yKGxldCBpID15OyBpPD1sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo9eDsgajw9eCsxOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICBwb3MgKz0gdGhpcy5ib2FyZFtpXVtqXTsgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgICAgICB9ZWxzZSBpZih5ID09IDAgJiYgeCA9PSA5KXtcclxuICAgICAgICAgICAgcG9zPTA7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9eTsgaTx5K2xlbmd0aCsxOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqPXgtMTsgajx4KzE7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgIHBvcyArPSB0aGlzLmJvYXJkW2ldW2pdOyAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIH1lbHNlIGlmKHkgIT0wICYmIHg9PTApe1xyXG4gICAgICAgICAgICBwb3M9MDtcclxuICAgICAgICAgICAgZm9yKGxldCBpID15LTE7IGk8eStsZW5ndGgrMTsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaj14OyBqPHgrMTsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgcG9zICs9IHRoaXMuYm9hcmRbaV1bal07ICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgfWVsc2UgaWYoeSAhPTAgJiYgeCA9PSA5KXtcclxuICAgICAgICAgICAgcG9zPTA7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9eS0xOyBpPHkrbGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqPXgtMTsgajx4KzE7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgIHBvcyArPSB0aGlzLmJvYXJkW2ldW2pdOyAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIH1lbHNlIGlmKHkgIT0wICYmIHggIT0wKXtcclxuICAgICAgICAgICAgcG9zPTA7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9eS0xOyBpPHkrbGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqPXgtMTsgajx4K2xlbmd0aCsxOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICBwb3MgKz0gdGhpcy5ib2FyZFtpXVtqXTsgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgICAgICB9ZWxzZSBpZih5ID09IDAgJiYgeCAhPSAwKXtcclxuICAgICAgICAgICAgcG9zPTA7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9eTsgaTx5K2xlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaj14LTE7IGo8eCtsZW5ndGgtMTsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgcG9zICs9IHRoaXMuYm9hcmRbaV1bal07ICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFsaWRhdGVQb3NpdGlvbiA9IGZ1bmN0aW9uKHBvcyl7XHJcbiAgICAgICAgaWYocG9zICE9MCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICAgIGF0YWNrU2hpcCA9IGZ1bmN0aW9uKHksIHgpe1xyXG4gICAgICAgIGlmKHRoaXMuYm9hcmRbeV1beF0gPT0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmJvYXJkW3ldW3hdID09IDEpeyAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlzVmljdG9yeSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHN1bSA9IDA7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgMTA7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBzdW0gKz10aGlzLmJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHN1bSA9PSAtMjApe1xyXG4gICAgICAgICAgICByZXR1cm4gJ1dJTk5FUiEnO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gJ0xPU0VSISc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcG9zaXRpb24gPSBmdW5jdGlvbihudW1iZXIpe1xyXG4gICAgICAgIGlmKG51bWJlciA9PSAwKXtcclxuICAgICAgICAgICAgcmV0dXJuICdoJ1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gJ3YnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVCb2FyZCIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XHJcbmltcG9ydCBzaG93TnVtYmVyIGZyb20gXCIuL3JhbWRvbVhZXCI7XHJcbmNvbnN0IHRhYmxlXzEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYudGFibGUtMCcpO1xyXG5jb25zdCB0dXJuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uI3R1cm4nKTtcclxuXHJcbmNvbnN0IGFycmF5ID0gW107XHJcbnZhciBwb3NpdGlvbkggPSAnaCc7XHJcbnZhciB3aWR0aCA9IDEwO1xyXG52YXIgbnVtYmVyID0gMDtcclxudGFibGVfMS5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke3dpZHRofSwgMWZyKWA7XHJcbnRhYmxlXzEuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHt3aWR0aH0sIDFmcilgOyBcclxudGFibGVfMS5jbGFzc0xpc3QuYWRkKCd0YWJsZScpO1xyXG5jb25zdCBib2FyZF8xID0gbmV3IEdhbWVCb2FyZCgpO1xyXG50dXJuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGlmKHBvc2l0aW9uSCA9PSAnaCcpe1xyXG4gICAgICAgIHBvc2l0aW9uSCA9ICd2JztcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHBvc2l0aW9uSCA9ICdoJztcclxuICAgIH1cclxufSk7XHJcbmZ1bmN0aW9uIGdhbWVCb2FyZCgpe1xyXG4gICAgYm9hcmRfMS5pbml0aWFsaXplKCk7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKyl7XHJcbiAgICAgICAgYXJyYXlbaV0gPSBbXTtcclxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgMTA7IGorKyl7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBhcnJheVtpXVtqXSA9IHJvdztcclxuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xyXG4gICAgICAgICAgICB0YWJsZV8xLmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpfSwgJHtqfWApXHJcbiAgICAgICAgICAgIH0pOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuICAgIGNyZWF0ZVNoaXAoMywgOSwgNCwgJ3YnKTtcclxuICAgIGNyZWF0ZVNoaXAoMCwgNiwgMywgJ2gnKTtcclxuICAgIGNyZWF0ZVNoaXAoOSwgNiwgMywgJ2gnKTtcclxuICAgIGNyZWF0ZVNoaXAoNiwgNywgMiwgJ3YnKTtcclxuICAgIGNyZWF0ZVNoaXAoMiwgNywgMiwgJ3YnKTtcclxuICAgIGNyZWF0ZVNoaXAoNCwgNSwgMiwgJ3YnKTtcclxuICAgIGNyZWF0ZVNoaXAoMywgMiwgMSwgJ3YnKTtcclxuICAgIGNyZWF0ZVNoaXAoMCwgMiwgMSwgJ3YnKTtcclxuICAgIGNyZWF0ZVNoaXAoOSwgMiwgMSwgJ3YnKTtcclxuICAgIGNyZWF0ZVNoaXAoNywgMiwgMSwgJ3YnKTtcclxuICAgIFxyXG59XHJcbmZ1bmN0aW9uIGFjdGFja1NoaXBHVUkoeSx4KXtcclxuICAgIGlmKGJvYXJkXzEuYXRhY2tTaGlwKHksIHgpID09IGZhbHNlKXtcclxuICAgICAgICBib2FyZF8xLmJvYXJkW3ldW3hdID0gMDtcclxuICAgICAgICBhcnJheVt5XVt4XS5jbGFzc0xpc3QuYWRkKCdhdGFja0ZhaWx1cmUnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9ZWxzZSBpZihib2FyZF8xLmF0YWNrU2hpcCh5LCB4KSA9PSB0cnVlKXtcclxuICAgICAgICBib2FyZF8xLmJvYXJkW3ldW3hdID0gLTE7XHJcbiAgICAgICAgYXJyYXlbeV1beF0uY2xhc3NMaXN0LmFkZCgnYXRhY2tUYXJnZXQnKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjcmVhdGVTaGlwKHksIHgsIGxlbmd0aCwgcG9zaXRpb25TKXtcclxuICAgIGJvYXJkXzEuY3JlYXRlU2hpcCh5LCB4LCBsZW5ndGgsIHBvc2l0aW9uUylcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKXtcclxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgMTA7IGorKyl7XHJcbiAgICAgICAgICAgIGlmKGJvYXJkXzEuYm9hcmRbaV1bal0gPT0gMSl7XHJcbiAgICAgICAgICAgICAgICBhcnJheVtpXVtqXS5jbGFzc0xpc3QuYWRkKCdyb3ctMScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxufVxyXG5mdW5jdGlvbiBhbmFsaXNlKGluZGV4KXtcclxuICAgIHZhciB4ID0gc2hvd051bWJlcigxMCk7XHJcbiAgICB2YXIgeSA9IHNob3dOdW1iZXIoMTApO1xyXG4gICAgdmFyIGxlbmd0aCA9IHNob3dOdW1iZXIoNSk7XHJcbiAgICB2YXIgcG9zaXRpb25IID0gYm9hcmRfMS5wb3NpdGlvbihzaG93TnVtYmVyKDIpKTtcclxuICAgIGNvbnNvbGUubG9nKGxlbmd0aCk7XHJcbiAgICBpZihpbmRleCA9PSAwKXtcclxuICAgICAgICBpZihib2FyZF8xLmFuYWxpc2VQb3NpdGlvbih5LCB4LCA0LCBwb3NpdGlvbkgpID09IHRydWUpe1xyXG4gICAgICAgICAgICBjcmVhdGVTaGlwKHksIHgsIDQsIHBvc2l0aW9uSCk7IFxyXG4gICAgICAgIH1cclxuICAgIH1lbHNlIGlmKGluZGV4ID4wICYmIGluZGV4IDwzKXtcclxuICAgICAgICBpZihib2FyZF8xLmFuYWxpc2VQb3NpdGlvbih5LCB4LCAzLCBwb3NpdGlvbkgpID09IHRydWUpe1xyXG4gICAgICAgICAgICBjcmVhdGVTaGlwKHksIHgsIDMsIHBvc2l0aW9uSCk7IFxyXG4gICAgICAgIH1cclxuICAgIH1lbHNlIGlmKGluZGV4ID4yICYmIGluZGV4IDw2KXtcclxuICAgICAgICBpZihib2FyZF8xLmFuYWxpc2VQb3NpdGlvbih5LCB4LCAyLCBwb3NpdGlvbkgpID09IHRydWUpe1xyXG4gICAgICAgICAgICBjcmVhdGVTaGlwKHksIHgsIDIsIHBvc2l0aW9uSCk7IFxyXG4gICAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICAgIGlmKGJvYXJkXzEuYW5hbGlzZVBvc2l0aW9uKHksIHgsIDEsIHBvc2l0aW9uSCkgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGNyZWF0ZVNoaXAoeSwgeCwgMSwgcG9zaXRpb25IKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZUJvYXJkO1xyXG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL2dhbWVCb2FyZFwiO1xyXG5jb25zdCB0YWJsZV8xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnRhYmxlLTEnKTtcclxuY29uc3QgdHVybiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbiN0dXJuJyk7XHJcblxyXG5jb25zdCBhcnJheSA9IFtdO1xyXG52YXIgcG9zaXRpb25IID0gJ2gnO1xyXG52YXIgd2lkdGggPSAxMDtcclxudmFyIG51bWJlciA9IDA7XHJcbnRhYmxlXzEuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHt3aWR0aH0sIDFmcilgO1xyXG50YWJsZV8xLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBgcmVwZWF0KCR7d2lkdGh9LCAxZnIpYDsgXHJcbnRhYmxlXzEuY2xhc3NMaXN0LmFkZCgndGFibGUnKTtcclxuY29uc3QgYm9hcmRfMSA9IG5ldyBHYW1lQm9hcmQoKTtcclxudHVybi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICBpZihwb3NpdGlvbkggPT0gJ2gnKXtcclxuICAgICAgICBwb3NpdGlvbkggPSAndic7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBwb3NpdGlvbkggPSAnaCc7XHJcbiAgICB9XHJcbn0pO1xyXG5mdW5jdGlvbiBnYW1lQm9hcmRQQygpe1xyXG4gICAgYm9hcmRfMS5pbml0aWFsaXplKCk7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKyl7XHJcbiAgICAgICAgYXJyYXlbaV0gPSBbXTtcclxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgMTA7IGorKyl7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBhcnJheVtpXVtqXSA9IHJvdztcclxuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xyXG4gICAgICAgICAgICB0YWJsZV8xLmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgICAgICBpZihudW1iZXIgPCAxMCl7ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGJvYXJkXzEuYW5hbGlzZVBvc2l0aW9uKGksIGosIDMsIHBvc2l0aW9uSCkgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG51bWJlciA9PSA5KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVNoaXAoaSwgaiwgNCwgcG9zaXRpb25IKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcisrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihudW1iZXI8OSAmJiBudW1iZXI+Nil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTaGlwKGksIGosIDMsIHBvc2l0aW9uSCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXIrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYobnVtYmVyPDcgJiYgbnVtYmVyPjMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2hpcChpLCBqLCAyLCBwb3NpdGlvbkgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKG51bWJlciA+PTAgJiYgbnVtYmVyPDQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2hpcChpLCBqLCAxLCBwb3NpdGlvbkgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihhY3RhY2tTaGlwR1VJKGksIGopPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPbiBUYXJnZXQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYm9hcmRfMS5pc1ZpY3RvcnkoKSk7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7ICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG59XHJcbmZ1bmN0aW9uIGFjdGFja1NoaXBHVUkoeSx4KXtcclxuICAgIGlmKGJvYXJkXzEuYXRhY2tTaGlwKHksIHgpID09IGZhbHNlKXtcclxuICAgICAgICBib2FyZF8xLmJvYXJkW3ldW3hdID0gMDtcclxuICAgICAgICBhcnJheVt5XVt4XS5jbGFzc0xpc3QuYWRkKCdhdGFja0ZhaWx1cmUnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9ZWxzZSBpZihib2FyZF8xLmF0YWNrU2hpcCh5LCB4KSA9PSB0cnVlKXtcclxuICAgICAgICBib2FyZF8xLmJvYXJkW3ldW3hdID0gLTE7XHJcbiAgICAgICAgYXJyYXlbeV1beF0uY2xhc3NMaXN0LmFkZCgnYXRhY2tUYXJnZXQnKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjcmVhdGVTaGlwKHksIHgsIGxlbmd0aCwgcG9zaXRpb25TKXtcclxuICAgIGlmKHBvc2l0aW9uUyA9PSAnaCcpe1xyXG4gICAgICAgIGZvcihsZXQgaiA9IHg7IGo8eCtsZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgIGJvYXJkXzEuYm9hcmRbeV1bal0gPSAxO1xyXG4gICAgICAgICAgICBhcnJheVt5XVtqXS5jbGFzc0xpc3QuYWRkKCdyb3ctMScpO1xyXG4gICAgICAgIH1cclxuICAgIH1lbHNlIGlmKHBvc2l0aW9uSCA9PSAndicpe1xyXG4gICAgICAgIGZvcihsZXQgaiA9IHk7IGo8IHkrbGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICBhcnJheVtqXVt4XS5jbGFzc0xpc3QuYWRkKCdyb3ctMScpO1xyXG4gICAgICAgICAgICBib2FyZF8xLmJvYXJkW2pdW3hdID0gMTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBnYW1lQm9hcmRQQztcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd051bWJlcihpbnRlcil7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaW50ZXIpO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2FtZUJvYXJkIGZyb20gJy4vZ2FtZUJvYXJkR1VJJztcclxuLy9pbXBvcnQgR2FtZUJvYXJkIGZyb20gJy4vZ2FtZUJvYXJkJztcclxuaW1wb3J0IGdhbWVCb2FyZFBDIGZyb20gJy4vcGxheWVyUGMnO1xyXG5pbXBvcnQgc2hvd051bWJlciBmcm9tICcuL3JhbWRvbVhZJztcclxuZ2FtZUJvYXJkKCk7XHJcbmdhbWVCb2FyZFBDKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9