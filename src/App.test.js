import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import BookingPage from "./Components/BookingPage";

test("Renders the BookingForm heading", () => {
  render(
    <Router>
      <BookingPage />
    </Router>
  );
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test("the initializeTimes function returns the correct expected value", () => {
  render(
    <Router>
      <BookingPage />
    </Router>
  );
  const initializeTimes = jest.fn();
  expect(initializeTimes).toHaveBeenCalled();
});
