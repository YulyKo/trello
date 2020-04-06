import React from "react";

const OpenForm = ({ list, children, onClick }) => {
  const  OpenFormButton = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: '3px',
    height: '36px',
    marginLeft: '8px',
    width: '300px',
    paddingLeft: '10px',
    paddingRight: '10px'
  };

  OpenFormButton.opacity = list ? 1 : 0.5;
  OpenFormButton.color = list ? "white" : "inherit";
  OpenFormButton.backgroundColor = list ? "rgba(0,0,0,.15)" : "inherit";

  return (
    <button className={OpenFormButton} onClick={onClick}>
      <p style={{ flexShrink: 0 }}>{children}</p>
    </button>
  );
};

export default OpenForm;
