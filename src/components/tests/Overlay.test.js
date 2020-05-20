import React from "react";
import ReactDOM from "react-dom";
import Overlay from "../Overlay";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Overlay />, div);
});

it('renders an overlay with heading "Snake Game"', () => {
  const { container } = render(<Overlay heading="Snake Game" />);

  expect(container.firstChild.firstChild.textContent).toBe("Snake Game");
});

it("renders all children in overlay", () => {
  const { container } = render(
    <Overlay heading="Snake Game">
      <p>Hello, world!</p>
    </Overlay>
  );

  expect(container.firstChild.hasChildNodes()).toBe(true);
});
