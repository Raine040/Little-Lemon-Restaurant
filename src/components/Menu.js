import React from "react";
import Foodcards from "./Foodcards";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className="cards">
        {Foodcards.map((Foodcards) => (
          <div key={Foodcards.id} className="menu-items">
            <img src={Foodcards.image} alt="" />
            <div className="menu-content">
              <div className="heading">
                <h4>{Foodcards.title}</h4>
                <h5>${Foodcards.price}</h5>
              </div>
              <p>{Foodcards.description}</p>
              <button
                className="orderbtn"
                // onClick={() => handleOrder(recipe.id)}
              >
                Order delivery
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
