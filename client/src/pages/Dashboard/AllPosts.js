import { useEffect } from 'react';
import { usePostsContext } from '../../context/posts/posts.context';

const AllPosts = () => {
  const { getAllPosts } = usePostsContext();

  useEffect(() => {
    getAllPosts();
  }, []);

  return <div>AllPosts</div>;
};

export default AllPosts;
