import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleCommentToManage = ({
  isEditing,
  itemID,
  id,
  commentBody,
  setShowConfirmationModal,
  postTitle,
  editItem,
  cancelEditItem,
  updateItem,
  postID,
}) => {
  const navigate = useNavigate();

  return (
    <div>
      {isEditing && id === itemID ? (
        <div className='mt-5 border grid grid-cols-3 p-5'>
          <p>{postTitle}</p>
          <textarea
            type='text'
            defaultValue={commentBody}
            className=' mx-2 border border-black '
          />

          <div className='flex gap-5 justify-center'>
            <button
              className=' bg-green-400 hover:bg-green-300 px-4 py-1 rounded-lg'
              onClick={() => updateItem(id)}>
              Save
            </button>
            <button
              className=' bg-red-400 hover:bg-red-300 px-4 py-1 rounded-lg'
              onClick={cancelEditItem}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className='mt-5 border grid grid-cols-3 p-5'>
          <h3 className=' font-semibold text-center'>{postTitle}</h3>
          <p className='text-lg text-center capitalize'>{commentBody}</p>
          <div className='flex gap-5 justify-center'>
            <button
              onClick={() => navigate(`/posts/${postID}`)}
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
      )}
    </div>
  );
};

export default SingleCommentToManage;
