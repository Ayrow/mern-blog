import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/user/user.context';

const SavedPosts = () => {
  const { saveOrUnsavePost, getAllSavedPosts, userAllSavedPosts } =
    useUserContext();
  const navigate = useNavigate();

  const deleteSavedPost = (id) => {
    saveOrUnsavePost({ id, save: false });
  };

  useEffect(() => {
    getAllSavedPosts();
  }, []);

  return (
    <div className='mx-auto container mt-5 md:w-3/4 shadow-md border-t-2 border-indigo-400 rounded-t p-10'>
      <div>Filter and Sort Container</div>
      <div className='mt-10 grid grid-cols-2 uppercase font-bold'>
        <p className='text-center'>Post Title</p>
        <p className='text-center'>Actions</p>
      </div>
      <div className='flex flex-col gap-5'>
        {userAllSavedPosts.map((item) => {
          const { title, _id } = item;
          return (
            <div className='mt-5 border grid grid-cols-2 items-center px-10 py-5'>
              <h3 className=' font-semibold text-center'>{title}</h3>
              <div className='flex gap-5 justify-center'>
                <button
                  onClick={() => navigate(`/posts/${_id}`)}
                  className=' bg-blue-400 hover:bg-blue-300 px-4 py-1 rounded-lg'>
                  See
                </button>
                <button
                  className=' bg-red-400 hover:bg-red-300 px-4 py-1 rounded-lg'
                  onClick={() => deleteSavedPost(_id)}>
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

export default SavedPosts;
