import { useNavigate } from 'react-router-dom';
import { AddPost } from '../pages/Dashboard/index';

const SinglePostToManage = ({
  isEditing,
  itemID,
  id,
  name,
  shortDescription,
  postText,
  cancelEditItem,
  editItem,
  setShowConfirmationModal,
}) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className='mt-5 border flex justify-between items-center px-10 py-5'>
        <h3 className=' font-semibold text-center'>{name}</h3>
        <div className='flex gap-5 justify-center'>
          <button
            onClick={() => navigate(`/posts/${id}`)}
            className=' bg-blue-400 hover:bg-blue-300 px-4 py-1 rounded-lg'>
            See
          </button>
          <button
            className=' bg-green-400 hover:bg-green-300 px-4 py-1 rounded-lg'
            onClick={() => editItem(id)}>
            Edit
          </button>
          <button
            className=' bg-red-400 hover:bg-red-300 px-4 py-1 rounded-lg'
            onClick={() => setShowConfirmationModal(true)}>
            Delete
          </button>
        </div>
      </div>

      {isEditing && itemID === id && (
        <div className='w-full'>
          <AddPost
            isEditing={isEditing}
            itemID={itemID}
            oldPostTitle={name}
            oldShortDescription={shortDescription}
            oldPostText={postText}
            cancelEditItem={cancelEditItem}
          />
        </div>
      )}
    </div>
  );
};

export default SinglePostToManage;
