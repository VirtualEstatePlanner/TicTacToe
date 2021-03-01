import IPlayer from "./IPlayer";
import ITicTacToeSprite from "./ITicTacToeSprite";

interface IGameState {
  boardState: ITicTacToeSprite[];
  winningPlayer: IPlayer;
  currentPlayer: IPlayer;
  isGameOver: boolean;
}

export default IGameState;
