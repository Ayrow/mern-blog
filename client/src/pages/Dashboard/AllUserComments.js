import { useEffect } from 'react';
import { usePostsContext } from '../../context/posts/posts.context';
import { useUserContext } from '../../context/user/user.context';

const AllUserComments = () => {
  const { user } = useUserContext();
  const { getUserComments, comments } = usePostsContext();

  useEffect(() => {
    getUserComments(user._id);
  }, []);

  return (
    <div>
      {comments.map((comment) => {
        return <div>{comment.body}</div>;
      })}
    </div>
  );
};

export default AllUserComments;
