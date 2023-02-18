import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import BookingPage from "./Components/BookingPage";
import BookingAvailableTimes from "./Components/Booking Table/BookingAvailableTimes";

test("Renders the BookingForm heading", () => {
  render(
    <Router>
      <BookingPage />
    </Router>
  );
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

// test("the initializeTimes function returns the correct expected value", () => {
//   render(
//     <Router>
//       <BookingPage />
//     </Router>
//   );
//   const initializeTimes = jest.fn();
//   expect(initializeTimes).toHaveBeenCalled();
// });

// test("the initializeTimes function returns the correct expected value in BookingAvailableTimes", () => {
//   render(
//     <Router>
//       <BookingAvailableTimes availableTimes={[]} />
//     </Router>
//   );
//   const initializeTimes = jest.fn();
//   expect(initializeTimes).toHaveBeenCalled();
// });
// // to be continued ^^^

test("Check HTML are correct and each field has the right attribute", () => {
  render(
    <Router>
      <BookingPage />
    </Router>
  );
  const name = screen.getByLabelText(/Name :/);
  const phone = screen.getByLabelText(/Phone/);
  const email = screen.getByLabelText(/Email :/);
  const date = screen.getByLabelText(/Choose date :/);
  const time = screen.getByLabelText(/Choose availableTimes :/);
  const number = screen.getByLabelText(/Number of guests :/);
  const occasion = screen.getByLabelText(/Occasion :/);
  expect(name).toBeInTheDocument();
  expect(phone).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(date).toBeInTheDocument();
  expect(time).toBeInTheDocument();
  expect(number).toBeInTheDocument();
  expect(occasion).toBeInTheDocument();

  expect(name).toHaveAttribute("required");
  expect(phone).toHaveAttribute("required");
  expect(email).toHaveAttribute("required");
  expect(date).toHaveAttribute("required");
  expect(time).toHaveAttribute("required");
  expect(number).toHaveAttribute("required");
  expect(occasion).toHaveAttribute("required");
});

test("verify both the valid and invalid", () => {
  // to be continued
  render(
    <Router>
      <BookingPage />
    </Router>
  );
});
// to be continued^^^
