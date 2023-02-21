import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { usePostsContext } from '../context/posts/posts.context';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { useUserContext } from '../context/user/user.context';
import CommentForm from '../components/CommentForm';

const SinglePostPage = () => {
  const {
    getSinglePost,
    singlePost,
    getPostComments,
    comments,
    savedPosts,
    savePost,
  } = usePostsContext();
  const navigate = useNavigate();
  const { user } = useUserContext();
  let { id } = useParams();
  const [showCommmentForm, setShowCommentForm] = useState(false);

  useEffect(() => {
    getSinglePost(id);
    getPostComments(id);
  }, [comments]);

  return (
    <div className=''>
      <div className=' bg-gray-200 m-10 p-10 rounded-lg relative'>
        {user ? (
          savedPosts.includes(id) ? (
            <button
              type='button'
              className=' bg-red-500 hover:bg-red-300 text-white px-3 py-1 rounded-lg float-right'
              onClick={() => savePost(id)}>
              Unsave
            </button>
          ) : (
            <button
              type='button'
              className=' bg-red-500 hover:bg-red-300 text-white px-3 py-1 rounded-lg float-right'
              onClick={() => savePost(id)}>
              Save
            </button>
          )
        ) : (
          <button
            type='button'
            className=' bg-red-500 hover:bg-red-300 text-white px-3 py-1 rounded-lg float-right'>
            Create an account to save the post
          </button>
        )}

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

      <div className=' bg-slate-800 text-white p-10 flex flex-col gap-12 w-full'>
        <h3 className='text-center text-xl'>Comment Section</h3>

        {!user ? (
          <div>
            You need an account to post a comment :{' '}
            <span
              className=' cursor-pointer italic'
              onClick={() => navigate('/login')}>
              Login / Register
            </span>
          </div>
        ) : (
          <div>
            <button
              type='button'
              className='border px-2 py-1 rounded-lg hover:bg-slate-500'
              onClick={() => setShowCommentForm(!showCommmentForm)}>
              {showCommmentForm ? 'Cancel' : 'Add comment'}
            </button>
            {showCommmentForm && (
              <CommentForm
                setShowCommentForm={setShowCommentForm}
                postID={id}
              />
            )}
          </div>
        )}

        {comments.length === 0 ? (
          <p className=' text-lg font-semibold'>
            No comments to display for now
          </p>
        ) : (
          <div className='flex flex-col gap-5'>
            {comments.map((comment, index) => {
              const { createdByUsername, body } = comment;
              return (
                <div
                  key={index}
                  className='border border-white rounded-lg p-2 shadow-sm shadow-slate-500'>
                  <h3 className='text-lg font-bold capitalize'>
                    {createdByUsername}
                  </h3>
                  <p className='py-5'>{body}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SinglePostPage;
