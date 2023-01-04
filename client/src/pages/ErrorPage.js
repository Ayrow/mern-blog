import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='h-screen bg-slate-100'>
      <div className=' h-1/2 pt-20 flex flex-col justify-center items-center'>
        <div className='flex items-center gap-5'>
          <h3 className='text-3xl font-bold text-blue-900'>404 |</h3>
          <h2 className='text-3xl font-bold'>Page Not Found</h2>
        </div>
        <p className='text-2xl mt-5'>
          I think you are lost but don't worry, I'll help you out!
        </p>
        <div className='mt-10'>
          <Link
            to='/'
            className='text-white text-lg bg-blue-900 rounded-lg p-2 hover:bg-blue-800'>
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
