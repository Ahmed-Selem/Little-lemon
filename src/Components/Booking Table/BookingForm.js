import React from "react";
import classes from "./BookingForm.module.css";
import { useState } from "react";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [availableTimes, setavailableTimes] = useState([1, 2, 3]);
  const [time, setTime] = useState("");
  const [number, setNumber] = useState(1);
  const [occusion, setOccasion] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const timeHandler = (e) => {
    setTime(e.target.value);
  };

  const numberHandler = (e) => {
    setNumber(e.target.value);
  };

  const occasionHandler = (e) => {
    setOccasion(e.target.value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  return (
    <article className={classes.article}>
      <h1>Reservation Information</h1>
      <form onSubmit={HandleSubmit} className={classes.form}>
        <div>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            id="name"
            required
            onChange={nameHandler}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone number : </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            onChange={phoneHandler}
            value={phone}
          />
        </div>
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={emailHandler}
            value={email}
          />
        </div>

        <div>
          <label htmlFor="date">Choose date : </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            onChange={dateHandler}
            value={date}
          />
        </div>
        <div>
          <label htmlFor="res-availableTimes">Choose availableTimes : </label>
          <select id="res-availableTimes " onChange={timeHandler} value={time}>
            {availableTimes.map((time) => {
              return <option key={time}>{time}</option>;
            })}
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
        </div>
        <div>
          <label htmlFor="number">Number of guests : </label>
          <input
            type="number"
            id="number"
            name="number"
            placeholder={1}
            min={1}
            max={10}
            onChange={numberHandler}
            value={number}
          />
        </div>
        <div>
          <label htmlFor="occasion">Occasion : </label>
          <select
            id="occasion"
            placeholder="occasion"
            onChange={occasionHandler}
            value={occusion}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Engagement</option>
          </select>
        </div>
        <button disabled>Submit</button>
      </form>
    </article>
  );
};

export default BookingForm;