import React, { useState } from 'react';
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
  createdByUsername,
}) => {
  const navigate = useNavigate();

  const [commentText, setCommentText] = useState(commentBody);

  const handleSaveComment = () => {
    if (!commentText) {
      cancelEditItem();
      setCommentText(commentBody);
    } else {
      updateItem({ id, commentText });
      setCommentText(commentBody);
      cancelEditItem();
    }
  };

  return (
    <div>
      {isEditing && id === itemID ? (
        <div className='mt-5 border grid grid-cols-4 p-5'>
          <p>{postTitle}</p>
          <p>{createdByUsername}</p>
          <textarea
            type='text'
            defaultValue={commentBody}
            onChange={(e) => setCommentText(e.target.value)}
            className=' mx-2 border border-black text-center '
          />

          <div className='flex gap-5 justify-center'>
            <button
              className=' bg-green-400 hover:bg-green-300 px-4 py-1 rounded-lg'
              onClick={handleSaveComment}>
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
        <div className='mt-5 border grid grid-cols-4 p-5'>
          <h3 className=' font-semibold text-center'>{postTitle}</h3>
          <p className='text-center'>{createdByUsername}</p>
          <p className='text-lg text-center'>{commentBody}</p>
          <div className='flex gap-2 justify-center'>
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
