import * as React from 'react';
import "./_Column.css"
// __ - block
// _  - elem
// -- - modifier

class Column extends React.Component {
  render() {
    return (
      <section className="column__container">
        <input className="column__container_name-changer" type="text"/>
        <p>name of column</p>
        <button className="column__container_add-card-btn">Add card</button>
      </section>
    );
  }
}

export default Column;
