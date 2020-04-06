import React from "react";

const StyledButton = {
  color: "white",
  background: "#5aac44"
};

const Button = ({ children, onClick }) => {
  return (
    <button className={StyledButton} variant="contained" onMouseDown={onClick}>
      {children}
    </button>
  );
};

export default Button;
