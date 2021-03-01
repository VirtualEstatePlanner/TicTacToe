import IGameState from "../interfaces/IGameState";

const isBoardFull: Function = (state: IGameState): IGameState => {
  let remainingEmptyCells: number = 9;
  let newState: IGameState = { ...state };

  newState.boardState.forEach((cell) => {
    if (cell.belongsTo != ``) {
      remainingEmptyCells--;
    }
  });
  if (remainingEmptyCells < 1) {
    newState.isGameOver = true;
    newState.winningPlayer = `draw`;
    return newState;
  }
  return state;
};

export default isBoardFull;
