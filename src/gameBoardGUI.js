import GameBoard from "./gameBoard";
import showNumber from "./ramdomXY";
const table_1 = document.querySelector('div.table-0');
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
    var x = showNumber(10);
    var y = showNumber(10);
    var length = showNumber(5);
    var positionH = board_1.position(showNumber(2));
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
export default gameBoard();
