import { createContext, useContext, useReducer } from 'react';
import { productsArray } from '../productsArray';
import { CartReducer, Search } from './Reducer';

const Cart = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, {
    products: productsArray,
    cart: [],
  });

  const [search, searchDispatch] = useReducer(Search, '');
  return (
    <Cart.Provider value={{ state, dispatch, search, searchDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
