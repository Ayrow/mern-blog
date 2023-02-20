import React, { useEffect } from 'react';
import DashboardSingleItem from '../../components/DashboardSingleItem';
import { usePostsContext } from '../../context/posts/posts.context';

const AllComments = () => {
  const { getAllComments, comments, deleteComment, updateComment } =
    usePostsContext();

  useEffect(() => {
    getAllComments();
  }, []);

  return (
    <div className='mx-auto container mt-5 shadow-md border-t-2 border-indigo-400 rounded-t p-10'>
      <div>Filter and Sort Container</div>
      <div className='grid grid-cols-4 uppercase font-bold mt-10'>
        <p className='text-center'>Post title</p>
        <p className='text-center'>User</p>
        <p className='text-center'>Comment</p>
        <p className='text-center'>Actions</p>
      </div>
      <div className='flex flex-col gap-5'>
        {comments.map((item) => {
          const { _id, post, body, postTitle, createdByUsername } = item;
          return (
            <DashboardSingleItem
              key={_id}
              id={_id}
              name={postTitle}
              deleteItem={deleteComment}
              updateItem={updateComment}
              body={body}
              postTitle={postTitle}
              postID={post}
              isComment={true}
              createdByUsername={createdByUsername}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllComments;
