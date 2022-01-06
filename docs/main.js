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
var number = 0;

turn.addEventListener('click', ()=>{
    if(positionH == 'h'){
        positionH = 'v';
    }else{
        positionH = 'h';
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
                if(number < 10){                    
                    console.log(analiePosition(i, j, 3, positionH));
                    if(analiePosition(i, j, 3, positionH) == true){
                        if(number == 9){
                            createShip(i, j, 4, positionH);
                            console.log(`TRy:${number}`);
                            number++;
                        }else if(number<9 && number>6){
                            createShip(i, j, 3, positionH);
                            console.log(`TRy:${number}`);
                            number++;
                        }else if(number<7 && number>3){
                            createShip(i, j, 2, positionH);
                            console.log(`TRy:${number}`);
                            number++;
                        }else if(number >=0 && number<4){
                            createShip(i, j, 1, positionH);
                            console.log(`TRy:${number}`);
                            number++;
                        }
                    }  
                }else {
                    console.log('lets go!');
                    console.log(`TRy:${number}`);
                    console.log(`${i}, ${j}`);
                    if(actackShipGUI(i, j)== false){
                        console.log('FAilure');
                    }else if(actackShipGUI(i, j)== true){
                        console.log('On Target');
                    }else{
                        console.log('try again');
                    }
                }                
            });        
        }
    }    
}
function actackShipGUI(y,x){
    if(atackShip(y, x) == null){
        board[y][x] = -1;
        array[y][x].classList.add('atackFailure');
        return false;
    }else if(atackShip(y, x) == false){
        return null;
    }else{
        board[y][x] = -1;
        array[y][x].classList.add('atackTarget');
        return true;
    }
}
function atackShip(y, x){
    if(board[y][x] == -1){
        return false;
    }else if(board[y][x] == 1){        
        return true;
    }else{
        return null;
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
            return analiseHorizontal(y,x,length);
        }else if(positionH == 'v'){
            return analiseVertical(y, x, length);
        }
    }
}
function analiseVertical(y, x, length){
    var pos = 0;
    if(y+length == 10){
        if(y != 0 && x == 9){
            pos=0;
            for(let i =y-1; i<y+length; i++){
                for(let j=x-1; j<x+1; j++){
                  pos += board[i][j];  
                  console.log(`${i}, ${j}`);
                }
            }
            return validatePosition(pos);
        }else if(y != 0 && x==0){
            pos=0;
            for(let i =y-1; i<y+length; i++){
                for(let j=x; j<=x+1; j++){
                  pos += board[i][j];  
                  console.log(`${i}, ${j}`);
                }
            }
            return validatePosition(pos);
        }else if(y != 0 && x != 0){
            pos=0;
            for(let i =y-1; i<y+length-1; i++){
                for(let j=x-1; j<x+length-1; j++){
                  pos += board[i][j];  
                  console.log(`${i}, ${j}`);
                }
            }
            return validatePosition(pos);
        }
    }else if(y ==0 && x==0){
        pos=0;
        for(let i =y; i<=length; i++){
            for(let j=x; j<=x+1; j++){
              pos += board[i][j];  
              console.log(`${i}, ${j}`);
            }
        }
        return validatePosition(pos);
    }else if(y == 0 && x == 9){
        pos=0;
        console.log('entrei')
        for(let i =y; i<y+length+1; i++){
            for(let j=x-1; j<x+1; j++){
              pos += board[i][j];  
              console.log(`${i}, ${j}`);
            }
        }
        return validatePosition(pos);
    }else if(y !=0 && x==0){
        pos=0;
        for(let i =y-1; i<y+length+1; i++){
            for(let j=x; j<=x+1; j++){
              pos += board[i][j];  
              console.log(`${i}, ${j}`);
            }
        }
        return validatePosition(pos);
    }else if(y !=0 && x == 9){
        pos=0;
        for(let i =y-1; i<y+length; i++){
            for(let j=x-1; j<x+1; j++){
              pos += board[i][j];  
              console.log(`${i}, ${j}`);
            }
        }
        return validatePosition(pos);
    }else if(y !=0 && x !=0){
        pos=0;
        for(let i =y-1; i<y+length; i++){
            for(let j=x-1; j<x+length-1; j++){
              pos += board[i][j];  
              console.log(`${i}, ${j}`);
            }
        }
        return validatePosition(pos);
    }else if(y == 0 && x != 0){
        pos=0;
        for(let i =y; i<y+length; i++){
            for(let j=x-1; j<x+length-1; j++){
              pos += board[i][j];  
              console.log(`${i}, ${j}`);
            }
        }
        return validatePosition(pos);
    }
}
function analiseHorizontal(y, x, length){
    var pos = 0;
    if(x+length == 10){
        if(y==9 && x!=0){
            pos = 0;
            for(let i = y-1; i<y+1; i++){
                for(let j = x-1; j<x+length; j++){
                    pos += board[i][j];
                    console.log(`${i}, ${j}`);
                }
            }
            return validatePosition(pos);
        }
        if(y==0 && x!=0){
            pos = 0;
            for(let i = y; i<=y+1; i++){
                for(let j = x-1; j<x+length; j++){
                    pos += board[i][j];
                    console.log(`${i}, ${j}`);
                }
            }
            return validatePosition(pos);
        }else if(y!=0 && x!=0){
            pos=0;
            for(let i = y-1; i<=y+1; i++){
                for(let j = x-1; j<x+length; j++){
                    pos += board[i][j];
                    console.log(`${i}, ${j}`);
                }
            }
            return validatePosition(pos);
        }    
    }else if(y==0 && x==0){
        pos = 0;
        for(let i = y; i<=y+2; i++){
            for(let j = x; j<=x+length; j++){
                pos += board[i][j];
                console.log(`${i}, ${j}`);
            }
        }
        return validatePosition(pos);
    }else if(y==0 && x!=0){
        pos = 0;
        for(let i = y; i<=y+1; i++){
            for(let j = x-1; j<=x+length; j++){
                pos += board[i][j];
                console.log(`${i}, ${j}`);
            }
        }
        return validatePosition(pos);
    }else if(y==9 && x==0){
        pos =0;
        for(let i = y-1; i<=y; i++){
            for(let j = x; j<=x+length; j++){
                pos += board[i][j];
                console.log(`${i}, ${j}`);
            }
        }
        return validatePosition(pos);
    }else if(y==9 && x!=0){
        pos =0;
        for(let i = y-1; i<=y; i++){
            for(let j = x-1; j<=x+length; j++){
                pos += board[i][j];
                console.log(`${i}, ${j}`);
            }
        }
        return validatePosition(pos);
    }else if(y!=0 && x==0){
        pos =0;
        for(let i = y-1; i<=y; i++){
            for(let j = x; j<=x+length; j++){
                pos += board[i][j];
                console.log(`${i}, ${j}`);
            }
        }
        return validatePosition(pos);
    }else if(y!=0 && x!=0){
        pos=0;
        for(let i = y-1; i<=y+1; i++){
            for(let j = x-1; j<=x+length; j++){
                pos += board[i][j];
                console.log(`${i}, ${j}`);
            }
        }
        return validatePosition(pos);
    } 
}
function validatePosition(pos){
    if(pos !=0){
        return false;
    }else{
        return true;
    } 
}
function createShip(y, x, length, positionS){
    var id =0;
    console.log(x);
    console.log(y);
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

gameBoard();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsTUFBTTtBQUNwRCwyQ0FBMkMsTUFBTTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxPQUFPO0FBQ3REO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsK0NBQStDLE9BQU87QUFDdEQ7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSwrQ0FBK0MsT0FBTztBQUN0RDtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLCtDQUErQyxPQUFPO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLHVDQUF1QyxPQUFPO0FBQzlDLG1DQUFtQyxFQUFFLElBQUksRUFBRTtBQUMzQztBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsWUFBWTtBQUN4QywrQkFBK0IsT0FBTztBQUN0QztBQUNBLGlDQUFpQyxFQUFFLElBQUksRUFBRTtBQUN6QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw0QkFBNEIsWUFBWTtBQUN4Qyw2QkFBNkIsUUFBUTtBQUNyQztBQUNBLGlDQUFpQyxFQUFFLElBQUksRUFBRTtBQUN6QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw0QkFBNEIsY0FBYztBQUMxQywrQkFBK0IsY0FBYztBQUM3QztBQUNBLGlDQUFpQyxFQUFFLElBQUksRUFBRTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHNCQUFzQixXQUFXO0FBQ2pDLHlCQUF5QixRQUFRO0FBQ2pDO0FBQ0EsNkJBQTZCLEVBQUUsSUFBSSxFQUFFO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLGNBQWM7QUFDcEMsMkJBQTJCLE9BQU87QUFDbEM7QUFDQSw2QkFBNkIsRUFBRSxJQUFJLEVBQUU7QUFDckM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esd0JBQXdCLGNBQWM7QUFDdEMseUJBQXlCLFFBQVE7QUFDakM7QUFDQSw2QkFBNkIsRUFBRSxJQUFJLEVBQUU7QUFDckM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEMsMkJBQTJCLE9BQU87QUFDbEM7QUFDQSw2QkFBNkIsRUFBRSxJQUFJLEVBQUU7QUFDckM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEMsMkJBQTJCLGNBQWM7QUFDekM7QUFDQSw2QkFBNkIsRUFBRSxJQUFJLEVBQUU7QUFDckM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEMsMkJBQTJCLGNBQWM7QUFDekM7QUFDQSw2QkFBNkIsRUFBRSxJQUFJLEVBQUU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsT0FBTztBQUNwQyxpQ0FBaUMsWUFBWTtBQUM3QztBQUNBLG1DQUFtQyxFQUFFLElBQUksRUFBRTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsUUFBUTtBQUNuQyxpQ0FBaUMsWUFBWTtBQUM3QztBQUNBLG1DQUFtQyxFQUFFLElBQUksRUFBRTtBQUMzQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw2QkFBNkIsUUFBUTtBQUNyQyxpQ0FBaUMsWUFBWTtBQUM3QztBQUNBLG1DQUFtQyxFQUFFLElBQUksRUFBRTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHVCQUF1QixRQUFRO0FBQy9CLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0EsK0JBQStCLEVBQUUsSUFBSSxFQUFFO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHVCQUF1QixRQUFRO0FBQy9CLDZCQUE2QixhQUFhO0FBQzFDO0FBQ0EsK0JBQStCLEVBQUUsSUFBSSxFQUFFO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHlCQUF5QixNQUFNO0FBQy9CLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0EsK0JBQStCLEVBQUUsSUFBSSxFQUFFO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHlCQUF5QixNQUFNO0FBQy9CLDZCQUE2QixhQUFhO0FBQzFDO0FBQ0EsK0JBQStCLEVBQUUsSUFBSSxFQUFFO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHlCQUF5QixNQUFNO0FBQy9CLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0EsK0JBQStCLEVBQUUsSUFBSSxFQUFFO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHlCQUF5QixRQUFRO0FBQ2pDLDZCQUE2QixhQUFhO0FBQzFDO0FBQ0EsK0JBQStCLEVBQUUsSUFBSSxFQUFFO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCx1QkFBdUIsYUFBYTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGFibGVfMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi50YWJsZS0xJyk7XHJcbmNvbnN0IHNoaXBfNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbiNzaGlwLTQnKTtcclxuY29uc3Qgc2hpcF8zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uI3NoaXAtMycpO1xyXG5jb25zdCBzaGlwXzIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24jc2hpcC0yJyk7XHJcbmNvbnN0IHNoaXBfMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbiNzaGlwLTEnKTtcclxuY29uc3QgdHVybiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbiN0dXJuJyk7XHJcbnZhciBsZW5ndGhTaGlwID0gNDtcclxuY29uc3QgYXJyYXkgPSBbXTtcclxuY29uc3QgYm9hcmQgPSBbXTtcclxuY29uc3Qgc3RhdHVzUG9zaXRpb24gPSBuZXcgQXJyYXkoMTApLmZpbGwobmV3IEFycmF5KDEwKSk7XHJcbnZhciBtb2RTaGlwID0gNDtcclxudmFyIHdpZHRoID0gMTA7XHJcbnZhciBwb3NpdGlvbkggPSAnaCc7XHJcbmNvbnN0IHBvcyA9IFtdO1xyXG50YWJsZV8xLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7d2lkdGh9LCAxZnIpYDtcclxudGFibGVfMS5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gYHJlcGVhdCgke3dpZHRofSwgMWZyKWA7IFxyXG52YXIgbnVtYmVyID0gMDtcclxuXHJcbnR1cm4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgaWYocG9zaXRpb25IID09ICdoJyl7XHJcbiAgICAgICAgcG9zaXRpb25IID0gJ3YnO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcG9zaXRpb25IID0gJ2gnO1xyXG4gICAgfVxyXG59KTtcclxuZnVuY3Rpb24gZ2FtZUJvYXJkKCl7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKyl7XHJcbiAgICAgICAgYXJyYXlbaV0gPSBbXTtcclxuICAgICAgICBib2FyZFtpXSA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCAxMDsgaisrKXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGFycmF5W2ldW2pdID0gcm93O1xyXG4gICAgICAgICAgICBib2FyZFtpXVtqXSA9IDA7XHJcbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcclxuICAgICAgICAgICAgdGFibGVfMS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgICAgICByb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYobnVtYmVyIDwgMTApeyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYW5hbGllUG9zaXRpb24oaSwgaiwgMywgcG9zaXRpb25IKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYW5hbGllUG9zaXRpb24oaSwgaiwgMywgcG9zaXRpb25IKSA9PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobnVtYmVyID09IDkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2hpcChpLCBqLCA0LCBwb3NpdGlvbkgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFRSeToke251bWJlcn1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcisrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihudW1iZXI8OSAmJiBudW1iZXI+Nil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTaGlwKGksIGosIDMsIHBvc2l0aW9uSCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVFJ5OiR7bnVtYmVyfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKG51bWJlcjw3ICYmIG51bWJlcj4zKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVNoaXAoaSwgaiwgMiwgcG9zaXRpb25IKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUUnk6JHtudW1iZXJ9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXIrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYobnVtYmVyID49MCAmJiBudW1iZXI8NCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTaGlwKGksIGosIDEsIHBvc2l0aW9uSCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVFJ5OiR7bnVtYmVyfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbGV0cyBnbyEnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVFJ5OiR7bnVtYmVyfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2l9LCAke2p9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYWN0YWNrU2hpcEdVSShpLCBqKT09IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZBaWx1cmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihhY3RhY2tTaGlwR1VJKGksIGopPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPbiBUYXJnZXQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RyeSBhZ2FpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxufVxyXG5mdW5jdGlvbiBhY3RhY2tTaGlwR1VJKHkseCl7XHJcbiAgICBpZihhdGFja1NoaXAoeSwgeCkgPT0gbnVsbCl7XHJcbiAgICAgICAgYm9hcmRbeV1beF0gPSAtMTtcclxuICAgICAgICBhcnJheVt5XVt4XS5jbGFzc0xpc3QuYWRkKCdhdGFja0ZhaWx1cmUnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9ZWxzZSBpZihhdGFja1NoaXAoeSwgeCkgPT0gZmFsc2Upe1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgYm9hcmRbeV1beF0gPSAtMTtcclxuICAgICAgICBhcnJheVt5XVt4XS5jbGFzc0xpc3QuYWRkKCdhdGFja1RhcmdldCcpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGF0YWNrU2hpcCh5LCB4KXtcclxuICAgIGlmKGJvYXJkW3ldW3hdID09IC0xKXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9ZWxzZSBpZihib2FyZFt5XVt4XSA9PSAxKXsgICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYW5hbGllUG9zaXRpb24oeSwgeCwgbGVuZ3RoLCBwb3NpdGlvblMpe1xyXG4gICAgdmFyIHBvcyA9IDA7XHJcbiAgICBpZihsZW5ndGggPT0gNCl7XHJcbiAgICAgICAgaWYocG9zaXRpb25TID09ICdoJyl7XHJcbiAgICAgICAgICAgIGlmKHgrbGVuZ3RoID4gMTApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYocG9zaXRpb25IID09ICd2Jyl7XHJcbiAgICAgICAgICAgIGlmKHkrbGVuZ3RoID4gMTApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfWVsc2UgaWYobGVuZ3RoID09IDMpe1xyXG4gICAgICAgIGlmKHBvc2l0aW9uUyA9PSAnaCcpe1xyXG4gICAgICAgICAgICByZXR1cm4gYW5hbGlzZUhvcml6b250YWwoeSx4LGxlbmd0aCk7XHJcbiAgICAgICAgfWVsc2UgaWYocG9zaXRpb25IID09ICd2Jyl7XHJcbiAgICAgICAgICAgIHJldHVybiBhbmFsaXNlVmVydGljYWwoeSwgeCwgbGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYW5hbGlzZVZlcnRpY2FsKHksIHgsIGxlbmd0aCl7XHJcbiAgICB2YXIgcG9zID0gMDtcclxuICAgIGlmKHkrbGVuZ3RoID09IDEwKXtcclxuICAgICAgICBpZih5ICE9IDAgJiYgeCA9PSA5KXtcclxuICAgICAgICAgICAgcG9zPTA7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9eS0xOyBpPHkrbGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqPXgtMTsgajx4KzE7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgIHBvcyArPSBib2FyZFtpXVtqXTsgIFxyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpfSwgJHtqfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgfWVsc2UgaWYoeSAhPSAwICYmIHg9PTApe1xyXG4gICAgICAgICAgICBwb3M9MDtcclxuICAgICAgICAgICAgZm9yKGxldCBpID15LTE7IGk8eStsZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo9eDsgajw9eCsxOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICBwb3MgKz0gYm9hcmRbaV1bal07ICBcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7aX0sICR7an1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIH1lbHNlIGlmKHkgIT0gMCAmJiB4ICE9IDApe1xyXG4gICAgICAgICAgICBwb3M9MDtcclxuICAgICAgICAgICAgZm9yKGxldCBpID15LTE7IGk8eStsZW5ndGgtMTsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaj14LTE7IGo8eCtsZW5ndGgtMTsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgcG9zICs9IGJvYXJkW2ldW2pdOyAgXHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2l9LCAke2p9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgICAgICB9XHJcbiAgICB9ZWxzZSBpZih5ID09MCAmJiB4PT0wKXtcclxuICAgICAgICBwb3M9MDtcclxuICAgICAgICBmb3IobGV0IGkgPXk7IGk8PWxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKGxldCBqPXg7IGo8PXgrMTsgaisrKXtcclxuICAgICAgICAgICAgICBwb3MgKz0gYm9hcmRbaV1bal07ICBcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpfSwgJHtqfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICB9ZWxzZSBpZih5ID09IDAgJiYgeCA9PSA5KXtcclxuICAgICAgICBwb3M9MDtcclxuICAgICAgICBjb25zb2xlLmxvZygnZW50cmVpJylcclxuICAgICAgICBmb3IobGV0IGkgPXk7IGk8eStsZW5ndGgrMTsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKGxldCBqPXgtMTsgajx4KzE7IGorKyl7XHJcbiAgICAgICAgICAgICAgcG9zICs9IGJvYXJkW2ldW2pdOyAgXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7aX0sICR7an1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsaWRhdGVQb3NpdGlvbihwb3MpO1xyXG4gICAgfWVsc2UgaWYoeSAhPTAgJiYgeD09MCl7XHJcbiAgICAgICAgcG9zPTA7XHJcbiAgICAgICAgZm9yKGxldCBpID15LTE7IGk8eStsZW5ndGgrMTsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKGxldCBqPXg7IGo8PXgrMTsgaisrKXtcclxuICAgICAgICAgICAgICBwb3MgKz0gYm9hcmRbaV1bal07ICBcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpfSwgJHtqfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICB9ZWxzZSBpZih5ICE9MCAmJiB4ID09IDkpe1xyXG4gICAgICAgIHBvcz0wO1xyXG4gICAgICAgIGZvcihsZXQgaSA9eS0xOyBpPHkrbGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IobGV0IGo9eC0xOyBqPHgrMTsgaisrKXtcclxuICAgICAgICAgICAgICBwb3MgKz0gYm9hcmRbaV1bal07ICBcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpfSwgJHtqfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICB9ZWxzZSBpZih5ICE9MCAmJiB4ICE9MCl7XHJcbiAgICAgICAgcG9zPTA7XHJcbiAgICAgICAgZm9yKGxldCBpID15LTE7IGk8eStsZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaj14LTE7IGo8eCtsZW5ndGgtMTsgaisrKXtcclxuICAgICAgICAgICAgICBwb3MgKz0gYm9hcmRbaV1bal07ICBcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpfSwgJHtqfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICB9ZWxzZSBpZih5ID09IDAgJiYgeCAhPSAwKXtcclxuICAgICAgICBwb3M9MDtcclxuICAgICAgICBmb3IobGV0IGkgPXk7IGk8eStsZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaj14LTE7IGo8eCtsZW5ndGgtMTsgaisrKXtcclxuICAgICAgICAgICAgICBwb3MgKz0gYm9hcmRbaV1bal07ICBcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpfSwgJHtqfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYW5hbGlzZUhvcml6b250YWwoeSwgeCwgbGVuZ3RoKXtcclxuICAgIHZhciBwb3MgPSAwO1xyXG4gICAgaWYoeCtsZW5ndGggPT0gMTApe1xyXG4gICAgICAgIGlmKHk9PTkgJiYgeCE9MCl7XHJcbiAgICAgICAgICAgIHBvcyA9IDA7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHktMTsgaTx5KzE7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGogPSB4LTE7IGo8eCtsZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zICs9IGJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2l9LCAke2p9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoeT09MCAmJiB4IT0wKXtcclxuICAgICAgICAgICAgcG9zID0gMDtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0geTsgaTw9eSsxOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqID0geC0xOyBqPHgrbGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcyArPSBib2FyZFtpXVtqXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpfSwgJHtqfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgfWVsc2UgaWYoeSE9MCAmJiB4IT0wKXtcclxuICAgICAgICAgICAgcG9zPTA7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHktMTsgaTw9eSsxOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqID0geC0xOyBqPHgrbGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcyArPSBib2FyZFtpXVtqXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpfSwgJHtqfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgfSAgICBcclxuICAgIH1lbHNlIGlmKHk9PTAgJiYgeD09MCl7XHJcbiAgICAgICAgcG9zID0gMDtcclxuICAgICAgICBmb3IobGV0IGkgPSB5OyBpPD15KzI7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IHg7IGo8PXgrbGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgcG9zICs9IGJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7aX0sICR7an1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsaWRhdGVQb3NpdGlvbihwb3MpO1xyXG4gICAgfWVsc2UgaWYoeT09MCAmJiB4IT0wKXtcclxuICAgICAgICBwb3MgPSAwO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IHk7IGk8PXkrMTsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKGxldCBqID0geC0xOyBqPD14K2xlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIHBvcyArPSBib2FyZFtpXVtqXTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2l9LCAke2p9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgIH1lbHNlIGlmKHk9PTkgJiYgeD09MCl7XHJcbiAgICAgICAgcG9zID0wO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IHktMTsgaTw9eTsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKGxldCBqID0geDsgajw9eCtsZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBwb3MgKz0gYm9hcmRbaV1bal07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpfSwgJHtqfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICB9ZWxzZSBpZih5PT05ICYmIHghPTApe1xyXG4gICAgICAgIHBvcyA9MDtcclxuICAgICAgICBmb3IobGV0IGkgPSB5LTE7IGk8PXk7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IHgtMTsgajw9eCtsZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBwb3MgKz0gYm9hcmRbaV1bal07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpfSwgJHtqfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICB9ZWxzZSBpZih5IT0wICYmIHg9PTApe1xyXG4gICAgICAgIHBvcyA9MDtcclxuICAgICAgICBmb3IobGV0IGkgPSB5LTE7IGk8PXk7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IHg7IGo8PXgrbGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgcG9zICs9IGJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7aX0sICR7an1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsaWRhdGVQb3NpdGlvbihwb3MpO1xyXG4gICAgfWVsc2UgaWYoeSE9MCAmJiB4IT0wKXtcclxuICAgICAgICBwb3M9MDtcclxuICAgICAgICBmb3IobGV0IGkgPSB5LTE7IGk8PXkrMTsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKGxldCBqID0geC0xOyBqPD14K2xlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIHBvcyArPSBib2FyZFtpXVtqXTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2l9LCAke2p9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgIH0gXHJcbn1cclxuZnVuY3Rpb24gdmFsaWRhdGVQb3NpdGlvbihwb3Mpe1xyXG4gICAgaWYocG9zICE9MCl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IFxyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVNoaXAoeSwgeCwgbGVuZ3RoLCBwb3NpdGlvblMpe1xyXG4gICAgdmFyIGlkID0wO1xyXG4gICAgY29uc29sZS5sb2coeCk7XHJcbiAgICBjb25zb2xlLmxvZyh5KTtcclxuICAgIGlmKHBvc2l0aW9uUyA9PSAnaCcpe1xyXG4gICAgICAgIGZvcihsZXQgaiA9IHg7IGo8eCtsZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgIGJvYXJkW3ldW2pdID0gMTtcclxuICAgICAgICAgICAgYXJyYXlbeV1bal0uY2xhc3NMaXN0LmFkZCgncm93LTEnKTtcclxuICAgICAgICB9XHJcbiAgICB9ZWxzZSBpZihwb3NpdGlvbkggPT0gJ3YnKXtcclxuICAgICAgICBmb3IobGV0IGogPSB5OyBqPCB5K2xlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgYXJyYXlbal1beF0uY2xhc3NMaXN0LmFkZCgncm93LTEnKTtcclxuICAgICAgICAgICAgYm9hcmRbal1beF0gPSAxO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5nYW1lQm9hcmQoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9