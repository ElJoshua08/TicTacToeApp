import './Turn.css';

const Turn = ({ turn }) => {
  return (
    <div className="turn">
      <div className={`turnValue ${turn.toLowerCase()}`}>{turn}</div>
      <div className="turnLabel">Turn</div>
    </div>
  );
};

export { Turn };
