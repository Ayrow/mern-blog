import { useEffect } from 'react';
import { useUserContext } from '../../context/user/user.context';

const ManageUsers = () => {
  const { users, fetchAllUsers } = useUserContext();

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div>
      <div>
        {users.map((user) => {
          const { username, _id } = user;
          return <div key={_id}>{username}</div>;
        })}
      </div>
    </div>
  );
};

export default ManageUsers;
