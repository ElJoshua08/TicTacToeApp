import { Link } from 'react-router-dom';
import './GameOver.css';

const GameOver = ({ winner, gameState, restartGame }) => {
  return (
    <div className={`gameOver ${gameState !== 'playing' ? 'active' : ''}`}>
      <div className="card">
        <h1>Game Over</h1>
        <p className={`${winner && winner.toLowerCase()}`}>
          {winner != "draw" ? `${winner} won the game!` : 'It\'s a draw!'}
        </p>

        <div className="buttons">
          <button onClick={restartGame}>Play Again</button>
          {/* <button>Quit</button> */}
          <button><Link className='homeLink' to="/">Home</Link></button>
        </div>
      </div>
    </div>
  );
};

export { GameOver };
