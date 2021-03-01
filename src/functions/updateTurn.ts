import IGameState from "../interfaces/IGameState";
import IPlayer from "../interfaces/IPlayer";
import ITicTacToeSprite from "../interfaces/ITicTacToeSprite";
import checkWhoWon from "./checkWhoWon";
import isBoardFull from "./isBoardFull";

const updateTurn: Function = (state: IGameState): IGameState => {
  const anyMovesLeftState: IGameState = isBoardFull(state);
  const whoWonState: IGameState = checkWhoWon(anyMovesLeftState);
  var nextPlayer: IPlayer = whoWonState.currentPlayer;
  if (whoWonState.currentPlayer == `O`) {
    nextPlayer = `X`;
  } else if (whoWonState.currentPlayer == `X`) {
    nextPlayer = `O`;
  }
  const updatedState: IGameState = {
    ...whoWonState,
    currentPlayer: nextPlayer,
  };
  return updatedState;
};

export default updateTurn;
