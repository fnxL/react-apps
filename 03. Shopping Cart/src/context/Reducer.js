export const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, cart: [...state.cart, action.payload] };

    case 'REMOVE':
      return {
        ...state,
        cart: [...state.cart].filter((prod) => prod.id !== action.payload.id),
      };

    case 'CLEAR':
      return { ...state, cart: [] };
    default:
      break;
  }
};

export const Search = (state, action) => {
  switch (action.type) {
    case 'SEARCH':
      return action.payload;
    default:
      break;
  }
};
