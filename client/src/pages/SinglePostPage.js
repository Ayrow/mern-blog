import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePostsContext } from '../context/posts/posts.context';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

const SinglePostPage = () => {
  const { getSinglePost, singlePost } = usePostsContext();
  let { id } = useParams();

  useEffect(() => {
    getSinglePost(id);
  }, []);

  return (
    <div className=''>
      <div className=' bg-gray-200 m-10 p-10 rounded-lg relative'>
        <button
          type='button'
          className=' bg-red-500 hover:bg-red-300 text-white px-3 py-1 rounded-lg float-right'>
          Save
        </button>
        <div>
          <h2 className='text-center text-2xl'>{singlePost.title}</h2>
        </div>

        <ReactQuill
          value={singlePost.postText}
          readOnly={true}
          theme={'bubble'}
          className='mt-5'
        />
      </div>

      <div className=' bg-slate-800 text-white p-10 flex flex-col gap-12'>
        <h3 className='text-center text-xl'>Comment Section</h3>
        <div>
          <button
            type='button'
            className='border px-2 py-1 rounded-lg hover:bg-slate-500'>
            Add comment
          </button>
        </div>

        <div>
          <p>All comments</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
