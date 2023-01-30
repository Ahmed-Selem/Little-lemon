import React from "react";

import classes from "./BookingAvailableTimes.module.css";

const BookingAvailableTimes = ({ day, availableTimes }) => {
  return (
    <article className={classes.table}>
      <h1>Available Times</h1>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>{day}</th>
          </tr>
        </thead>
        <tbody>
          {availableTimes.map((time) => {
            return (
              <tr key={time}>
                <td>time</td>
                <td>{time}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </article>
  );
};

export default BookingAvailableTimes;
