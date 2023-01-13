import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePostsContext } from '../context/posts/posts.context';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

const SinglePostPage = () => {
  const { getSinglePost, post } = usePostsContext();
  let { id } = useParams();

  useEffect(() => {
    getSinglePost(id);
    console.log('post', post);
  }, []);

  return (
    <div className=' bg-gray-200 m-10 p-10 rounded-lg'>
      <h2 className='text-center'>{post.title}</h2>
      <ReactQuill
        value={post.postText}
        readOnly={true}
        theme={'bubble'}
        className=''
      />
    </div>
  );
};

export default SinglePostPage;
