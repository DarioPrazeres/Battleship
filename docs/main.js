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
            return analiseHorizontal(y,x,length);
        }else if(positionH == 'v'){
            return analiseVertical(y, x, length);
        }
    }
}
function analiseVertical(y, x, length){
    var pos = 0;
    if(y+length == 10){
        if(y != 0 && x==0){
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
            for(let i =y-1; i<y+length; i++){
                for(let j=x-1; j<=x+length; j++){
                  pos += board[i][j];  
                  console.log(`${i}, ${j}`);
                }
            }
            return validatePosition(pos);
        }
    }if(y ==0 && x==0){
        pos=0;
        for(let i =y; i<=length+1; i++){
            for(let j=x; j<=x+1; j++){
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
//board[1][1] =1;
//board[8][3] =1;

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE2QixhQUFhO0FBQzFDO0FBQ0EsK0JBQStCLEVBQUUsSUFBSSxFQUFFO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsWUFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0YWJsZV8xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnRhYmxlLTEnKTtcclxuY29uc3Qgc2hpcF80ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uI3NoaXAtNCcpO1xyXG5jb25zdCBzaGlwXzMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24jc2hpcC0zJyk7XHJcbmNvbnN0IHNoaXBfMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbiNzaGlwLTInKTtcclxuY29uc3Qgc2hpcF8xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uI3NoaXAtMScpO1xyXG5jb25zdCB0dXJuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uI3R1cm4nKTtcclxudmFyIGxlbmd0aFNoaXAgPSA0O1xyXG5jb25zdCBhcnJheSA9IFtdO1xyXG5jb25zdCBib2FyZCA9IFtdO1xyXG5jb25zdCBzdGF0dXNQb3NpdGlvbiA9IG5ldyBBcnJheSgxMCkuZmlsbChuZXcgQXJyYXkoMTApKTtcclxudmFyIG1vZFNoaXAgPSA0O1xyXG52YXIgd2lkdGggPSAxMDtcclxudmFyIHBvc2l0aW9uSCA9ICdoJztcclxuY29uc3QgcG9zID0gW107XHJcbnRhYmxlXzEuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHt3aWR0aH0sIDFmcilgO1xyXG50YWJsZV8xLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBgcmVwZWF0KCR7d2lkdGh9LCAxZnIpYDsgXHJcblxyXG5cclxudHVybi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICBpZihwb3NpdGlvbkggPT0gJ2gnKXtcclxuICAgICAgICBwb3NpdGlvbkggPSAndic7XHJcbiAgICAgICAgY29uc29sZS5sb2cocG9zaXRpb25IKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHBvc2l0aW9uSCA9ICdoJztcclxuICAgICAgICBjb25zb2xlLmxvZyhwb3NpdGlvbkgpO1xyXG4gICAgfVxyXG59KTtcclxuZnVuY3Rpb24gZ2FtZUJvYXJkKCl7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKyl7XHJcbiAgICAgICAgYXJyYXlbaV0gPSBbXTtcclxuICAgICAgICBib2FyZFtpXSA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCAxMDsgaisrKXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGFycmF5W2ldW2pdID0gcm93O1xyXG4gICAgICAgICAgICBib2FyZFtpXVtqXSA9IDA7XHJcbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcclxuICAgICAgICAgICAgdGFibGVfMS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgICAgICByb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7aX0sICR7an1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFuYWxpZVBvc2l0aW9uKGksIGosIDMsIHBvc2l0aW9uSCkpO1xyXG4gICAgICAgICAgICAgICAgaWYoYW5hbGllUG9zaXRpb24oaSwgaiwgMywgcG9zaXRpb25IKSA9PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVTaGlwKGksIGosIDMsIHBvc2l0aW9uSCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoU2hpcC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxlbmd0aFNoaXApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG59XHJcbmZ1bmN0aW9uIGFuYWxpZVBvc2l0aW9uKHksIHgsIGxlbmd0aCwgcG9zaXRpb25TKXtcclxuICAgIHZhciBwb3MgPSAwO1xyXG4gICAgaWYobGVuZ3RoID09IDQpe1xyXG4gICAgICAgIGlmKHBvc2l0aW9uUyA9PSAnaCcpe1xyXG4gICAgICAgICAgICBpZih4K2xlbmd0aCA+IDEwKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKHBvc2l0aW9uSCA9PSAndicpe1xyXG4gICAgICAgICAgICBpZih5K2xlbmd0aCA+IDEwKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1lbHNlIGlmKGxlbmd0aCA9PSAzKXtcclxuICAgICAgICBpZihwb3NpdGlvblMgPT0gJ2gnKXtcclxuICAgICAgICAgICAgcmV0dXJuIGFuYWxpc2VIb3Jpem9udGFsKHkseCxsZW5ndGgpO1xyXG4gICAgICAgIH1lbHNlIGlmKHBvc2l0aW9uSCA9PSAndicpe1xyXG4gICAgICAgICAgICByZXR1cm4gYW5hbGlzZVZlcnRpY2FsKHksIHgsIGxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFuYWxpc2VWZXJ0aWNhbCh5LCB4LCBsZW5ndGgpe1xyXG4gICAgdmFyIHBvcyA9IDA7XHJcbiAgICBpZih5K2xlbmd0aCA9PSAxMCl7XHJcbiAgICAgICAgaWYoeSAhPSAwICYmIHg9PTApe1xyXG4gICAgICAgICAgICBwb3M9MDtcclxuICAgICAgICAgICAgZm9yKGxldCBpID15LTE7IGk8eStsZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo9eDsgajw9eCsxOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICBwb3MgKz0gYm9hcmRbaV1bal07ICBcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7aX0sICR7an1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIH1lbHNlIGlmKHkgIT0gMCAmJiB4ICE9IDApe1xyXG4gICAgICAgICAgICBwb3M9MDtcclxuICAgICAgICAgICAgZm9yKGxldCBpID15LTE7IGk8eStsZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo9eC0xOyBqPD14K2xlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgcG9zICs9IGJvYXJkW2ldW2pdOyAgXHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2l9LCAke2p9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgICAgICB9XHJcbiAgICB9aWYoeSA9PTAgJiYgeD09MCl7XHJcbiAgICAgICAgcG9zPTA7XHJcbiAgICAgICAgZm9yKGxldCBpID15OyBpPD1sZW5ndGgrMTsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKGxldCBqPXg7IGo8PXgrMTsgaisrKXtcclxuICAgICAgICAgICAgICBwb3MgKz0gYm9hcmRbaV1bal07ICBcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpfSwgJHtqfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICB9ZWxzZSBpZih5ICE9MCAmJiB4PT0wKXtcclxuICAgICAgICBwb3M9MDtcclxuICAgICAgICBmb3IobGV0IGkgPXktMTsgaTx5K2xlbmd0aCsxOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IobGV0IGo9eDsgajw9eCsxOyBqKyspe1xyXG4gICAgICAgICAgICAgIHBvcyArPSBib2FyZFtpXVtqXTsgIFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2l9LCAke2p9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhbmFsaXNlSG9yaXpvbnRhbCh5LCB4LCBsZW5ndGgpe1xyXG4gICAgdmFyIHBvcyA9IDA7XHJcbiAgICBpZih4K2xlbmd0aCA9PSAxMCl7XHJcbiAgICAgICAgaWYoeT09OSAmJiB4IT0wKXtcclxuICAgICAgICAgICAgcG9zID0gMDtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0geS0xOyBpPHkrMTsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IHgtMTsgajx4K2xlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgICBwb3MgKz0gYm9hcmRbaV1bal07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7aX0sICR7an1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih5PT0wICYmIHghPTApe1xyXG4gICAgICAgICAgICBwb3MgPSAwO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSB5OyBpPD15KzE7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGogPSB4LTE7IGo8eCtsZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zICs9IGJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2l9LCAke2p9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgICAgICB9ZWxzZSBpZih5IT0wICYmIHghPTApe1xyXG4gICAgICAgICAgICBwb3M9MDtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0geS0xOyBpPD15KzE7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGogPSB4LTE7IGo8eCtsZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zICs9IGJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2l9LCAke2p9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgICAgICB9ICAgIFxyXG4gICAgfWVsc2UgaWYoeT09MCAmJiB4PT0wKXtcclxuICAgICAgICBwb3MgPSAwO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IHk7IGk8PXkrMjsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKGxldCBqID0geDsgajw9eCtsZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBwb3MgKz0gYm9hcmRbaV1bal07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpfSwgJHtqfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICB9ZWxzZSBpZih5PT0wICYmIHghPTApe1xyXG4gICAgICAgIHBvcyA9IDA7XHJcbiAgICAgICAgZm9yKGxldCBpID0geTsgaTw9eSsxOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IobGV0IGogPSB4LTE7IGo8PXgrbGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgcG9zICs9IGJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7aX0sICR7an1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsaWRhdGVQb3NpdGlvbihwb3MpO1xyXG4gICAgfWVsc2UgaWYoeT09OSAmJiB4PT0wKXtcclxuICAgICAgICBwb3MgPTA7XHJcbiAgICAgICAgZm9yKGxldCBpID0geS0xOyBpPD15OyBpKyspe1xyXG4gICAgICAgICAgICBmb3IobGV0IGogPSB4OyBqPD14K2xlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIHBvcyArPSBib2FyZFtpXVtqXTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2l9LCAke2p9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgIH1lbHNlIGlmKHk9PTkgJiYgeCE9MCl7XHJcbiAgICAgICAgcG9zID0wO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IHktMTsgaTw9eTsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKGxldCBqID0geC0xOyBqPD14K2xlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIHBvcyArPSBib2FyZFtpXVtqXTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2l9LCAke2p9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlUG9zaXRpb24ocG9zKTtcclxuICAgIH1lbHNlIGlmKHkhPTAgJiYgeD09MCl7XHJcbiAgICAgICAgcG9zID0wO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IHktMTsgaTw9eTsgaSsrKXtcclxuICAgICAgICAgICAgZm9yKGxldCBqID0geDsgajw9eCtsZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBwb3MgKz0gYm9hcmRbaV1bal07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtpfSwgJHtqfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZVBvc2l0aW9uKHBvcyk7XHJcbiAgICB9ZWxzZSBpZih5IT0wICYmIHghPTApe1xyXG4gICAgICAgIHBvcz0wO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IHktMTsgaTw9eSsxOyBpKyspe1xyXG4gICAgICAgICAgICBmb3IobGV0IGogPSB4LTE7IGo8PXgrbGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgcG9zICs9IGJvYXJkW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7aX0sICR7an1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsaWRhdGVQb3NpdGlvbihwb3MpO1xyXG4gICAgfSBcclxufVxyXG5mdW5jdGlvbiB2YWxpZGF0ZVBvc2l0aW9uKHBvcyl7XHJcbiAgICBpZihwb3MgIT0wKXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gXHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlU2hpcCh5LCB4LCBsZW5ndGgsIHBvc2l0aW9uUyl7XHJcbiAgICBjb25zb2xlLmxvZyh4KTtcclxuICAgIGNvbnNvbGUubG9nKHkpO1xyXG4gICAgaWYocG9zaXRpb25TID09ICdoJyl7XHJcbiAgICAgICAgZm9yKGxldCBqID0geDsgajx4K2xlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgYm9hcmRbeV1bal0gPSAxO1xyXG4gICAgICAgICAgICBhcnJheVt5XVtqXS5jbGFzc0xpc3QuYWRkKCdyb3ctMScpO1xyXG4gICAgICAgIH1cclxuICAgIH1lbHNlIGlmKHBvc2l0aW9uSCA9PSAndicpe1xyXG4gICAgICAgIGZvcihsZXQgaiA9IHk7IGo8IHkrbGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICBhcnJheVtqXVt4XS5jbGFzc0xpc3QuYWRkKCdyb3ctMScpO1xyXG4gICAgICAgICAgICBib2FyZFtqXVt4XSA9IDE7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmdhbWVCb2FyZCgpO1xyXG4vL2JvYXJkWzFdWzFdID0xO1xyXG4vL2JvYXJkWzhdWzNdID0xO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=