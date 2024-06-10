import './GameOver.css';

const GameOver = ({ winner, gameState }) => {
  return (
    <div className={`gameOver ${gameState !== 'playing' ? 'active' : ''}`}>
      <div className="card">
        <h1>Game Over</h1>
        <p>{winner} Won the game!</p>

        <div className="buttons">
          <button>Play Again</button>
          <button>Quit</button>
        </div>
      </div>
    </div>
  );
};

export { GameOver };
