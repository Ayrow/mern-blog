import { NavLink } from 'react-router-dom';
import { adminLinks } from '../utils/menuLinks';

const DashboardMenuAdmin = () => {
  return (
    <div className=' relative w-1/6 bg-gray-800 h-full text-white px-5 pt-10'>
      <div className='fixed flex flex-col items-center gap-10'>
        {adminLinks.map((link) => {
          const { id, text, path } = link;
          return (
            <NavLink
              to={path}
              key={id}
              className={({ isActive }) =>
                isActive
                  ? ' hover:bg-slate-600 bg-slate-700 p-3'
                  : ' hover:bg-slate-600 p-3'
              }>
              {text}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardMenuAdmin;
