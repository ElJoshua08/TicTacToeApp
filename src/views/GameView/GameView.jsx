import { Author } from '../../components/Author/Author.jsx';
import { Game } from '../../components/Game/Game.jsx';

const GameView = () => {
  return (
    <>
      <Game />;
      <Author
        authorName="Joshua"
        authorLink="https://github.com/ElJoshua08"
      />
    </>
  );
};

export { GameView };
