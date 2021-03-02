import Phaser from "phaser";
import ITicTacToeSprite from "../interfaces/ITicTacToeSprite";
import cellClicked from "../functions/cellClicked";
import IGameState from "../interfaces/IGameState";

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
        newCell.setTexture(`square`);
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
            newCell.cellKey,
            this,
            gameState
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

        const moveOrRestart: Function = (): void => {
          if (gameState.isGameOver) {
            this.create(); // restart game
          } else {
            thisCellWasClicked();
          }
        };

        newCell.on(`pointerdown`, moveOrRestart); // add trigger for click function

        gameState.boardState.push(newCell);
      }
    }
  }
}

export default PlayGameScene;
