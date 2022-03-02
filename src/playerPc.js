import GameBoard from "./gameBoard";
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
    board_1 = new GameBoard();
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

export default GameBoardPC;
