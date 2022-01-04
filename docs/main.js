/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const table_1 = document.querySelector('div.table-1');
const ship_4 = document.querySelector('button#ship-4');
const ship_3 = document.querySelector('button#ship-3');
const ship_2 = document.querySelector('button#ship-2');
const ship_1 = document.querySelector('button#ship-1');
const turn = document.querySelector('button#turn');
var lengthShip = 4;
const array = [];
const board = [];
const statusPosition = new Array(10).fill(new Array(10));
var modShip = 4;
var width = 10;
var positionH = 'h';
const pos = [];
table_1.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
table_1.style.gridTemplateRows = `repeat(${width}, 1fr)`; 


turn.addEventListener('click', ()=>{
    if(positionH == 'h'){
        positionH = 'v';
        console.log(positionH);
    }else{
        positionH = 'h';
        console.log(positionH);
    }
});
function gameBoard(){
    for(let i = 0; i < 10; i++){
        array[i] = [];
        board[i] = [];
        for(let j = 0; j < 10; j++){            
            const row = document.createElement('div');
            array[i][j] = row;
            board[i][j] = 0;
            row.classList.add('row');
            table_1.appendChild(row);
            row.addEventListener('click', ()=>{
                console.log(`${i}, ${j}`);
                console.log(analiePosition(i, j, 3, positionH));
                if(analiePosition(i, j, 3, positionH) == true){
                    createShip(i, j, 3, positionH);
                    lengthShip--;
                    console.log(lengthShip);
                }
            });
        
        }
    }    
}
function analiePosition(y, x, length, positionS){
    var pos = 0;
    if(length == 4){
        if(positionS == 'h'){
            if(x+length > 10){
                return false;
            }else{
                return true;
            }
        }else if(positionH == 'v'){
            if(y+length > 10){
                return false;
            }else{
                return true;
            }
        }
    }else if(length == 3){
        if(positionS == 'h'){
            if(x+length == 10){
                if(y==9 && x!=0){
                    pos = 0;
                    for(let i = y-1; i<y+1; i++){
                        for(let j = x-1; j<x+length; j++){
                            pos += board[i][j];
                            console.log(`${i}, ${j}`);
                        }
                    }
                    if(pos !=0){
                        return false;
                    }else{
                        return true;
                    } 
                }
                if(y==0 && x!=0){
                    pos = 0;
                    for(let i = y; i<=y+1; i++){
                        for(let j = x-1; j<x+length; j++){
                            pos += board[i][j];
                            console.log(`${i}, ${j}`);
                        }
                    }
                    if(pos !=0){
                        return false;
                    }else{
                        return true;
                    }
                }else if(y!=0 && x!=0){
                    pos=0;
                    for(let i = y-1; i<=y+1; i++){
                        for(let j = x-1; j<x+length; j++){
                            pos += board[i][j];
                            console.log(`${i}, ${j}`);
                        }
                    }
                    if(pos !=0){
                        return false;
                    }else{
                        return true;
                    }
                }    
            }else if(y==0 && x==0){
                pos = 0;
                for(let i = y; i<=y+2; i++){
                    for(let j = x; j<=x+length; j++){
                        pos += board[i][j];
                        console.log(`${i}, ${j}`);
                    }
                }
                if(pos !=0){
                    return false;
                }else{
                    return true;
                }
            }else if(y==0 && x!=0){
                pos = 0;
                for(let i = y; i<=y+1; i++){
                    for(let j = x-1; j<=x+length; j++){
                        pos += board[i][j];
                        console.log(`${i}, ${j}`);
                    }
                }
                if(pos !=0){
                    return false;
                }else{
                    return true;
                }
            }else if(y==9 && x==0){
                pos =0;
                for(let i = y-1; i<=y; i++){
                    for(let j = x; j<=x+length; j++){
                        pos += board[i][j];
                        console.log(`${i}, ${j}`);
                    }
                }
                if(pos !=0){
                    return false;
                }else{
                    return true;
                }
            }else if(y==9 && x!=0){
                pos =0;
                for(let i = y-1; i<=y; i++){
                    for(let j = x-1; j<=x+length; j++){
                        pos += board[i][j];
                        console.log(`${i}, ${j}`);
                    }
                }
                if(pos !=0){
                    return false;
                }else{
                    return true;
                }
            }else if(y!=0 && x==0){
                pos =0;
                for(let i = y-1; i<=y; i++){
                    for(let j = x; j<=x+length; j++){
                        pos += board[i][j];
                        console.log(`${i}, ${j}`);
                    }
                }
                if(pos !=0){
                    return false;
                }else{
                    return true;
                }
            }else if(y!=0 && x!=0){
                pos=0;
                for(let i = y-1; i<=y+1; i++){
                    for(let j = x-1; j<=x+length; j++){
                        pos += board[i][j];
                        console.log(`${i}, ${j}`);
                    }
                }
                if(pos !=0){
                    return false;
                }else{
                    return true;
                }
            } 
        }else if(positionH == 'v'){
            if(y+length > 10){
                return false;
            }else{
                return true;
            }
        }
    }
}
function createShip(y, x, length, positionS){
    console.log(x);
    console.log(y);
    if(length == 4){
        if(positionS == 'h'){
            for(let j = x; j<x+length; j++){
                board[y][j] = 1;
                array[y][j].classList.add('row-1');
            }
        }else if(positionH == 'v'){
            for(let j = y; j< y+length; j++){
                array[j][x].classList.add('row-1');
                board[j][x] = 1;
            }
        }
    }else if(length == 3){
        if(positionS == 'h'){
            for(let j = x; j<x+length; j++){
                board[y][j] = 1;
                array[y][j].classList.add('row-1');
            }
        }else if(positionH == 'v'){
            for(let j = y; j< y+length; j++){
                array[j][x].classList.add('row-1');
                board[j][x] = 1;
            }
        }
    }
}
gameBoard();
//board[1][1] =1;
//board[8][3] =1;

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsTUFBTTtBQUNwRCwyQ0FBMkMsTUFBTTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixFQUFFLElBQUksRUFBRTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDLHlDQUF5QyxZQUFZO0FBQ3JEO0FBQ0EsMkNBQTJDLEVBQUUsSUFBSSxFQUFFO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsUUFBUTtBQUMzQyx5Q0FBeUMsWUFBWTtBQUNyRDtBQUNBLDJDQUEyQyxFQUFFLElBQUksRUFBRTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EscUNBQXFDLFFBQVE7QUFDN0MseUNBQXlDLFlBQVk7QUFDckQ7QUFDQSwyQ0FBMkMsRUFBRSxJQUFJLEVBQUU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsK0JBQStCLFFBQVE7QUFDdkMsbUNBQW1DLGFBQWE7QUFDaEQ7QUFDQSx1Q0FBdUMsRUFBRSxJQUFJLEVBQUU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLCtCQUErQixRQUFRO0FBQ3ZDLHFDQUFxQyxhQUFhO0FBQ2xEO0FBQ0EsdUNBQXVDLEVBQUUsSUFBSSxFQUFFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxpQ0FBaUMsTUFBTTtBQUN2QyxtQ0FBbUMsYUFBYTtBQUNoRDtBQUNBLHVDQUF1QyxFQUFFLElBQUksRUFBRTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsaUNBQWlDLE1BQU07QUFDdkMscUNBQXFDLGFBQWE7QUFDbEQ7QUFDQSx1Q0FBdUMsRUFBRSxJQUFJLEVBQUU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGlDQUFpQyxNQUFNO0FBQ3ZDLG1DQUFtQyxhQUFhO0FBQ2hEO0FBQ0EsdUNBQXVDLEVBQUUsSUFBSSxFQUFFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxpQ0FBaUMsUUFBUTtBQUN6QyxxQ0FBcUMsYUFBYTtBQUNsRDtBQUNBLHVDQUF1QyxFQUFFLElBQUksRUFBRTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9CYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRhYmxlXzEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYudGFibGUtMScpO1xyXG5jb25zdCBzaGlwXzQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24jc2hpcC00Jyk7XHJcbmNvbnN0IHNoaXBfMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbiNzaGlwLTMnKTtcclxuY29uc3Qgc2hpcF8yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uI3NoaXAtMicpO1xyXG5jb25zdCBzaGlwXzEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24jc2hpcC0xJyk7XHJcbmNvbnN0IHR1cm4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24jdHVybicpO1xyXG52YXIgbGVuZ3RoU2hpcCA9IDQ7XHJcbmNvbnN0IGFycmF5ID0gW107XHJcbmNvbnN0IGJvYXJkID0gW107XHJcbmNvbnN0IHN0YXR1c1Bvc2l0aW9uID0gbmV3IEFycmF5KDEwKS5maWxsKG5ldyBBcnJheSgxMCkpO1xyXG52YXIgbW9kU2hpcCA9IDQ7XHJcbnZhciB3aWR0aCA9IDEwO1xyXG52YXIgcG9zaXRpb25IID0gJ2gnO1xyXG5jb25zdCBwb3MgPSBbXTtcclxudGFibGVfMS5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke3dpZHRofSwgMWZyKWA7XHJcbnRhYmxlXzEuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHt3aWR0aH0sIDFmcilgOyBcclxuXHJcblxyXG50dXJuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGlmKHBvc2l0aW9uSCA9PSAnaCcpe1xyXG4gICAgICAgIHBvc2l0aW9uSCA9ICd2JztcclxuICAgICAgICBjb25zb2xlLmxvZyhwb3NpdGlvbkgpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcG9zaXRpb25IID0gJ2gnO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBvc2l0aW9uSCk7XHJcbiAgICB9XHJcbn0pO1xyXG5mdW5jdGlvbiBnYW1lQm9hcmQoKXtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKXtcclxuICAgICAgICBhcnJheVtpXSA9IFtdO1xyXG4gICAgICAgIGJvYXJkW2ldID0gW107XHJcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IDEwOyBqKyspeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgYXJyYXlbaV1bal0gPSByb3c7XHJcbiAgICAgICAgICAgIGJvYXJkW2ldW2pdID0gMDtcclxuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xyXG4gICAgICAgICAgICB0YWJsZV8xLmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpfSwgJHtqfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYW5hbGllUG9zaXRpb24oaSwgaiwgMywgcG9zaXRpb25IKSk7XHJcbiAgICAgICAgICAgICAgICBpZihhbmFsaWVQb3NpdGlvbihpLCBqLCAzLCBwb3NpdGlvbkgpID09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVNoaXAoaSwgaiwgMywgcG9zaXRpb25IKTtcclxuICAgICAgICAgICAgICAgICAgICBsZW5ndGhTaGlwLS07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobGVuZ3RoU2hpcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcbn1cclxuZnVuY3Rpb24gYW5hbGllUG9zaXRpb24oeSwgeCwgbGVuZ3RoLCBwb3NpdGlvblMpe1xyXG4gICAgdmFyIHBvcyA9IDA7XHJcbiAgICBpZihsZW5ndGggPT0gNCl7XHJcbiAgICAgICAgaWYocG9zaXRpb25TID09ICdoJyl7XHJcbiAgICAgICAgICAgIGlmKHgrbGVuZ3RoID4gMTApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYocG9zaXRpb25IID09ICd2Jyl7XHJcbiAgICAgICAgICAgIGlmKHkrbGVuZ3RoID4gMTApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfWVsc2UgaWYobGVuZ3RoID09IDMpe1xyXG4gICAgICAgIGlmKHBvc2l0aW9uUyA9PSAnaCcpe1xyXG4gICAgICAgICAgICBpZih4K2xlbmd0aCA9PSAxMCl7XHJcbiAgICAgICAgICAgICAgICBpZih5PT05ICYmIHghPTApe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0geS0xOyBpPHkrMTsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqID0geC0xOyBqPHgrbGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zICs9IGJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7aX0sICR7an1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihwb3MgIT0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoeT09MCAmJiB4IT0wKXtcclxuICAgICAgICAgICAgICAgICAgICBwb3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IHk7IGk8PXkrMTsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqID0geC0xOyBqPHgrbGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zICs9IGJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7aX0sICR7an1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihwb3MgIT0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZih5IT0wICYmIHghPTApe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcz0wO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IHktMTsgaTw9eSsxOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSB4LTE7IGo8eCtsZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MgKz0gYm9hcmRbaV1bal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpfSwgJHtqfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBvcyAhPTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHk9PTAgJiYgeD09MCl7XHJcbiAgICAgICAgICAgICAgICBwb3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0geTsgaTw9eSsyOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IHg7IGo8PXgrbGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MgKz0gYm9hcmRbaV1bal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2l9LCAke2p9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYocG9zICE9MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHk9PTAgJiYgeCE9MCl7XHJcbiAgICAgICAgICAgICAgICBwb3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0geTsgaTw9eSsxOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IHgtMTsgajw9eCtsZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcyArPSBib2FyZFtpXVtqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7aX0sICR7an1gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihwb3MgIT0wKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2UgaWYoeT09OSAmJiB4PT0wKXtcclxuICAgICAgICAgICAgICAgIHBvcyA9MDtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IHktMTsgaTw9eTsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSB4OyBqPD14K2xlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zICs9IGJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpfSwgJHtqfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHBvcyAhPTApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZSBpZih5PT05ICYmIHghPTApe1xyXG4gICAgICAgICAgICAgICAgcG9zID0wO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0geS0xOyBpPD15OyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IHgtMTsgajw9eCtsZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcyArPSBib2FyZFtpXVtqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7aX0sICR7an1gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihwb3MgIT0wKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2UgaWYoeSE9MCAmJiB4PT0wKXtcclxuICAgICAgICAgICAgICAgIHBvcyA9MDtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IHktMTsgaTw9eTsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSB4OyBqPD14K2xlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zICs9IGJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpfSwgJHtqfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHBvcyAhPTApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZSBpZih5IT0wICYmIHghPTApe1xyXG4gICAgICAgICAgICAgICAgcG9zPTA7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSB5LTE7IGk8PXkrMTsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGogPSB4LTE7IGo8PXgrbGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MgKz0gYm9hcmRbaV1bal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2l9LCAke2p9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYocG9zICE9MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfWVsc2UgaWYocG9zaXRpb25IID09ICd2Jyl7XHJcbiAgICAgICAgICAgIGlmKHkrbGVuZ3RoID4gMTApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVNoaXAoeSwgeCwgbGVuZ3RoLCBwb3NpdGlvblMpe1xyXG4gICAgY29uc29sZS5sb2coeCk7XHJcbiAgICBjb25zb2xlLmxvZyh5KTtcclxuICAgIGlmKGxlbmd0aCA9PSA0KXtcclxuICAgICAgICBpZihwb3NpdGlvblMgPT0gJ2gnKXtcclxuICAgICAgICAgICAgZm9yKGxldCBqID0geDsgajx4K2xlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIGJvYXJkW3ldW2pdID0gMTtcclxuICAgICAgICAgICAgICAgIGFycmF5W3ldW2pdLmNsYXNzTGlzdC5hZGQoJ3Jvdy0xJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZihwb3NpdGlvbkggPT0gJ3YnKXtcclxuICAgICAgICAgICAgZm9yKGxldCBqID0geTsgajwgeStsZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBhcnJheVtqXVt4XS5jbGFzc0xpc3QuYWRkKCdyb3ctMScpO1xyXG4gICAgICAgICAgICAgICAgYm9hcmRbal1beF0gPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfWVsc2UgaWYobGVuZ3RoID09IDMpe1xyXG4gICAgICAgIGlmKHBvc2l0aW9uUyA9PSAnaCcpe1xyXG4gICAgICAgICAgICBmb3IobGV0IGogPSB4OyBqPHgrbGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgYm9hcmRbeV1bal0gPSAxO1xyXG4gICAgICAgICAgICAgICAgYXJyYXlbeV1bal0uY2xhc3NMaXN0LmFkZCgncm93LTEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKHBvc2l0aW9uSCA9PSAndicpe1xyXG4gICAgICAgICAgICBmb3IobGV0IGogPSB5OyBqPCB5K2xlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIGFycmF5W2pdW3hdLmNsYXNzTGlzdC5hZGQoJ3Jvdy0xJyk7XHJcbiAgICAgICAgICAgICAgICBib2FyZFtqXVt4XSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZ2FtZUJvYXJkKCk7XHJcbi8vYm9hcmRbMV1bMV0gPTE7XHJcbi8vYm9hcmRbOF1bM10gPTE7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==