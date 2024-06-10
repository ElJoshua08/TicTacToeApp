import './Cell.css';
import { TURNS } from '../../constants.js';

const Cell = ({ cellID, board, setBoard, turn, setTurn }) => {
  console.log(cellID, board[cellID]);
  const cellClick = () => {

    const cell = board[cellID];

    if (board[cellID] === 0) {
      const newCell = (turn === TURNS.X) ? TURNS.O : TURNS.X;

      const newBoard = board.splice(board[cell], 1, newCell);
      const newTurn = (turn === TURNS.X) ? TURNS.O : TURNS.X;

      setBoard(newBoard);
      setTurn(newTurn);
    }
  }; 

  return (
    <div
      onClick={cellClick}
      className="cell"
    >{ board[cellID] !== 0 ? board[cellID] : '' }</div>
  );
};

export { Cell };
