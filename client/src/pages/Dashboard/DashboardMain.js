import { Outlet } from 'react-router-dom';
import DashboardMenuAdmin from '../../components/DashboardMenuAdmin';
import DashboardMenuUser from '../../components/DashboardMenuUser';
import { useUserContext } from '../../context/user/user.context';

const DashboardMain = () => {
  const { user } = useUserContext();

  return (
    <div>
      <h3 className='text-2xl text-black text-center mt-10'>
        Welcome to your dashboard
      </h3>
      <div className='flex'>
        {user.role === 'admin' ? <DashboardMenuAdmin /> : <DashboardMenuUser />}
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardMain;
