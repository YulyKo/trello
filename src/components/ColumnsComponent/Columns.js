import React, {useState} from "react";
import "./_Clolumns.css"
import Column from "../ColumnComponent/Column";

const Columns = () => {
  const [LIST, SET_LIST] = useState([]);

  const onAddBtnClick = event => {
    SET_LIST(LIST.concat(<Column key={LIST.length}/>))
  };

  return (
    <main className="columns">
      {LIST}
      <button onClick={onAddBtnClick}>Add column</button>
    </main>
  );
};

export default Columns;
