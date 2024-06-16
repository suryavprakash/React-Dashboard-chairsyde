import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

// Define your test
test("renders App component", () => {
  render(<App />);

  const headerElement = screen.getByText(/Dashboard Application/i);
  expect(headerElement).toBeInTheDocument();
});
