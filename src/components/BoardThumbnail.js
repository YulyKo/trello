import React from "react";
import './_BoardThumbnail.css';

const BoardThumbnail = ({ title }) => {
  return (
    <div className="thumbnail">
      <h2 className="title">{title}</h2>
    </div>
  );
};

export default BoardThumbnail;
