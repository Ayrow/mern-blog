import React, { useState } from 'react';
import { usePostsContext } from '../context/posts/posts.context';

const CommentForm = ({ postID }) => {
  const { addComment } = usePostsContext();
  const [commentMessage, setCommentMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment({ commentMessage, postID });
    setCommentMessage('');
  };

  return (
    <form className='mt-5' onSubmit={handleSubmit}>
      <div className='w-full mb-4 border border-gray-200 rounded-lg bg-gray-50'>
        <div className='px-4 py-2 bg-white rounded-t-lg '>
          <label htmlFor='comment' className='sr-only'>
            Your comment
          </label>
          <textarea
            id='comment'
            rows='4'
            className='w-full px-0 text-sm text-gray-900 bg-white border-0 dfocus:ring-0 '
            placeholder='Write a comment...'
            onChange={(e) => setCommentMessage(e.target.value)}
            required></textarea>
        </div>
        <div className='flex items-center justify-between px-3 py-2 border-t'>
          <button
            type='submit'
            className='inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800'>
            Post comment
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
