import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/user/user.context';

const LoginPage = () => {
  const { user, setupUser } = useUserContext();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [isMember, setIsMember] = useState(true);

  const handleFormInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (user) {
      navigate('/posts');
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, email } = values;

    if (!email || !password) {
      alert('there is a missing field');
    } else {
      if (isMember) {
        const endpoint = 'loginUser';
        setupUser({ username, email, password, endpoint });
        if (user) {
          navigate('/posts');
        }
      } else {
        if (!username) {
          alert('please enter a unique username');
        } else {
          const endpoint = 'registerUser';
          setupUser({ username, email, password, endpoint });
          if (user) {
            navigate('/posts');
          }
        }
      }
    }
    setValues({ username: '', password: '', email: '' });
  };

  return (
    <section className='h-screen w-screen gradient-form bg-gray-200 md:h-screen'>
      <div className='container py-6 px-6 h-full w-full'>
        <div className=' flex-wrap text-gray-800 w-full flex justify-center items-center'>
          <div className='xl:w-10/12'>
            <div className='block bg-white shadow-lg rounded-lg'>
              <div className='lg:flex lg:flex-wrap g-0'>
                <div className='lg:w-6/12 px-4 md:px-0'>
                  <div className='md:p-12 md:mx-6'>
                    <div className='text-center'>
                      <img
                        className='mx-auto w-48'
                        src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'
                        alt='logo'
                      />
                      <h4 className='text-xl font-semibold mt-1 mb-12 pb-1'>
                        Welcome to BLOGGO
                      </h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <p className='mb-4'>
                        {isMember
                          ? 'Please login to your account'
                          : 'Register a new account'}
                      </p>

                      {!isMember && (
                        <div className='mb-4'>
                          <input
                            type='text'
                            name='username'
                            minLength={3}
                            maxLength={20}
                            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                            placeholder='Username'
                            value={values.username}
                            onChange={handleFormInput}
                          />
                        </div>
                      )}

                      <div className='mb-4'>
                        <input
                          type='email'
                          name='email'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Email'
                          value={values.email}
                          onChange={handleFormInput}
                        />
                      </div>
                      <div className='mb-4'>
                        <input
                          type='password'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Password'
                          minLength={6}
                          name='password'
                          value={values.password}
                          onChange={handleFormInput}
                        />
                      </div>
                      <div className='text-center pt-1 mb-12 pb-1'>
                        <button
                          className='inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3'
                          type='submit'
                          style={{
                            background: `
                        linear-gradient(
                          to right,
                          #ee7724,
                          #d8363a,
                          #dd3675,
                          #b44593
                        )
                      `,
                          }}>
                          {isMember ? 'sign in' : 'sign up'}
                        </button>

                        {isMember && (
                          <a className='text-gray-500' href='#!'>
                            Forgot password?
                          </a>
                        )}
                      </div>
                      <div className='flex items-center justify-between pb-6'>
                        <p className='mb-0 mr-2'>
                          {isMember
                            ? 'No account?'
                            : 'Already have an account?'}
                        </p>
                        <button
                          type='button'
                          className='inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                          onClick={() => setIsMember(!isMember)}>
                          {isMember ? 'REGISTER' : 'LOGIN'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className='lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none'
                  style={{
                    background: `linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)`,
                  }}>
                  <div className='text-white px-4 py-6 md:p-12 md:mx-6'>
                    <h4 className='text-xl font-semibold mb-6'>
                      We are more than just a blog
                    </h4>
                    <p className='text-sm'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
