import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [selectedTime, setSelectedTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setSelectedTime(
      props.availableTimes.map((times) => <option>{times}</option>)
    );
  };

  return (
    <section className="booking-form">
      <div className="bookings-container">
        <form
          className="form-container"
          onSubmit={handleSubmit}
          aria-label="On Submit"
        >
          <label htmlFor="res-date">Choose date </label>
          <input
            id="res-date"
            value={date}
            type="date"
            onChange={handleDateChange}
          />
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time">{selectedTime}</select>
          <label htmlFor="guests">Number of guests</label>
          <input
            id="guests"
            type="number"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            placeholder="1"
            min="1"
            max="10"
          />
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Engagement</option>
            <option>Other</option>
          </select>

          <Link className="booking-button" to="/confirmation">
            <button>Make Your Reservation</button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
