import { combineReducers } from "redux";
import counterReducer from "./features/counter/counterReducer";
import icecreamReducer from "./features/icecream/icecreamReducer";
import productReducer from "./features/products/productReducer";

const rootReducer = combineReducers({
  // declare all reducers
  counter: counterReducer,
  icecreamCounter: icecreamReducer,
  productData: productReducer,
});

export default rootReducer;
