import React, {useState} from "react";

const AddingComponent = (props) => {
  const [LIST, SET_LIST] = useState([]);

  const onAddBtnClick = event => {
    SET_LIST(LIST.concat(<props.nameList key={LIST.length} />));
  };

  return (
    <div>
      <button onClick={onAddBtnClick}>Add {props.name}</button>
    </div>
  );
};

export default AddingComponent;
