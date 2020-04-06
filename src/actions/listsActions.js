import { ACTIONS } from "../actions";
import uuid from 'react-uuid';

export const addList = title => {
  return (dispatch, getState) => {
    const boardID = getState().activeBoard;
    const id = uuid();
    console.log('list: ' + id);
    dispatch({
      type: ACTIONS.ADD_LIST,
      payload: { title, boardID, id }
    });
  };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return (dispatch, getState) => {
    const boardID = getState().activeBoard;
    dispatch({
      type: ACTIONS.DRAG_HAPPENED,
      payload: {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId,
        type,
        boardID
      }
    });
  };
};

export const editTitle = (listID, newTitle) => {
  return {
    type: ACTIONS.EDIT_LIST_TITLE,
    payload: {
      listID,
      newTitle
    }
  };
};

export const deleteList = listID => {
  return (dispatch, getState) => {
    const boardID = getState().activeBoard;
    return dispatch({
      type: ACTIONS.DELETE_LIST,
      payload: {
        listID,
        boardID
      }
    });
  };
};
