import * as React from 'react';
import "./_Column.css"
import {useState} from "react";
import Card from "../CardComponent/Card";
// __ - block
// _  - elem
// -- - modifier

 const Column = props => {
  const [LIST, SET_LIST] = useState([]);

  const addCard = () => {
    SET_LIST(LIST.concat(<Card key={LIST.length}/>))
  };

  return (
    <section className="column__container">
      <input className="column__container_name-changer" type="text"/>
      <p>name of column</p>
      {LIST}
      <button className="column__container_add-card-btn" onClick={addCard}>Add card</button>
    </section>
  );
}

export default Column;
