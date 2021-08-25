import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';

const Header = () => {
  const { searchDispatch } = CartState();
  return (
    <header>
      <nav className='bg-gray-100 py-5 flex justify-between items-center'>
        <Link to='/'>
          <div className='title font-bold text-2xl px-10'>ShoppingCart</div>
        </Link>
        <div className='bg-gray-200 rounded-full px-3 flex'>
          <button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </button>
          <input
            onChange={(e) =>
              searchDispatch({ type: 'SEARCH', payload: e.target.value })
            }
            className='w-96 outline-none bg-gray-200 rounded-full p-3'
            placeholder='Search product'
            type='text'
          />
        </div>
        <div className='flex space-x-8 mr-24'>
          <Link to='/'>
            <button className='flex focus:ring ring-gray-400 text-medium hover:bg-gray-200 px-2 py-2'>
              <span className='mr-2 text-gray-500'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                  />
                </svg>
              </span>
              Home
            </button>
          </Link>

          <Link to='/cart'>
            <button className='flex focus:ring ring-gray-400 text-medium hover:bg-gray-200 px-2 py-2'>
              <span className='mr-2 text-gray-500'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </span>
              Cart
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
