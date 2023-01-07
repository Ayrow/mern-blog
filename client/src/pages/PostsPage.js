import { useEffect } from 'react';
import { usePostsContext } from '../context/posts/posts.context';

const PostsPage = () => {
  const { getAllPosts } = usePostsContext();

  useEffect(() => {
    getAllPosts();
  }, []);
  return <div>PostsPage</div>;
};

export default PostsPage;
