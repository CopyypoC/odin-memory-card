import "../styles/GameHeader.css";
import { useState } from "react";

export function GameHeader({ score }) {
  const [bestScore, setBestScore] = useState(0);
  if (score > bestScore) setBestScore(score);

  return (
    <header className="game-header">
      <div className="game-info">
        <h1>Memory Card Game</h1>
        <p>Click on each image only once to increase score!</p>
      </div>
      <div className="score-container">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </header>
  );
}
