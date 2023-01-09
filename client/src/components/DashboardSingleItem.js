import { useNavigate } from 'react-router-dom';

const DashboardSingleItem = ({ name, id }) => {
  const navigate = useNavigate();
  return (
    <div className='mt-5 border flex justify-between p-5'>
      <h3 className=' font-semibold'>{name}</h3>
      <div className='flex gap-5'>
        <button
          onClick={() => navigate(`/posts/${id}`)}
          className=' bg-blue-400 hover:bg-blue-300 px-4 py-1 rounded-lg'>
          See
        </button>
        <button className=' bg-green-400 hover:bg-green-300 px-4 py-1 rounded-lg'>
          Edit
        </button>
        <button className=' bg-red-400 hover:bg-red-300 px-4 py-1 rounded-lg'>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DashboardSingleItem;
