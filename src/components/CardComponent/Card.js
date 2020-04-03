import React from "react";
import "./_Card.css";

export default class Card extends React.Component{
  render() {
    return (
      <article className="card">
        <input className="name-changer" type="text" name="" id=""/>
        <p className="card_name">name of card</p>
      </article>
    );
  }
}
