import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useUserContext } from '../context/user/user.context';

const NavDropdown = ({ setIsDropdownOpen }) => {
  const { user } = useUserContext();

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
              to='/'
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
              to='/'
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
            <button
              className='
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
              Login
            </button>
          </li>
          <li>
            <button
              className='
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
              Register
            </button>
          </li>
        </>
      )}
    </ul>
  );
};

export default NavDropdown;
