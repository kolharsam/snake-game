// The Main Grid that is present for the game board
import React from "react";
import GridCell from "./GridCell";

function getCells(cellIndexes, cellSize, snake, food) {
  return cellIndexes.map((y) => {
    return cellIndexes.map((x) => {
      const foodCell = food[0] === x && food[1] === y;
      const snakeCells = snake.filter((cell) => cell[0] === x && cell[1] === y);
      const snakeCell = snakeCells.length && snakeCells[0];

      return (
        <GridCell
          foodCell={foodCell}
          snakeCell={snakeCell}
          size={cellSize}
          key={`${x}-${y}`}
        />
      );
    });
  });
}

function Grid({ currentSnake, currentFood, numCells, gridStyle, size }) {
  const cellIndexes = Array.from(Array(numCells).keys());
  const cells = getCells(cellIndexes, size, currentSnake, currentFood);

  return (
    <div className="grid" style={gridStyle}>
      {cells}
    </div>
  );
}

export default Grid;
