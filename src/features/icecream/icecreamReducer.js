import { INCREMENT } from "./IcecreamConstant";

const initailState = {
  iceCreamCount: 100,
};

const icecreamReducer = (state = initailState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        iceCreamCount: state.iceCreamCount + action.payload,
      };
    default:
      return state;
  }
};

export default icecreamReducer;
