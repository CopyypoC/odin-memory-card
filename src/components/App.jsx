import "../styles/App.css";
import "../styles/layout.css";
import "../styles/theme.css";
import { useState } from "react";
import { GameHeader } from "./GameHeader.jsx";
import { CardGrid } from "./CardGrid.jsx";

function App() {
  const [score, setScore] = useState(0);

  return (
    <>
      <GameHeader score={score} />
      <CardGrid score={score} setScore={setScore} />
    </>
  );
}

export default App;
