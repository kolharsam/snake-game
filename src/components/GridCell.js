import React from "react";

// Grid Cell for the Grid Component
function GridCell({ foodCell, snakeCell, size }) {
  let className = "grid-cell";

  if (foodCell) {
    className = "grid-cell grid-cell--food";
  } else if (snakeCell) {
    className = "grid-cell grid-cell--snake";
  }

  return (
    <div
      className={className}
      style={{ height: size + "px", width: size + "px" }}
    />
  );
}

export default GridCell;
