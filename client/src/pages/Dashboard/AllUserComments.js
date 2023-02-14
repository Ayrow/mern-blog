import { useEffect } from 'react';
import DashboardSingleItem from '../../components/DashboardSingleItem';
import { usePostsContext } from '../../context/posts/posts.context';
import { useUserContext } from '../../context/user/user.context';

const AllUserComments = () => {
  const { user } = useUserContext();
  const { getUserComments, comments } = usePostsContext();

  useEffect(() => {
    getUserComments(user._id);
  }, []);

  return (
    <div className='mx-auto container mt-5 md:w-3/4 shadow-md border-t-2 border-indigo-400 rounded-t p-10'>
      <div>Filter and Sort Container</div>
      <div className='flex flex-col gap-5'>
        {comments.map((item) => {
          const { _id, post, body, postTitle } = item;
          return (
            <DashboardSingleItem
              key={_id}
              id={_id}
              name={post}
              // deleteItem={deletePost}
              body={body}
              postTitle={postTitle}
              isComment={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllUserComments;
