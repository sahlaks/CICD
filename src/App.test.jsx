import { render, screen } from "@testing-library/react";
import App from "./App";

import "@testing-library/jest-dom";

test("renders BTC text", () => {
  render(<App />);

  const text = screen.getByText(/BTC/i);

  expect(text).toBeInTheDocument();
});