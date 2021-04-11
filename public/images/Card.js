import React from "react";
import CardItem from "./CardItem";
import "./Card.css";

function Card() {
  return (
    <div className="cards">
      <h1>Check out our offer!</h1>
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
              label="Nice"
              path="/services"
            />
          </ul>

          <ul className="card_items">
            <CardItem
              src="images/pula.jpg"
              text="Explore "
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="images/st.jpg"
              text="Explore fgfdefseffdddgdfgdfg"
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
