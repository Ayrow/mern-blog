import { useEffect } from 'react';
import DashboardSingleItem from '../../components/DashboardSingleItem';
import FilterSortComponent from '../../components/FilterSortComponent';
import PageBtnContainer from '../../components/PageBtnContainer';
import { useUserContext } from '../../context/user/user.context';

const ManageUsers = () => {
  const {
    users,
    fetchAllUsers,
    deleteUser,
    updateUserFromAdmin,
    sort,
    numOfPages,
    totalUsers,
  } = useUserContext();

  useEffect(() => {
    fetchAllUsers();
  }, [totalUsers, sort]);

  return (
    <div className='mx-auto container mt-5 md:w-3/4 shadow-md border-t-2 border-indigo-400 rounded-t p-10'>
      <div>
        <FilterSortComponent />
      </div>

      {totalUsers > 0 ? (
        <p className='text-center text-lg font-bold m-5'>
          {totalUsers === 1
            ? '1 user has been found'
            : `${totalUsers} users have been found`}
        </p>
      ) : (
        <p className='text-center text-xl font-bold'>No user found</p>
      )}

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
                deleteItem={deleteUser}
                updateItem={updateUserFromAdmin}
                isUser={true}
              />
            );
          })}
        </div>
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </div>
  );
};

export default ManageUsers;
