import { NavLink } from 'react-router-dom';

const NavDropdown = ({ setIsDropdownOpen }) => {
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
          Action
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
          Another action
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
              rounded-b-lg
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            '>
          Something else here
        </NavLink>
      </li>
    </ul>
  );
};

export default NavDropdown;
