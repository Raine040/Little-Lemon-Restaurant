import React, { useState } from "react";

function BookingForm({ availableTimes, updateTimes }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    updateTimes(newDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input type="date" value={date} onChange={handleDateChange} required />
      </label>
      <br />
      <label>
        Time:
        <select value={time} onChange={(e) => setTime(e.target.value)} required>
          <option value="">Select...</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Number of Guests:
        <input
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          min="1"
          required
        />
      </label>
      <br />
      <label>
        Occasion:
        <select
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
        >
          <option value="">Select...</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Anniversary">Engagement</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit Reservation</button>
    </form>
  );
}

export default BookingForm;
