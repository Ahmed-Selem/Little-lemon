import React from "react";
import classes from "./BookingForm.module.css";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const BookingForm = ({ OnDatechange, availableTimes, onSubmit }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      number: "",
      occasion: "",
    },
    onSubmit: (values) => {
      onSubmit(values);
      console.log("submitting");
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      phone: Yup.number("Phone must be a Number").required("Phone is required"),
      date: Yup.string().required("Date is required"),
      time: Yup.string().required("Time is required"),
      number: Yup.number()
        .min(1, "Minimum one on table")
        .max(10, "Maximum 10 on table!")
        .required("Number is required"),
      occasion: Yup.string().required("Occasion is required"),
    }),
  });

  const submitForm = (e) => {
    e.preventDefault();

    onSubmit(e.target.value);
  };
  return (
    <article className={classes.article} aria-label="Reservation Section">
      <h1>Book Now</h1>
      <form
        onSubmit={formik.handleSubmit}
        className={classes.form}
        aria-label="Reservation form"
      >
        <div>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            id="name"
            required
            {...formik.getFieldProps("name")}
          />
        </div>
        <p>{formik.touched.name && formik.errors.name}</p>
        <div>
          <label htmlFor="phone">Phone number : </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            {...formik.getFieldProps("phone")}
          />
        </div>
        <p>
          {formik.touched.phone && formik.errors.phone
            ? formik.errors.phone.slice(0, 25)
            : ""}
        </p>
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            {...formik.getFieldProps("email")}
          />
        </div>
        <p>{formik.touched.email && formik.errors.email}</p>
        <div>
          <label htmlFor="date">Choose date : </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            {...formik.getFieldProps("date")}
            onChange={(e) => {
              formik.handleChange(e);
              const date = new Date(e.target.value);
              OnDatechange(date);
            }}
          />
        </div>
        <p>{formik.touched.date && formik.errors.date}</p>
        <div>
          <label htmlFor="res-availableTimes">Choose availableTimes : </label>
          <select
            id="res-availableTimes"
            required
            {...formik.getFieldProps("time")}
          >
            <option></option>;
            {availableTimes.map((time) => {
              return <option key={time}>{time}</option>;
            })}
          </select>
        </div>
        <p>{formik.touched.time && formik.errors.time}</p>
        <div>
          <label htmlFor="number">Number of guests : </label>
          <input
            type="number"
            id="number"
            name="number"
            required
            placeholder={1}
            min={1}
            max={10}
            {...formik.getFieldProps("number")}
          />
        </div>
        <p>{formik.touched.number && formik.errors.number}</p>
        <div>
          <label htmlFor="occasion">Occasion : </label>
          <select
            id="occasion"
            placeholder="occasion"
            required
            {...formik.getFieldProps("occasion")}
          >
            <option></option>;<option>Birthday</option>
            <option>Anniversary</option>
            <option>Engagement</option>
          </select>
        </div>
        <p>{formik.touched.occasion && formik.errors.occasion}</p>

        <button
          onClick={submitForm}
          disabled={!(formik.isValid && formik.dirty)}
          aria-label="On Click form will be submitted"
        >
          Submit
        </button>
      </form>
    </article>
  );
};

export default BookingForm;
