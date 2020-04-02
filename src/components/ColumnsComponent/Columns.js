import * as React from "react";
import Column from "../ColumnComponent/Column";
import "./_Clolumns.css"

class Columns extends React.Component {
  render() {
    return (
      <main className="columns">
        <Column/>
        <Column/>
        <Column/>
        <button>Add Column</button>
      </main>
    );
  }
}

export default Columns;
