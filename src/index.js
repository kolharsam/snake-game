import React, { StrictMode } from "react";
// TODO: Remove StrictMode upon completing project
import ReactDOM from "react-dom";
import SnakeGame from "./App";

import "./index.css";

ReactDOM.render(
  <StrictMode>
    <SnakeGame size={550} />
  </StrictMode>,
  document.getElementById("root")
);
