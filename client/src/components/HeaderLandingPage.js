import { Link } from 'react-router-dom';
import { useUserContext } from '../context/user/user.context';

const HeaderLandingPage = () => {
  const { user } = useUserContext();

  return (
    <header className='relative h-screen w-full'>
      <div className='text-center bg-gray-50 text-gray-800 h-full flex flex-col justify-center pb-20'>
        <h1 className='text-5xl font-bold mt-0 mb-6'>
          The only blog you need to follow.
        </h1>
        <h3 className='text-3xl font-bold mb-8'>
          Get infos about everything you need to know!
        </h3>
        <div className='flex justify-center gap-5'>
          <Link
            to='/posts'
            className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
            Check posts
          </Link>

          {user ? (
            <Link
              to='/dashboard'
              className='inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
              Dashboard
            </Link>
          ) : (
            <Link
              to='/login'
              className='inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderLandingPage;
