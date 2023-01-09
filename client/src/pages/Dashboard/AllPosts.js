import { useEffect } from 'react';
import { usePostsContext } from '../../context/posts/posts.context';
import DashboardSingleItem from '../../components/DashboardSingleItem';

const AllPosts = () => {
  const { getAllPosts, posts } = usePostsContext();
  const isPost = true;

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
            <DashboardSingleItem
              key={_id}
              id={_id}
              name={title}
              isPost={isPost}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllPosts;
