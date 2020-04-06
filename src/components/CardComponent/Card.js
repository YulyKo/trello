import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import Form from "../Form";
import { editCard, deleteCard } from "../../actions";
import { connect } from "react-redux";
import Button from "../Button";

const CardContainer = `
  margin: 0 0 8px 0;
  position: relative;
  max-width: 100%;
  word-wrap: break-word;
`;

const EditButton = `
  position: absolute;
  display: none;
  right: 5px;
  top: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const DeleteButton = `
  position: absolute;
  display: none;
  right: 5px;
  bottom: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const Card = React.memo(({ name, id, listID, index, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardName, setName] = useState(name);

  const closeForm = e => {
    setIsEditing(false);
  };

  const handleChange = e => {
    setName(e.target.value);
  };

  const saveCard = e => {
    e.preventDefault();

    dispatch(editCard(id, listID, cardName));
    setIsEditing(false);
  };

  const handleDeleteCard = e => {
    console.log(listID);
    dispatch(deleteCard(id, listID));
  };

  const renderEditForm = () => {
    return (
      <Form text={cardName} onChange={handleChange} closeForm={closeForm}>
        <Button onClick={saveCard}>Save</Button>
      </Form>
    );
  };

  const renderCard = () => {

    /*       open modal window for edit and add info*/
    return (
      <Draggable draggableId={String(id)} index={index}>
        {provided => (
          <section className={CardContainer}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onDoubleClick={() => setIsEditing(true)}
          >
            <Card>
              <button className={EditButton}
                onMouseDown={() => setIsEditing(true)}
                fontSize="small"
              >
                edit
              </button>
              <button className={DeleteButton} fontSize="small" onMouseDown={handleDeleteCard}>
                delete
              </button>

              <article>
                <p>{name}</p>
              </article>
            </Card>
          </section>
        )}
      </Draggable>
    );
  };

  return isEditing ? renderEditForm() : renderCard();
});

export default connect()(Card);
