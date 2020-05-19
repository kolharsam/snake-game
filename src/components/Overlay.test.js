import React from "react";
import Overlay from "./Overlay";
import { render } from "@testing-library/react";

it('renders an overlay with heading "Snake Game"', () => {
  const { container } = render(<Overlay heading="Snake Game" />);

  expect(container.firstChild.firstChild.textContent).toBe("Snake Game");
});
