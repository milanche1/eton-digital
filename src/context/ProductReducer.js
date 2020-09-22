export default (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "CHECKOUT_PRODUCT":
      return {
        ...state,
        checkout: [...state.checkout, action.payload],
      };
    default:
      return state;
  }
};
