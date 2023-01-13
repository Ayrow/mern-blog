import { useEffect } from 'react';
import { usePostsContext } from '../context/posts/posts.context';
import { Link } from 'react-router-dom';

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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 py-10 gap-2'>
        {posts.map((post) => {
          const { title, shortDescription, _id } = post;
          return (
            <div
              key={_id}
              className='border p-5 rounded-lg shadow-md border-gray-400 bg-slate-50 flex flex-col items-center'>
              <h3 className='text-xl font-semibold'>{title}</h3>
              <p className='pt-3'>{shortDescription}</p>
              <Link
                to={`/posts/${_id}`}
                className='flex justify-center mt-5 border p-2 bg-blue-900 text-white hover:bg-blue-800 w-1/3 rounded-md'>
                Read more
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostsPage;
