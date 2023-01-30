import React, { useState } from "react";
import { useReducer } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import BookingForm from "./Booking Table/BookingForm";
import { fetchAPI, submitAPI } from "./api";
import { useNavigate } from "react-router-dom";
import BookingAvailableTimes from "./Booking Table/BookingAvailableTimes";

function updateTimes(state, action) {
  if (action.type === "changed_Date") {
    const resutls = fetchAPI(action.date);
    return resutls;
  }
  return state;
}

function initializeTimes(today) {
  const resutls = fetchAPI(today);
  return resutls;
}

const BookingPage = () => {
  const date = new Date();
  const [today, setToday] = useState(date);

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    date,
    initializeTimes
  );
  const navigate = useNavigate();
  var submitted = null;
  const HandleDateChange = (date) => {
    dispatch({
      type: "changed_Date",
      date: date,
    });
    setToday(date);
  };

  const submitForm = (formData) => {
    submitted = submitAPI(formData);

    if (submitted) {
      navigate("/bookingconfirmed");
    }
  };

  return (
    <>
      <Header />
      <BookingAvailableTimes
        day={today.getDate()}
        availableTimes={availableTimes}
      />
      <BookingForm
        availableTimes={availableTimes}
        OnDatechange={HandleDateChange}
        onSubmit={submitForm}
      />

      <Footer />
    </>
  );
};

export default BookingPage;
