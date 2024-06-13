import { Link } from 'react-router-dom';
import { Author } from '../../components/Author/Author';
import { Title } from '../../components/Title/Title';
import './MenuView.css';

const MenuView = () => {
  return (
    <div className="menu">
      <Title />

      <div className="buttons">
        <button className="button gameButton">
          <Link to="/game">Play</Link>
        </button>
      </div>

      <Author
        authorName="Joshua"
        authorLink="https://github.com/ElJoshua08"
      />
    </div>
  );
};

export { MenuView };
