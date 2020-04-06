import { ACTIONS } from "../actions";

const initialState = {};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_CARD: {
      const { name, listID, id, date } = action.payload;
      console.log("create card from reducer");
      const newCard = {
        name,
        id: `card-${id}`,
        list: listID,
        date
      };

      return { ...state, [`card-${id}`]: newCard };
    }

    case ACTIONS.EDIT_CARD: {
      const { id, newText } = action.payload;
      const card = state[id];
      card.name = newText;
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
