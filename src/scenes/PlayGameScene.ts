import Phaser from "phaser";
import ITicTacToeSprite from "../interfaces/ITicTacToeSprite";
import cellClicked from "../functions/cellClicked";
import IGameState from "../interfaces/IGameState";
import config from "../consts/config";
import IPlayer from "../interfaces/IPlayer";
import IWinningLine from "../interfaces/IWinningLine";

class PlayGameScene extends Phaser.Scene {
  constructor() {
    super(`PlayGameScene`);
  }

  create() {
    const squareSize: number = 200;
    const halfSquareSize: number = squareSize / 2;

    let gameState: IGameState = {
      boardState: [],
      currentPlayer: `X`,
      winningPlayer: ``,
      isGameOver: false,
    };

    let cellCounter: number = 0; // count the cells as we iterate across the board

    const broadcastWinner: Function = (
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

      if (gameState.winningPlayer == `X`) {
        celebrationText = "X WINS!";
      } else if (gameState.winningPlayer == `O`) {
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

      if (gameState.winningPlayer != `draw`) {
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

    for (let row: number = 0; row < 3; row++) {
      let y: number = halfSquareSize + squareSize * row + row * 10; // draw row
      for (let column: number = 0; column < 3; column++) {
        let x: number = halfSquareSize + squareSize * column + column * 10; // draw columns within row

        let newCell: ITicTacToeSprite = this.add.sprite(
          x,
          y,
          `square`
        ) as ITicTacToeSprite; // generate cell
        newCell.cellKey = cellCounter++; // increment counter for that cell
        newCell.texture = new Phaser.Textures.Texture(this.textures, `xo`);
        newCell.belongsTo = ``; // make cell empty
        newCell.setInteractive(); // make cell clickable

        const cellLabel: Phaser.GameObjects.Text = this.add
          .text(x, y, ``, {
            fontSize: `128px Arial`,
          })
          .setOrigin(); // label that cell with it's counter

        const thisCellWasClicked: Function = (): void => {
          // check if game has ended
          const moveResultState: IGameState = cellClicked(
            gameState,
            newCell.cellKey
          );
          if (gameState.currentPlayer != moveResultState.currentPlayer) {
            // compare currentPlayer before click to currentPlayer after click
            cellLabel.text = gameState.currentPlayer;
            if (gameState.currentPlayer == `X`) {
              cellLabel.setColor(`red`); // label with a red x
            }
            if (gameState.currentPlayer == `O`) {
              cellLabel.setColor(`blue`); // label with a blue o
            }
          }
          gameState = { ...moveResultState };
        };

        const shouldCellBeClickable: Function = (): void => {
          if (gameState.isGameOver) {
            this.create(); // restart game
          } else {
            thisCellWasClicked();
          }
        };

        newCell.on(`pointerdown`, shouldCellBeClickable); // add trigger for click function

        gameState.boardState.push(newCell);
      }
    }
  }
}

export default PlayGameScene;
