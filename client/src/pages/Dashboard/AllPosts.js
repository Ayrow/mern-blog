import { useEffect } from 'react';
import { usePostsContext } from '../../context/posts/posts.context';
import { Link, useNavigate } from 'react-router-dom';

const AllPosts = () => {
  const { getAllPosts, posts } = usePostsContext();
  const navigate = useNavigate();

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className='m-5 w-full'>
      <div>Filter and Sort Container</div>
      <div className='flex flex-col gap-5'>
        {posts.map((item) => {
          const { title, _id } = item;
          return (
            <div key={_id} className='mt-5 border flex justify-between p-5'>
              <h3 className=' font-semibold'>{title}</h3>
              <div className='flex gap-5'>
                <button
                  onClick={() => navigate(`/posts/${_id}`)}
                  className=' bg-blue-400 hover:bg-blue-300 px-4 py-1 rounded-lg'>
                  See
                </button>
                <button className=' bg-green-400 hover:bg-green-300 px-4 py-1 rounded-lg'>
                  Edit
                </button>
                <button className=' bg-red-400 hover:bg-red-300 px-4 py-1 rounded-lg'>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllPosts;
