import { Link } from 'react-router-dom';

const DashboardMenuUser = () => {
  return (
    <div className='ml-5 mt-5'>
      <div className='flex flex-col items-start border p-5 gap-10'>
        <Link to={'/dashboard/saved-posts'}>Saved posts</Link>
        <Link to={'/dashboard/my-comments'}>My comments</Link>
        <Link to='/dashboard/profile-settings'>Profile Settings</Link>
      </div>
    </div>
  );
};

export default DashboardMenuUser;
