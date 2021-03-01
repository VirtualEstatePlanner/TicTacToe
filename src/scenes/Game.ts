import Phaser from "phaser";

export default class Demo extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  preload() {
    this.load.image("logo", "assets/tropic.png");
  }

  create() {
    const logo = this.add.image(960, 80, "logo");

    this.tweens.add({
      targets: logo,
      y: 1000,
      duration: 2500,
      ease: "Sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }
}
