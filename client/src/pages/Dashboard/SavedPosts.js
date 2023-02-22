const SavedPosts = () => {
  return (
    <div className='mx-auto container mt-5 md:w-3/4 shadow-md border-t-2 border-indigo-400 rounded-t p-10'>
      <div>Filter and Sort Container</div>
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
    </div>
  );
};

export default SavedPosts;
