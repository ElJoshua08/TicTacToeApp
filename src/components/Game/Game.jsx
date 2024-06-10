import './Game.css';
import { useState, useEffect } from 'react';
import { Cell } from '../Cell/Cell.jsx';
import { TURNS, WIN_CONDITIONS } from '../../constants.js';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(0));
  const [turn, setTurn] = useState(TURNS.X);
  const [gameState, setGameState] = useState('playing');

  // Check for win or draw conditions using useEffect
  useEffect(() => {
    WIN_CONDITIONS.forEach((condition) => {
      let a = board[condition[0]];
      let b = board[condition[1]];
      let c = board[condition[2]];

      if(a === 0 || b === 0 || c === 0) {
        return;
      }

      if (a === b && a === b && a === c) {
        setTimeout(() => {
          alert(`${a} wins!`);
        }, 500);
      }
    })

  }, [board, turn]);

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
            gameState={gameState}
          />
        ))}
      </div>
    </div>
  );
};

export { Game };
