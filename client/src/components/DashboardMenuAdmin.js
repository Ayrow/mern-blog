import { Link } from 'react-router-dom';

const DashboardMenuAdmin = () => {
  return (
    <div className='ml-5 mt-5'>
      <div className='flex flex-col items-start border p-5 gap-10'>
        <button>Add New Post</button>
        <button>All Posts</button>
        <button>Manage users</button>
      </div>
    </div>
  );
};

export default DashboardMenuAdmin;
