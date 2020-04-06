import { ACTIONS } from "../actions";
import uuid from 'react-uuid';

export const addCard = (listID, name) => {
  const id = uuid();
  console.log('card: ' + id);
  return {
    type: ACTIONS.ADD_CARD,
    payload: { name, listID, id }
  };
};

export const editCard = (id, listID, newName) => {
  return {
    type: ACTIONS.EDIT_CARD,
    payload: { id, listID, newName }
  };
};

export const deleteCard = (id, listID) => {
  return {
    type: ACTIONS.DELETE_CARD,
    payload: { id, listID }
  };
};
