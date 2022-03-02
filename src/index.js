import GameBoardGuiPc from './gameBoardGUI';
//import GameBoard from './gameBoard';
import GameBoardPC from './playerPc';
import showNumber from './ramdomXY';
const table_1 = document.querySelector('div.table-1');
const turn = document.querySelector('button#turn');
const play = document.querySelector('button#play');

function game(){
    const pc = new GameBoardGuiPc;
    const player = new GameBoardPC();
    pc.initializeGui();        
    player.initilizePlayer();
    play.addEventListener('click', ()=>{
        if(player.number == 10){
            table_1.classList.add('table-d')
            console.log('entrei')
            pc.shipGui();  
            console.log(`I'm a PC ${pc.board_1.board.length}`);
            console.log(`I'm a Player ${player.board_1.board.length}`);
            
        }else{
            alert('you need a 10 Ship')
        }    
    });
}
game();
