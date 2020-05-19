import React from "react";
import RenderEmoji from "./RenderEmoji";

import "./styles/score.css";

function Score({ currentScore, highScore }) {
  return (
    <div className="score-container">
      <div className="score-row">
        <RenderEmoji emoji="🍎" label="apple" />
        <p>{currentScore}</p>
      </div>
      <div className="score-row">
        <RenderEmoji emoji="🏆" label="trophy" />
        <p>{highScore}</p>
      </div>
    </div>
  );
}

export default Score;
