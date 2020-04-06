import React from "react";
import './_Form.css';

const FormComponent = React.memo(
  ({ list, text = "", onChange, closeForm, children }) => {
    const placeholder = list
      ? "Enter list title..."
      : "Enter a title for this card...";

    return (
      <div className="container">
        <form className="form">
          <textarea className="styled-text-area"
            placeholder={placeholder}
            autoFocus
            value={text}
            onChange={e => onChange(e)}
            onBlur={closeForm}
          />
        </form>
        <div className="button_container">
          {children}
          <button onMouseDown={closeForm}>close</button>
        </div>
      </div>
    );
  }
);

export default FormComponent;
