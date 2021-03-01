import Phaser from "phaser";

class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }
  preload() {
    this.load.image("square", "assets/square.png");
    this.load.spritesheet("ox", "assets/ox.png", {
      frameWidth: 200,
      frameHeight: 173,
    });
  }
  create() {
    this.scene.start("PlayGameScene");
  }
}

export default BootScene;
