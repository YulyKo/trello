import React, { useState } from "react";
import TrelloCreate from "../TrelloCreate";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { editTitle, deleteList } from "../../actions";
import Card from "../CardComponent/Card";

const ListContainer = `
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin: 0 8px 0 0;
`;

const StyledInput = `
  width: 100%;
  border: none;
  outline-color: blue;
  border-radius: 3px;
  margin-bottom: 3px;
  padding: 5px;
`;

const TitleContainer = `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const DeleteButton = `
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  opacity: 0.4;
  &:hover {
    opacity: 0.8;
  }
`;

const ListTitle = `
  transition: background 0.3s ease-in;
  ${TitleContainer}:hover & {
    background: #ccc;
  }
`;

const List = ({ title, cards, listID, index, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [listTitle, setListTitle] = useState(title);

  const renderEditInput = () => {
    return (
      <form onSubmit={handleFinishEditing}>
        <input className={StyledInput}
          type="text"
          value={listTitle}
          onChange={handleChange}
          autoFocus
          onFocus={handleFocus}
          onBlur={handleFinishEditing}
        />
      </form>
    );
  };

  const handleFocus = e => {
    e.target.select();
  };

  const handleChange = e => {
    e.preventDefault();
    setListTitle(e.target.value);
  };

  const handleFinishEditing = e => {
    // e.preventDefault();
    setIsEditing(false);
    dispatch(editTitle(listID, listTitle));
  };

  const handleDeleteList = () => {
    dispatch(deleteList(listID));
  };

  return (
    <Draggable draggableId={String(listID)} index={index}>
      {provided => (
        <section className={ListContainer}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={String(listID)} type="card">
            {provided => (
              <div>
                <div>
                  {isEditing ? (
                    renderEditInput()
                  ) : (
                    <article onClick={() => setIsEditing(true)}>
                      <p className={ListTitle}>{listTitle}</p>
                      <button className={DeleteButton} onClick={handleDeleteList}>
                        delete
                      </button>
                    </article>
                  )}
                </div>
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {cards.map((card, index) => (
                    <Card
                      key={card.id}
                      name={card.name}
                      id={card.id}
                      index={index}
                      listID={listID}
                    />
                  ))}
                  {provided.placeholder}
                  <TrelloCreate listID={listID} />
                </div>
              </div>
            )}
          </Droppable>
        </section>
      )}
    </Draggable>
  );
};

export default connect()(List);
