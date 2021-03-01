import ITicTacToeSprite from "../interfaces/ITicTacToeSprite";

const isCellEmpty: Function = (cell: ITicTacToeSprite): boolean => {
  if (cell.belongsTo == "noone") {
    return true;
  } else return false;
};

export default isCellEmpty;
