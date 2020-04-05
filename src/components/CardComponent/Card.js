import React from "react";
import "./_Card.css";

export default class Card extends React.Component {
  card = this.props;

  render() {
    return (
      <article className="card">
        {/*<input className="name-changer" type="text" name="" id=""/>*/}
        <p className="card_name">{this.card.name}</p>
        <time>{this.card.date}</time>
      </article>
    );
  }
}
