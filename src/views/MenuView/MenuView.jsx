import { Link } from 'react-router-dom';
import { Author } from '../../components/Author/Author';

const MenuView = () => {
  return (
    <div>
      <h1>Tic Tac Toe</h1>

      <Link to="/game">Play</Link>
      <Author
        authorName="Joshua"
        authorLink="https://github.com/ElJoshua08"
      />
    </div>
  );
};

export { MenuView };
