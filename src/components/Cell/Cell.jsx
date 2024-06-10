import './Cell.css';
import { TURNS } from '../../constants.js';

const Cell = ({ cellID, board, setBoard, turn, setTurn, gameState }) => {
  const cellClick = () => {
    const cell = board[cellID];

    if (cell === 0 && gameState === 'playing') {
      const newCell = turn;

      const newBoard = board.map((cell, index) => {
        if (index === cellID) {
          return newCell;
        }
        return cell;
      });

      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;

      setBoard(newBoard);
      setTurn(newTurn);
    }
  };

  return (
    <div
      onClick={cellClick}
      className={`cell ${
        board[cellID] != 0 ? board[cellID].toLowerCase() : ''
      } `}
    >
      {board[cellID] !== 0 ? board[cellID] : ''}
    </div>
  );
};

export { Cell };
