import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";
import BookingPage from "./BookingPage";
import Confirmation from "./Confirmation";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/about" element={<About />} />

      <Route path="/reservations" element={<BookingPage />} />

      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
};

export default Routing;
