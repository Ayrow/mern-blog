import DashboardMenuAdmin from '../../components/DashboardMenuAdmin';
import { useUserContext } from '../../context/user/user.context';

const DashboardMain = () => {
  const { user } = useUserContext();

  return (
    <div>
      <h3 className='text-2xl text-black text-center mt-10'>
        Welcome to your dashboard
      </h3>
      <div className='flex'>
        <DashboardMenuAdmin />
      </div>
    </div>
  );
};

export default DashboardMain;
