import { useEffect, useState } from 'react';
import { CartState } from '../context/Context';
import Product from './Product';

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  return (
    <>
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {cart.length ? (
            cart.map((prod) => <Product prod={prod} />)
          ) : (
            <h1 className='font-bold text-5xl'>No Items in your cart</h1>
          )}
          <div className=''>
            <div className='font-semibold text-5xl mb-3'>Total</div>
            <div className='font-bold text-3xl'>${total}</div>
            <button
              onClick={() => dispatch({ type: 'CLEAR' })}
              className='mt-4 w-full hover:text-gray-100 focus:ring bg-transparent rounded hover:bg-red-600 py-2 ring-red-300 border-2 border-red-600 font-medium'
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
