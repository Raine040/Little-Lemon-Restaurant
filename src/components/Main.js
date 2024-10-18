import React, { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Menu from "./Menu";
import Footer from "./Footer";
import BookingForm from "./BookingForm";

const initializeTimes = () => [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      // console.log("Selected date:", action.date); // For debugging
      // Here you can update the available times based on the action.date
      return initializeTimes();
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const handleUpdateTimes = (date) => {
    dispatch({ type: "UPDATE", date });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/footer" element={<Footer />} />
        <Route
          path="/booking"
          element={
            <BookingForm
              availableTimes={availableTimes}
              updateTimes={handleUpdateTimes}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default Main;
