import { DECREMENT, INCREMENT, RESET } from "./CounterConstant";

const initialState = {
  value: 10,
};

export default function counterReducer(state = initialState, action) {
  // action = {type : "increment", payload : 1}
  // action = {type : "decrement"}
  // action = {type : "reset"}
  switch (action.type) {
    case INCREMENT:
      return {
        value: state.value + action.payload,
      };
    case DECREMENT:
      return {
        value: state.value - action.payload,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
}
