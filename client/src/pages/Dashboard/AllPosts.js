import { useEffect } from 'react';
import { usePostsContext } from '../../context/posts/posts.context';
import DashboardSingleItem from '../../components/DashboardSingleItem';

const AllPosts = () => {
  const { getAllPosts, posts, deletePost } = usePostsContext();
  const isPost = true;

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className='mx-auto container mt-5 md:w-3/4 shadow-md border-t-2 border-indigo-400 rounded-t p-10'>
      <div>Filter and Sort Container</div>
      <div className='flex flex-col gap-5'>
        {posts.map((item) => {
          const { title, _id } = item;
          return (
            <DashboardSingleItem
              key={_id}
              id={_id}
              name={title}
              isPost={isPost}
              deleteItem={deletePost}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllPosts;
