import React from "react";
import CardItem from "./CardItem";
import "./Card.css";

function Card() {
  return (
    <div className="cards">
      <h1>The most beautiful nature in the world</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="card_items">
            <CardItem
              src="images/du.jpg"
              text="Explore "
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="images/plitvice.jpg"
              text="Explore the oldest national park in Croatia"
              label="Stunning"
              path="/services"
            />
          </ul>

          <ul className="card_items">
            <CardItem
              src="images/pula.jpg"
              text="Explore ancient arena and the rest of the city"
              label="Historical"
              path="/services"
            />
            <CardItem
              src="images/st.jpg"
              text="Explore cathedral and other beauties of the town"
              label="Nice"
              path="/services"
            />
            <CardItem
              src="images/zd.jpg"
              text="Watch the most beautiful sunsets listening the sounds of the sea"
              label="Nice"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
