import { combineReducers } from "redux";

const lists = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return [
        ...state,
        {
          id: action.id,
          title: action.tiltX,
          cards: [],
        }
      ];
    case 'MAP_LISTS':
      return state.map( item => item );
    default:
      return state
  }
};

export default combineReducers({
  lists
});
