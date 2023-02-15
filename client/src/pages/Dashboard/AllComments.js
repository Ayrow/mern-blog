import React, { useEffect } from 'react';
import { usePostsContext } from '../../context/posts/posts.context';

const AllComments = () => {
  const { getAllComments, comments } = usePostsContext();

  useEffect(() => {
    getAllComments();
  }, []);

  return (
    <div>
      {comments.map((comment) => {
        const { body } = comment;
        return <div>{body}</div>;
      })}
    </div>
  );
};

export default AllComments;
