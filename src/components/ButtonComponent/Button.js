import React from "react";
import './_Button.css';

const Button = ({ children, onClick }) => {
  return (
    <button className="button" variant="contained" onMouseDown={onClick}>
      {children}
    </button>
  );
};

export default Button;
