import { useEffect } from 'react';
import DashboardSingleItem from '../../components/DashboardSingleItem';
import { useUserContext } from '../../context/user/user.context';

const ManageUsers = () => {
  const { users, fetchAllUsers } = useUserContext();

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className='mx-auto container mt-5 md:w-3/4 shadow-md border-t-2 border-indigo-400 rounded-t p-10'>
      <div>Filter and Sort Container</div>
      <div className='mt-10'>
        <div className='grid grid-cols-3 uppercase font-bold'>
          <p className='text-center'>Username</p>
          <p className='text-center'>Role</p>
          <p className='text-center'>actions</p>
        </div>
        <div className='flex flex-col gap-5'>
          {users.map((user) => {
            const { username, _id, role } = user;
            return (
              <DashboardSingleItem
                key={_id}
                id={_id}
                name={username}
                role={role}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
