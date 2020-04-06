import { ACTIONS } from "../actions";
import uuid from 'react-uuid';

export const setActiveBoard = id => {
  return {
    type: ACTIONS.SET_ACTIVE_BOARD,
    payload: id
  };
};

export const addBoard = title => {
  const id = uuid();
  return {
    type: ACTIONS.ADD_BOARD,
    payload: { title, id }
  };
};
