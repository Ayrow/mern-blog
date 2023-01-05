import { Link } from 'react-router-dom';

const DashboardMenuAdmin = () => {
  return (
    <div className='ml-5 mt-5'>
      <div className='flex flex-col items-start border p-5 gap-10'>
        <Link to={'/dashboard/add-post'}>Add New Post</Link>
        <Link to={'/dashboard/all-posts'}>All Posts</Link>
        <Link to={'/dashboard/manage-users'}>Manage users</Link>
        <Link to='/dashboard/profile-settings'>Profile Settings</Link>
      </div>
    </div>
  );
};

export default DashboardMenuAdmin;
