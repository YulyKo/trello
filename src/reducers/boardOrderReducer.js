import { ACTIONS } from "../actions";

const initialState = [];

const boardOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_BOARD: {
      return [...state, `board-${action.payload.id}`];
    }
    default:
      return state;
  }
};

export default boardOrderReducer;
