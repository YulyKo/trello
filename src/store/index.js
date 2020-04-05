import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
// import storage from 'redux-persist/lib/storage';

const persistConfig = {
  kay: "root",
  storage
};

let store = createStore(rootReducer);
export default store;

