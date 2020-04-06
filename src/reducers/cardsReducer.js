import { ACTIONS } from "../actions";

const initialState = {
  "card-0": {
    name: "Last Episode",
    id: `card-0`,
    list: "list-0"
  }
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_CARD: {
      const { name, listID, id } = action.payload;

      const newCard = {
        name,
        id: `card-${id}`,
        list: listID
      };

      return { ...state, [`card-${id}`]: newCard };
    }
    case ACTIONS.EDIT_CARD: {
      const { id, newName } = action.payload;
      const card = state[id];
      card.name = newName;
      return { ...state, [`card-${id}`]: card };
    }

    case ACTIONS.DELETE_CARD: {
      const { id } = action.payload;
      const newState = state;
      delete newState[id];
      return newState;
    }
    default:
      return state;
  }
};

export default cardsReducer;
