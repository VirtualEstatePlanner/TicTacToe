import victoryConditions from "../consts/winningLines";
import IGameState from "../interfaces/IGameState";
import isBoardFull from "./isBoardFull";

const checkWhoWon: Function = (state: IGameState): IGameState => {
  let didSomeoneWinState: IGameState = state;
  for (
    let lineToCheck = 0;
    lineToCheck < victoryConditions.length;
    lineToCheck++
  ) {
    const winLine = victoryConditions[lineToCheck];
    if (
      state.boardState[winLine[0]].belongsTo == state.currentPlayer &&
      state.boardState[winLine[1]].belongsTo == state.currentPlayer &&
      state.boardState[winLine[2]].belongsTo == state.currentPlayer
    ) {
      didSomeoneWinState.isGameOver = true;
      didSomeoneWinState.winningPlayer = state.currentPlayer;
      return didSomeoneWinState;
    }
  }
  const isBoardFullState: IGameState = isBoardFull(didSomeoneWinState);
  return isBoardFullState;
};

export default checkWhoWon;
