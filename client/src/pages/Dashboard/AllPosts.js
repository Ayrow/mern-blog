import { useEffect } from 'react';
import { usePostsContext } from '../../context/posts/posts.context';
import DashboardSingleItem from '../../components/DashboardSingleItem';
import FilterSortComponent from '../../components/FilterSortComponent';
import PageBtnContainer from '../../components/PageBtnContainer';

const AllPosts = () => {
  const {
    getAllPosts,
    posts,
    deletePost,
    numOfPages,
    totalPosts,
    sort,
    sortOptions,
    handleChange,
    search,
  } = usePostsContext();

  useEffect(() => {
    getAllPosts();
  }, [sort, search]);

  return (
    <div className='mx-auto container mt-5 md:w-3/4 shadow-md border-t-2 border-indigo-400 rounded-t p-10'>
      <div>
        <FilterSortComponent
          sort={sort}
          sortOptions={sortOptions}
          handleChange={handleChange}
        />
      </div>
      {totalPosts > 0 ? (
        <p className='text-center text-xl font-bold m-5'>
          {totalPosts === 1
            ? '1 trip has been found'
            : `${totalPosts} trips have been found`}
        </p>
      ) : (
        <p className='text-center text-xl font-bold'>No trip found</p>
      )}

      <div className='mt-10 grid grid-cols-2 uppercase font-bold'>
        <p className='text-center'>Post Title</p>
        <p className='text-center'>Actions</p>
      </div>
      <div className='flex flex-col gap-5'>
        {posts.map((item) => {
          const { title, _id, shortDescription, postText } = item;
          return (
            <DashboardSingleItem
              key={_id}
              id={_id}
              name={title}
              isPost={true}
              deleteItem={deletePost}
              shortDescription={shortDescription}
              body={postText}
            />
          );
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </div>
  );
};

export default AllPosts;
