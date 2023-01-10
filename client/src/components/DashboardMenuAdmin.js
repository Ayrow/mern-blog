import { NavLink } from 'react-router-dom';

const DashboardMenuAdmin = () => {
  return (
    <div className=' relative w-1/6 bg-gray-800 h-full text-white px-5 pt-10'>
      <div className='fixed flex flex-col items-center gap-10'>
        <NavLink
          to={'/dashboard/add-post'}
          className={({ isActive }) =>
            isActive
              ? ' hover:bg-slate-600 bg-slate-700 p-3'
              : ' hover:bg-slate-600 p-3'
          }>
          Add New Post
        </NavLink>
        <NavLink
          to={'/dashboard/all-posts'}
          className={({ isActive }) =>
            isActive
              ? ' hover:bg-slate-600 bg-slate-700 p-3'
              : ' hover:bg-slate-600 p-3'
          }>
          All Posts
        </NavLink>
        <NavLink
          to={'/dashboard/manage-users'}
          className={({ isActive }) =>
            isActive
              ? ' hover:bg-slate-600 bg-slate-700 p-3'
              : ' hover:bg-slate-600 p-3'
          }>
          Manage users
        </NavLink>
        <NavLink
          to='/dashboard/profile-settings'
          className={({ isActive }) =>
            isActive
              ? ' hover:bg-slate-600 bg-slate-700 p-3'
              : ' hover:bg-slate-600 p-3'
          }>
          Profile Settings
        </NavLink>
      </div>
    </div>
  );
};

export default DashboardMenuAdmin;
