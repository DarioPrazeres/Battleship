import GameBoardGuiPc from './gameBoardGUI';
//import GameBoard from './gameBoard';
import gameBoardPC from './playerPc';
import showNumber from './ramdomXY';
const pc = new GameBoardGuiPc;
pc.initializeGui();
pc.shipGui();
gameBoardPC();