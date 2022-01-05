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
