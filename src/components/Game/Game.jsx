import './Game.css';
import { TURNS, WIN_CONDITIONS } from '../../constants.js';
import { useState, useEffect } from 'react';
import { Cell } from '../Cell/Cell.jsx';
import { Turn } from '../Turn/Turn.jsx';
import { GameOver } from '../GameOver/GameOver.jsx';

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

      if (a === 0 || b === 0 || c === 0) {
        return;
      }

      if (
        board.some((cell) => {
          return cell === 0;
        })
      ) {
        if (a === b && a === b && a === c) {
          setGameState('game over');
          setTimeout(() => {
            alert(`${a} wins!`);
          }, 500);
          return;
        }
      } else {
        setGameState('game over');
        setTimeout(() => {
          alert('Draw!');
        }, 500);
        return;
      }
    });
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

      <Turn turn={turn} />

      <GameOver />
    </div>
  );
};

export { Game };
