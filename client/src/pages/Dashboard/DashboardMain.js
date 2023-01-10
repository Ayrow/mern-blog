import { Outlet } from 'react-router-dom';
import DashboardMenuAdmin from '../../components/DashboardMenuAdmin';
import DashboardMenuUser from '../../components/DashboardMenuUser';
import { useUserContext } from '../../context/user/user.context';

const DashboardMain = () => {
  const { user } = useUserContext();

  return (
    <div className='h-screen w-screen flex'>
      {user.role === 'admin' ? <DashboardMenuAdmin /> : <DashboardMenuUser />}
      <div className='flex flex-col w-full h-full'>
        <h3 className='text-2xl text-black text-center pt-10'>
          Welcome to your dashboard, {user.username}!
        </h3>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardMain;
