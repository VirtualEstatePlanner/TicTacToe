import Scene from "phaser";
import victoryConditions from "../consts/winningLines";
import IGameState from "../interfaces/IGameState";
import celebrateVictory from "./celebrateVictory";
import isBoardFull from "./isBoardFull";

const checkWhoWon: Function = (
  state: IGameState,
  scene: Phaser.Scene
): IGameState => {
  const isBoardFullState: IGameState = isBoardFull(state);
  let didSomeoneWinState: IGameState = state;
  for (
    let lineToCheck = 0;
    lineToCheck < victoryConditions.length;
    lineToCheck++
  ) {
    const winLine = victoryConditions[lineToCheck];
    if (
      isBoardFullState.boardState[winLine[0]].belongsTo ==
        isBoardFullState.currentPlayer &&
      isBoardFullState.boardState[winLine[1]].belongsTo ==
        isBoardFullState.currentPlayer &&
      isBoardFullState.boardState[winLine[2]].belongsTo ==
        isBoardFullState.currentPlayer
    ) {
      didSomeoneWinState.isGameOver = true;
      didSomeoneWinState.winningPlayer = isBoardFullState.currentPlayer;
      celebrateVictory(lineToCheck, didSomeoneWinState, scene);
      return didSomeoneWinState;
    }
  }
  return isBoardFullState;
};

export default checkWhoWon;
