import React from "react";
import "./_List.css"
import {useState} from "react";
import Card from "../CardComponent/Card";
// __ - block
// _  - elem
// -- - modifier

 const List = ({ title, cards }) => {

  return (
    <section className="column__container">
      {/*<input className="name-changer column__container_name-changer" type="text"/>*/}
      <p>{title}</p>
      <ul className="column__container_cards" id="cards">
        {cards.map(card => (
          <Card name={card.name} date={card.date}/>
        ))}
      </ul>
      {/*<button className="column__container_add-card-btn" onClick={addCard}>Add card</button>*/}
    </section>
  );
}

export default List;
