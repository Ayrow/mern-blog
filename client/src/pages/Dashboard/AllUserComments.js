import { useEffect } from 'react';
import DashboardSingleItem from '../../components/DashboardSingleItem';
import FilterSortComponent from '../../components/FilterSortComponent';
import PageBtnContainer from '../../components/PageBtnContainer';
import { usePostsContext } from '../../context/posts/posts.context';
import { useUserContext } from '../../context/user/user.context';

const AllUserComments = () => {
  const { user } = useUserContext();
  const {
    getUserComments,
    comments,
    deleteComment,
    updateComment,
    sort,
    sortOptions,
    handleChange,
    numOfPages,
    totalComments,
  } = usePostsContext();

  useEffect(() => {
    getUserComments(user._id);
  }, [sort, totalComments]);

  return (
    <div className='mx-auto container mt-5 shadow-md border-t-2 border-indigo-400 rounded-t p-10'>
      <div>
        <FilterSortComponent
          sort={sort}
          sortOptions={sortOptions}
          handleChange={handleChange}
        />
      </div>

      {totalComments > 0 ? (
        <p className='text-center text-lg font-bold m-5'>
          {totalComments === 1
            ? '1 comment has been found'
            : `${totalComments} comments have been found`}
        </p>
      ) : (
        <p className='text-center text-xl font-bold'>No comment found</p>
      )}

      <div className='grid grid-cols-3 uppercase font-bold mt-10'>
        <p className='text-center'>Post title</p>
        <p className='text-center'>Comment</p>
        <p className='text-center'>Actions</p>
      </div>
      <div className='flex flex-col gap-5'>
        {comments.map((item) => {
          const { _id, post, body, postTitle } = item;
          return (
            <DashboardSingleItem
              key={_id}
              id={_id}
              name={postTitle}
              deleteItem={deleteComment}
              updateItem={updateComment}
              body={body}
              postTitle={postTitle}
              postID={post}
              isComment={true}
            />
          );
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </div>
  );
};

export default AllUserComments;
