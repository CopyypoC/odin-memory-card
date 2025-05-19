import "../styles/GameHeader.css";

export function GameHeader() {
  return (
    <header className="game-header">
      <div className="game-info">
        <h1>Memory Card Game</h1>
        <p>Click on each image only once to increase score!</p>
      </div>
      <div className="score-container">
        <p>Score: </p>
        <p>Best Score: </p>
      </div>
    </header>
  );
}
