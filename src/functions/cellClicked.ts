import IGameState from "../interfaces/IGameState";
import ITicTacToeSprite from "../interfaces/ITicTacToeSprite";
import updateTurn from "./updateTurn";

const cellClicked: Function = (
  state: IGameState,
  cellKey: number
): IGameState => {
  var clickedCheckState: IGameState = { ...state };

  if (clickedCheckState.boardState[cellKey].belongsTo == ``) {
    let newCell: ITicTacToeSprite = clickedCheckState.boardState[cellKey];
    newCell.belongsTo = clickedCheckState.currentPlayer;
    let newBoard: ITicTacToeSprite[] = clickedCheckState.boardState;
    newBoard[cellKey] = newCell;
    const postClickState: IGameState = updateTurn(clickedCheckState);
    return postClickState;
  } else {
    return state;
  }
};

export default cellClicked;
