import React, { useState } from "react";
import TrelloCreate from "../TrelloCreateComponent/TrelloCreate";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { editTitle, deleteList } from "../../actions";
import Card from "../CardComponent/Card";


const List = ({ title, cards, listID, index, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [listTitle, setListTitle] = useState(title);

  const renderEditInput = () => {
    return (
      <form onSubmit={handleFinishEditing}>
        <input className="list__container_input"
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

  const handleFinishEditing = () => {
    setIsEditing(false);
    dispatch(editTitle(listID, listTitle));
  };

  const handleDeleteList = () => {
    dispatch(deleteList(listID));
  };

  return (
    <Draggable draggableId={String(listID)} index={index}>
      {provided => (
        <section className="list__container"
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
                      <p className="list__container_title">{listTitle}</p>
                      <button className="list__container_delete-Button" onClick={handleDeleteList}>
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
