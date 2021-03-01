import { GameObjects } from "phaser";
import config from "../consts/config";
import IGameState from "../interfaces/IGameState";
import ITicTacToeSprite from "../interfaces/ITicTacToeSprite";

const changeSprite: Function = (
  cell: ITicTacToeSprite,
  state: IGameState,
  scene: Phaser.Scene
) => {
  if (cell.belongsTo == ``) {
    if (state.currentPlayer == `X`) {
      cell.texture = scene.add.sprite(
        config.scale!.width! as number,
        config.scale!.height! as number,
        `xo`,
        1
      );
      cell.belongsTo = `X`;
    } else {
      cell.texture = scene.add.sprite(
        config.scale!.width! as number,
        config.scale!.height! as number,
        `xo`,
        0
      );
      cell.belongsTo = `O`;
    }
  }
};

export default changeSprite;
