const Header = () => {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: 1</span>
    </header>
  );
}

const Player = () => {
  return (
    <div className="player">
      <span className="player-name">
        Luis
      </span>

      <Counter />
    </div>
  )
}

const Counter = () => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counte-score">35</span>
      <button className="counter-action decrement"> + </button>
    </div>
  )
}

ReactDOM.render(
  <Player />,
  document.getElementById('root')
);