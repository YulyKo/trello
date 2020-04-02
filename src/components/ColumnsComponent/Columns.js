import * as React from "react";
import Column from "../ColumnComponent/Column";
import "./_Clolumns.css"
import AddingComponent from "../AddingComponent/AddingComponent";

class Columns extends React.Component {
  render() {
    return (
      <main className="columns">
        <AddingComponent nameList={Column} name="Column"/>
      </main>
    );
  }
}

export default Columns;
