import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/app/app.context';
import { useUserContext } from '../context/user/user.context';
import { AddPost } from '../pages/Dashboard/index';
import ConfirmationModal from './ConfirmationModal';

const DashboardSingleItem = ({
  name,
  id,
  isPost,
  role,
  deleteItem,
  updateItem,
  shortDescription,
  postText,
}) => {
  const navigate = useNavigate();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const { editItem, isEditing, itemID, cancelEditItem } = useAppContext();
  const { userRoles, user, updateUser } = useUserContext();
  const [roleValue, setRoleValue] = useState('');

  return (
    <div className='w-full'>
      {showConfirmationModal && (
        <ConfirmationModal
          itemID={id}
          isPost={isPost}
          setShowConfirmationModal={setShowConfirmationModal}
          deleteItem={deleteItem}
          name={name}
        />
      )}
      <div className='mt-5 border grid grid-cols-3 p-5'>
        <h3 className=' font-semibold text-center'>{name}</h3>
        {isEditing && !isPost && itemID === id ? (
          <select
            name='role'
            value={role}
            onChange={(e) => setRoleValue(e.target.value)}
            className='block w-52 py-2 px-3 rounded-md capitalize
                shadow-sm focus:outline-none focus:ring-primary-500
                focus:border-primary-500 border bg-white border-black text-black'>
            {userRoles.map((item, index) => {
              return (
                <option key={index} value={item} className=''>
                  {item}
                </option>
              );
            })}
          </select>
        ) : (
          <p className='text-lg text-center capitalize'>{role}</p>
        )}

        <div className='flex gap-5 justify-center'>
          {isPost && (
            <button
              onClick={() => navigate(`/posts/${id}`)}
              className=' bg-blue-400 hover:bg-blue-300 px-4 py-1 rounded-lg'>
              See
            </button>
          )}

          {isEditing && id === itemID && !isPost ? (
            <div className='flex gap-5 justify-center'>
              <button className=' bg-green-400 hover:bg-green-300 px-4 py-1 rounded-lg'>
                Save
              </button>
              <button
                className=' bg-red-400 hover:bg-red-300 px-4 py-1 rounded-lg'
                onClick={cancelEditItem}>
                Cancel
              </button>
            </div>
          ) : (
            <div className='flex gap-5 justify-center'>
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
          )}
        </div>
      </div>
      {isPost && isEditing && itemID === id && (
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

export default DashboardSingleItem;
