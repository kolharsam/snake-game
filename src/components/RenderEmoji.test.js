import React from "react";
import ReactDOM from "react-dom";
import RenderEmoji from "./RenderEmoji";
import { render } from "@testing-library/react";

it("renders a cell without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RenderEmoji emoji="🍎" label="apple" />, div);
});

it("renders a snake cell", () => {
  const { container } = render(<RenderEmoji emoji="🍎" label="apple" />);

  expect(container.firstChild.textContent).toBe("🍎");
});
