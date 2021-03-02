import config from "../constants/config";
import IGameState from "../interfaces/IGameState";
import ITicTacToeSprite from "../interfaces/ITicTacToeSprite";
import * as ox from "../../assets/ox.png";
import imageCreator from "./imageCreator";

const changeSprite: Function = (
  cell: ITicTacToeSprite,
  state: IGameState,
  scene: Phaser.Scene
) => {
  if (cell.belongsTo == ``) {
    if (state.currentPlayer == `X`) {
      cell.texture = new Phaser.Textures.Texture(
        scene.textures,
        `1`,
        imageCreator(ox) as HTMLImageElement,
        config.scale!.width! as number,
        config.scale!.height! as number
      );
      cell.belongsTo = `X`;
    } else {
      cell.texture = new Phaser.Textures.Texture(
        scene.textures,
        `0`,
        (ox as unknown) as HTMLImageElement,
        config.scale!.width! as number,
        config.scale!.height! as number
      );
      cell.belongsTo = `O`;
    }
  }
};

export default changeSprite;
