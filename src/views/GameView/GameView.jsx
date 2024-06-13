import { Author } from '../../components/Author/Author.jsx';
import { Game } from '../../components/Game/Game.jsx';
import { Title } from '../../components/Title/Title.jsx';

const GameView = () => {
  return (
    <>
      <Title />
      <Game />
      <Author
        authorName="Joshua"
        authorLink="https://github.com/ElJoshua08"
      />
    </>
  );
};

export { GameView };
