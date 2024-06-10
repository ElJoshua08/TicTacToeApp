import './Game.css';
import { useState } from 'react';
import { Cell } from '../Cell/Cell.jsx';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(0));

  console.log(board);

  return (
    <div className="game">
      <div className="board">
        {board.map((cell, i) => (
           <Cell key={i} cell={cell} />
        ))}
      </div>
    </div>
  );
};

export { Game };
