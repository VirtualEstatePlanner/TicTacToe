import config from "../consts/config";
import IGameState from "../interfaces/IGameState";
import IWinningLine from "../interfaces/IWinningLine";
import PlayGameScene from "../scenes/PlayGameScene";

const celebrateVictory: Function = (
  winLine: IWinningLine,
  state: IGameState,
  scene: PlayGameScene
) => {
  let victoryState: IGameState = { ...state };

  victoryState.isGameOver = true;
  scene.tweens.killAll();

  let x = (config.scale!.width! as number) / 2;
  let y = (config.scale!.height! as number) / 2;

  let celebrationText: string;

  if (state.winningPlayer == `X`) {
    celebrationText = "X WINS!";
  } else if (state.winningPlayer == `O`) {
    celebrationText = "O WINS!";
  } else {
    celebrationText = "It's a draw!";
  }

  let label = scene.add.text(x, y, celebrationText, {
    fontSize: "104px Arial",
    color: "#FFFFFF",
    backgroundColor: "#00OOFF",
  });
  label.setOrigin(0.5, 0.5);

  label.setInteractive();

  label.on(
    "pointerdown",
    function () {
      scene.create();
    },
    this
  );

  label = scene.add.text(x, y, celebrationText, {
    fontSize: "104px Arial",
    color: "#O0FF00",
  });
  label.setOrigin(0.5, 0.5);

  scene.tweens.add({
    targets: label,
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
      winningCell < winLine.length;
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
