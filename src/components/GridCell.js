import React from "react";

// Returns a single Grid Cell
function GridCell({ foodCell, snakeCell, size }) {
  const className = `grid-cell ${foodCell ? "grid-cell--food" : ""} ${
    snakeCell ? "grid-cell--snake" : ""
  }`;

  return (
    <div
      className={className}
      style={{ height: size + "px", width: size + "px" }}
    />
  );
}

export default GridCell;
