import React from "react";
import ReactDOM from "react-dom";
import Grid from "../Grid";
import { render } from "@testing-library/react";

const GridProps = {
  currentSnake: [
    [6, 6],
    [7, 6],
    [8, 6],
    [9, 6],
  ],
  currentFood: [12, 4],
  numCells: 27,
  gridStyle: {
    width: "550px",
    height: "550px",
  },
  cellSize: 20.737,
};

it("renders a grid without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Grid {...GridProps} />, div);
});

it("renders a grid with around 720 children", () => {
  const { container } = render(<Grid {...GridProps} />);

  expect(container.firstChild.childNodes.length).toBeGreaterThan(720);
});

it("renders 4 snake cells within the grid", () => {
  const { container } = render(<Grid {...GridProps} />);
  let snakeCells = 0;

  container.firstChild.childNodes.forEach((currentCell) => {
    if (currentCell.className === "grid-cell grid-cell--snake") {
      snakeCells++;
    }
  });

  expect(snakeCells).toBe(4);
});

it("renders 1 food cell within the grid", () => {
  const { container } = render(<Grid {...GridProps} />);
  let foodCell = 0;

  container.firstChild.childNodes.forEach((currentCell) => {
    if (currentCell.className === "grid-cell grid-cell--food") {
      foodCell++;
    }
  });

  expect(foodCell).toBe(1);
});
