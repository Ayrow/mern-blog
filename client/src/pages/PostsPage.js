import { useEffect } from 'react';
import { usePostsContext } from '../context/posts/posts.context';

const PostsPage = () => {
  const { getAllPosts, posts } = usePostsContext();

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div>
      <div>
        <h2 className='text-2xl font-bold text-center mt-5  '>
          Discover all posts!
        </h2>
      </div>
      <div className='grid grid-cols-1 px-5 py-10'>
        {posts.map((post) => {
          const { title, shortDescription } = post;
          return (
            <div className='border p-5 rounded-lg shadow-md border-gray-400 bg-slate-50'>
              <h3 className='text-center text-xl font-semibold'>{title}</h3>
              <p className='pt-3'>{shortDescription}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostsPage;
