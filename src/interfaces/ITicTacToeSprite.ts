import Phaser from "phaser";
import IPlayer from "./IPlayer";

interface ITicTacToeSprite extends Phaser.GameObjects.Sprite {
  cellKey: number;
  belongsTo: IPlayer;
}

export default ITicTacToeSprite;
