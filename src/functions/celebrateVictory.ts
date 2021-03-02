import config from "../constants/config";
import IGameState from "../interfaces/IGameState";
import IWinningLine from "../interfaces/IWinningLine";
import PlayGameScene from "../scenes/PlayGameScene";

const celebrateVictory: Function = (
  rowOfThree: IWinningLine,
  state: IGameState,
  scene: PlayGameScene
) => {
  scene.tweens.killAll();
  let victoryState: IGameState = { ...state };
  let x = (config.scale!.width! as number) / 2;
  let y = (config.scale!.height! as number) / 2;
  let celebrationText: string = `It's a draw!`;

  if (state.winningPlayer == `X`) {
    celebrationText = `X WINS!`;
  } else if (state.winningPlayer == `O`) {
    celebrationText = `O WINS!`;
  }

  let gameOverLabel = scene.add.text(x, y, celebrationText, {
    fontSize: "104px Arial",
    color: "#FFFFFF",
    backgroundColor: "#0000FF",
  });
  gameOverLabel.setOrigin(0.5, 0.5);
  gameOverLabel.setInteractive();
  gameOverLabel.on("pointerdown", function () {
    scene.create();
  });

  gameOverLabel = scene.add.text(x, y, celebrationText, {
    fontSize: "104px Arial",
    color: "#O0FF00",
  });
  gameOverLabel.setOrigin(0.5, 0.5);

  scene.tweens.add({
    targets: gameOverLabel,
    alpha: 0,
    ease: "Power1",
    duration: 1000,
    yoyo: true,
    repeat: -1,
  });

  if (state.winningPlayer != `draw`) {
    // animate winning line of victorious player
    for (
      let winningCell: number = 0;
      winningCell < rowOfThree.length;
      winningCell++
    ) {
      let sprite = victoryState.boardState[winningCell].texture;

      scene.tweens.add({
        targets: sprite,
        angle: 360,
        ease: "None",
        duration: 1000,
        repeat: -1,
      });
    }
  }
};

export default celebrateVictory;
