import { ACTIONS } from "../actions";
import { uuid } from "uuidv4";

export const addCard = (listID, name) => {
  const id = uuid;
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
