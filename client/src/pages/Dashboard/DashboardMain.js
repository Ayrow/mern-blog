import { Outlet } from 'react-router-dom';
import DashboardMenu from '../../components/DashboardMenu';
import { useUserContext } from '../../context/user/user.context';
import { adminLinks, userLinks } from '../../utils/menuLinks';

const DashboardMain = () => {
  const { user } = useUserContext();

  return (
    <div className=' h-screen w-screen flex'>
      {user.role === 'admin' ? (
        <DashboardMenu links={adminLinks} />
      ) : (
        <DashboardMenu links={userLinks} />
      )}
      <div className='flex flex-col w-full overflow-scroll '>
        <h3 className='text-2xl text-black text-center pt-10'>
          Welcome to your dashboard, {user.username}!
        </h3>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardMain;
