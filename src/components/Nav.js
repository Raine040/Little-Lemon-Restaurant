import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo .svg";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <img src={logo} alt="little lemon restaurant logo" />
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        <Link className="nav-link" to="/">
          <h4>Home</h4>
        </Link>
        <Link className="nav-link" to="/about">
          <h4>About</h4>
        </Link>
        <Link className="nav-link" to="/">
          <h4>Services</h4>
        </Link>
        <Link className="nav-link" to="/menu">
          <h4>Menu</h4>
        </Link>
        <Link className="nav-link" to="/reservations">
          <h4>Reservations</h4>
        </Link>
        <Link className="nav-link" to="/menu">
          <h4>Order Online</h4>
        </Link>
        <Link className="nav-link" to="/">
          <h4>Login</h4>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
