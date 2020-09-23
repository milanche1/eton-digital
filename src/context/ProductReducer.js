export default (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case "CHECKOUT_PRODUCT":
      return {
        ...state,
        checkout: [...state.checkout, action.payload],
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
