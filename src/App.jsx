import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MenuView } from './views/MenuView/MenuView.jsx';
import { GameView } from './views/GameView/GameView.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<MenuView />}
          />
          <Route
            path="/game"
            element={<GameView />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
