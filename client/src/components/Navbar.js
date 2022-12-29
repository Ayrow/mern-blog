import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class='bg-gray-800'>
      <div className='flex items-center justify-between p-5'>
        <div>
          <p>Here will be a logo</p>
        </div>

        <div className='flex gap-10 text-xl'>
          <Link to='/' className=' text-gray-300'>
            Home
          </Link>
          <Link to='/posts' className='text-gray-300'>
            Posts
          </Link>
        </div>

        <div className='flex gap-5 items-center'>
          <div class='flex justify-center'>
            <div class='input-group relative flex '>
              <input
                type='search'
                class='form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                placeholder='Search'
                aria-label='Search'
                aria-describedby='button-addon2'
              />
              <button
                class='btn px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center'
                type='button'
                id='button-addon2'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='search'
                  class='w-4'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'>
                  <path
                    fill='currentColor'
                    d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'></path>
                </svg>
              </button>
            </div>
          </div>
          <div class='relative ml-3'>
            <div>
              <button
                type='button'
                class='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                id='user-menu-button'
                aria-expanded='false'
                aria-haspopup='true'>
                <span class='sr-only'>Open user menu</span>
                <img
                  class='h-8 w-8 rounded-full'
                  src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
