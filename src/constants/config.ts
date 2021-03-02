import Phaser from "phaser";
import BootScene from "../scenes/BootScene";
import PlayGameScene from "../scenes/PlayGameScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "game",
  backgroundColor: "#000000",
  audio: { noAudio: true },
  scale: {
    width: 620,
    height: 620,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [BootScene, PlayGameScene],
};

export default config;
