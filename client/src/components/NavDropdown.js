import { NavLink, useNavigate } from 'react-router-dom';
import { usePostsContext } from '../context/posts/posts.context';
import { useUserContext } from '../context/user/user.context';

const NavDropdown = ({ setIsDropdownOpen }) => {
  const { user, logoutUser } = useUserContext();
  const { clearSavedPosts } = usePostsContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    clearSavedPosts();
    navigate('/');
  };

  return (
    <ul
      className='
          min-w-max
          absolute
          bg-white
          text-base
          z-50
          float-left
          list-none
          text-left
          rounded-lg
          shadow-lg
          bg-clip-padding
          border-none
          right-0
          mt-2
        '
      aria-labelledby='dropdownMenuButton1'>
      {user ? (
        <>
          <li>
            <NavLink
              to='/dashboard/'
              onClick={() => setIsDropdownOpen(false)}
              className='
              text-sm
              rounded-t-lg
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            '>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to='dashboard/profile-settings'
              onClick={() => setIsDropdownOpen(false)}
              className='
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            '>
              Profile
            </NavLink>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className='
              text-left
              text-sm
              py-2
              px-4
              rounded-b-lg
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            '>
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              to='/login'
              onClick={() => setIsDropdownOpen(false)}
              className='
              text-sm
              py-2
              px-4
              rounded-lg
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            '>
              Login
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default NavDropdown;
