import ProductConstants from "./ProductConstants";

export const fetchProducts = () => {
  return async (dispatch) => {
    // 1. before sending request
    dispatch({ type: ProductConstants.PRODUCT_FETCHING });
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      console.log("result ", result);
      // 2. fetching product success
      dispatch({
        type: ProductConstants.PRODUCT_FETCH_SUCCESS,
        payload: result.products,
      });
    } catch (error) {
      // 3. fetching product error
      dispatch({
        type: ProductConstants.PRODUCT_FETCH_ERROR,
        payload: error,
      });
    }
  };
};
