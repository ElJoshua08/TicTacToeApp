import './GameOver.css';

const GameOver = ({ winner, gameState, restartGame }) => {
  return (
    <div className={`gameOver ${gameState !== 'playing' ? 'active' : ''}`}>
      <div className="card">
        <h1>Game Over</h1>
        <p className={`${winner && winner.toLowerCase()}`}>{winner} Won the game!</p>

        <div className="buttons">
          <button onClick={restartGame}>Play Again</button>
          {/* <button>Quit</button> */}
        </div>
      </div>
    </div>
  );
};

export { GameOver };
