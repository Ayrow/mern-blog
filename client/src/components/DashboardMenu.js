import { NavLink } from 'react-router-dom';

const DashboardMenu = ({ links }) => {
  return (
    <div className=' w-1/6 bg-gray-800 h-full text-white px-5 pt-10'>
      <div className='flex flex-col items-center gap-10'>
        {links.map((link) => {
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

export default DashboardMenu;
