import { useEffect } from 'react';
import { usePostsContext } from '../../context/posts/posts.context';
import { useUserContext } from '../../context/user/user.context';

const AllUserComments = () => {
  const { user } = useUserContext();
  const { getUserComments } = usePostsContext();

  useEffect(() => {
    getUserComments(user._id);
  }, []);

  return <div>AllUserComments</div>;
};

export default AllUserComments;
