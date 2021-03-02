import IGameState from "../interfaces/IGameState";
import ITicTacToeSprite from "../interfaces/ITicTacToeSprite";
import imageCreator from "./imageCreator";
import updateTurn from "./updateTurn";
import changeSprite from "./changeSprite";
import config from "../constants/config";
import ox from "../../assets/ox.png";

const cellClicked: Function = (
  cellKey: number,
  scene: Phaser.Scene,
  state: IGameState
): IGameState => {
  var clickedCheckState: IGameState = { ...state };

  if (clickedCheckState.boardState[cellKey].belongsTo == ``) {
    let newCell: ITicTacToeSprite = clickedCheckState.boardState[cellKey];
    let textureFrame: string = ``;
    if (clickedCheckState.currentPlayer == `X`) {
      textureFrame = `1`;
    }
    if (clickedCheckState.currentPlayer == `O`) {
      textureFrame = `0`;
    }
    newCell.belongsTo = clickedCheckState.currentPlayer;
    newCell.texture = new Phaser.Textures.Texture(
      scene.textures,
      textureFrame,
      imageCreator(ox),
      config.scale!.width! as number,
      config.scale!.height! as number
    );
    let newBoard: ITicTacToeSprite[] = clickedCheckState.boardState;
    newBoard[cellKey] = newCell;
    let postClickState: IGameState = updateTurn(clickedCheckState);
    changeSprite(postClickState.boardState[cellKey]);
    return postClickState;
  } else {
    return state;
  }
};

export default cellClicked;
