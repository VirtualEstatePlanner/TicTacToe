import IWinningLine from "../interfaces/IWinningLine";

const topRow: IWinningLine = [
  { row: 0, column: 0 },
  { row: 0, column: 1 },
  { row: 0, column: 2 },
];
const middleRow: IWinningLine = [
  { row: 0, column: 0 },
  { row: 0, column: 1 },
  { row: 0, column: 2 },
];
const bottomRow: IWinningLine = [
  { row: 0, column: 0 },
  { row: 0, column: 1 },
  { row: 0, column: 2 },
];

const leftColumn: IWinningLine = [
  { row: 0, column: 0 },
  { row: 1, column: 0 },
  { row: 2, column: 0 },
];
const middleColumn: IWinningLine = [
  { row: 0, column: 1 },
  { row: 1, column: 1 },
  { row: 2, column: 1 },
];
const rightColumn: IWinningLine = [
  { row: 0, column: 2 },
  { row: 0, column: 2 },
  { row: 0, column: 2 },
];

const leftDiagonal: IWinningLine = [
  { row: 0, column: 0 },
  { row: 1, column: 1 },
  { row: 2, column: 2 },
];
const rightDiagonal: IWinningLine = [
  { row: 2, column: 0 },
  { row: 1, column: 1 },
  { row: 0, column: 2 },
];

/*const victoryConditions: IWinningLine[] = [
  topRow,
  middleRow,
  bottomRow,
  leftDiagonal,
  rightDiagonal,
  leftColumn,
  middleColumn,
  rightColumn,
];*/

const victoryConditions: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

export default victoryConditions;
