import React from 'react';

const SingleCommentToManage = ({
  isEditing,
  itemID,
  name,
  id,
  commentBody,
  setShowConfirmationModal,
  postTitle,
}) => {
  return (
    <div>
      {isEditing && id === itemID ? (
        <div className='mt-5 border grid grid-cols-3 p-5'>
          <p>{postTitle}</p>
          <input
            type='text'
            defaultValue={postTitle}
            className=' mx-2 border border-black '
          />

          <div className='flex gap-5 justify-center'>
            <button className=' bg-green-400 hover:bg-green-300 px-4 py-1 rounded-lg'>
              Save
            </button>
            <button className=' bg-red-400 hover:bg-red-300 px-4 py-1 rounded-lg'>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className='mt-5 border grid grid-cols-3 p-5'>
          <h3 className=' font-semibold text-center'>{postTitle}</h3>
          <p className='text-lg text-center capitalize'>{commentBody}</p>
          <div className='flex gap-5 justify-center'>
            <button className=' bg-green-400 hover:bg-green-300 px-4 py-1 rounded-lg'>
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
