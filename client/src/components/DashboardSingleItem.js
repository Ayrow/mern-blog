import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/app/app.context';

const DashboardSingleItem = ({ name, id, isPost, role, deleteItem }) => {
  const navigate = useNavigate();
  const { editItem, isEditing } = useAppContext();

  return (
    <div className='mt-5 border grid grid-cols-3 p-5'>
      <h3 className=' font-semibold text-center'>{name}</h3>
      <p className='text-lg text-center'>{role}</p>
      <div className='flex gap-5 justify-center'>
        {isPost && (
          <button
            onClick={() => navigate(`/posts/${id}`)}
            className=' bg-blue-400 hover:bg-blue-300 px-4 py-1 rounded-lg'>
            See
          </button>
        )}

        {isEditing ? (
          'Editing'
        ) : (
          <div className='flex gap-5 justify-center'>
            <button
              className=' bg-green-400 hover:bg-green-300 px-4 py-1 rounded-lg'
              onClick={() => editItem(id)}>
              Edit
            </button>
            <button
              className=' bg-red-400 hover:bg-red-300 px-4 py-1 rounded-lg'
              onClick={() => deleteItem(id)}>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardSingleItem;
