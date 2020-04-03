import React from "react";
import ReactDOM from 'react-dom';
import "./_Column.css"
import {useState} from "react";
import Card from "../CardComponent/Card";
// __ - block
// _  - elem
// -- - modifier

 const Column = props => {
  const [LIST, SET_LIST] = useState([]);
  const setCard = LIST.map((card) => <li key={card.key}>{card}</li>);

  const addCard = () => {
    let card = <Card key={LIST.length}/>;
    SET_LIST(LIST.concat(card));
  };

  return (
    <section className="column__container">
      <input className="column__container_name-changer" type="text"/>
      <p>name of column</p>
      <ul className="flex" id="cards">
        {setCard}
      </ul>
      <button className="column__container_add-card-btn" onClick={addCard}>Add card</button>
    </section>
  );
}

export default Column;
