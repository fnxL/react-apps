import { CartState } from '../context/Context';

const Product = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div key={prod.id} className='group relative'>
      <div className='w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none'>
        <img
          src={prod.image}
          alt=''
          className='w-full h-full object-center object-cover lg:w-full lg:h-full'
        />
      </div>
      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-md text-gray-700'>{prod.name}</h3>
        </div>
        <p className='text-md  font-bold text-gray-900'>${prod.price}</p>
      </div>
      {cart.some((p) => p.id === prod.id) ? (
        <button
          onClick={() => dispatch({ type: 'REMOVE', payload: prod })}
          className=' font-medium mt-4 w-full hover:text-gray-100 focus:ring bg-transparent rounded hover:bg-red-600 py-2 ring-red-300 border-2 border-red-600'
        >
          Remove from Cart
        </button>
      ) : (
        <button
          onClick={() => dispatch({ type: 'ADD', payload: prod })}
          className='font-medium mt-4 w-full hover:text-gray-100 focus:ring bg-transparent rounded hover:bg-indigo-600 py-2 ring-indigo-300 border-2 border-indigo-600'
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default Product;
