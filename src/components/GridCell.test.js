import React from "react";
import GridCell from "./GridCell";
import { render } from "@testing-library/react";

it("renders a snake cell", () => {
  const { container } = render(
    <GridCell foodCell={false} snakeCell={true} size={15} />
  );

  expect(container.firstChild.className).toBe("grid-cell grid-cell--snake");
});

it("renders a food cell", () => {
  const { container } = render(
    <GridCell foodCell={true} snakeCell={false} size={15} />
  );

  expect(container.firstChild.className).toBe("grid-cell grid-cell--food");
});
