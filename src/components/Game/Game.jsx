import './Game.css';
import { useState } from 'react';
import { Cell } from '../Cell/Cell.jsx';
import { TURNS } from '../../constants.js';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(0));
  const [turn, setTurn] = useState(TURNS.X);

  return (
    <div className="game">
      <div className="board">
        {board.map((_, i) => (
          <Cell
            key={i}
            cellID={i}
            board={board}
            setBoard={setBoard}
            turn={turn}
            setTurn={setTurn}
          />
        ))}
      </div>
    </div>
  );
};

export { Game };
