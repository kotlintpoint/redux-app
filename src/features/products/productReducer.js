import ProductConstants from "./ProductConstants";

const initialState = {
  products: [],
  isLoading: false,
  error: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductConstants.PRODUCT_FETCHING:
      return {
        isLoading: true,
        products: [],
        error: "",
      };
    case ProductConstants.PRODUCT_FETCH_SUCCESS:
      return {
        isLoading: false,
        products: action.payload,
        error: "",
      };
    case ProductConstants.PRODUCT_FETCH_ERROR:
      return {
        isLoading: false,
        products: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
