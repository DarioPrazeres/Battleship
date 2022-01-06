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
