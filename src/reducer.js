import { combineReducers } from "redux";
import counterReducer from "./features/counter/counterReducer";
import icecreamReducer from "./features/icecream/icecreamReducer";

const rootReducer = combineReducers({
  // declare all reducers
  counter: counterReducer,
  icecreamCounter: icecreamReducer,
});

export default rootReducer;
