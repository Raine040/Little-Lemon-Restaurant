import React from "react";
import "./Footer.css";
import footerLogo from "../images/footerLogo.png";

const Footer = () => {
  return (
    <footer className="">
      <section>
        <div className="company-info">
          <img src={footerLogo} alt="Little Lemon logo" />
          {/* <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes served with a modern twist.
          </p> */}
        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Reservations</a>
            </li>
            <li>
              <a href="/">Order Online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              Address: <br /> 123 Bear Street, Chicago
            </li>
            <li>
              Phone: <br /> +00 123 456 789
            </li>
            <li>
              Email: <br /> info@littlelemon.com
            </li>
          </ul>
        </div>
        <div>
          <h3>Social Media</h3>
          <ul>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">TikTok</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
