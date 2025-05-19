import { useState } from "react";
import "../styles/App.css";
import { GameHeader } from "./GameHeader.jsx";
import { CardGrid } from "./CardGrid.jsx";

function App() {
  return (
    <>
      <GameHeader />
      <CardGrid />
    </>
  );
}

export default App;
