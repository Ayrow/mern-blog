import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardSingleItem from '../../components/DashboardSingleItem';
import { useUserContext } from '../../context/user/user.context';

const ManageUsers = () => {
  const { users, fetchAllUsers } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className='m-5 w-full'>
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
              <div key={_id} className='mt-5 border grid grid-cols-3 p-5'>
                <h3 className=' font-semibold text-center'>{username}</h3>
                <p className='text-lg text-center'>{role}</p>
                <div className='flex gap-5 justify-center'>
                  <button className=' bg-green-400 hover:bg-green-300 px-4 py-1 rounded-lg'>
                    Edit
                  </button>
                  <button className=' bg-red-400 hover:bg-red-300 px-4 py-1 rounded-lg'>
                    Delete User
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
