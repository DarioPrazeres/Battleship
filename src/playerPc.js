import GameBoard from "./gameBoard";
const table_1 = document.querySelector('div.table-1');
const turn = document.querySelector('button#turn');

const array = [];
var positionH = 'h';
var width = 10;
var number = 0;
table_1.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
table_1.style.gridTemplateRows = `repeat(${width}, 1fr)`; 
table_1.classList.add('table');
const board_1 = new GameBoard();
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
export default gameBoardPC;
