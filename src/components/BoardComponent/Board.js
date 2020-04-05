import List from "../ListComponent/List";
import React from "react";

export default class Board extends React.Component {
  LISTS = this.props;

  render() {
    return (
      <ul>
        <li>
          {this.LISTS.map(
            list => <List key={list.id} {...list}/>
          )}
          <List key={this.LISTS.id}/>
        </li>
      </ul>
    );
  }
}
