import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { usePostsContext } from '../../context/posts/posts.context';

const AddPost = ({
  isEditing,
  itemID,
  oldPostTitle,
  oldShortDescription,
  oldPostText,
  cancelEditItem,
}) => {
  const { addNewPost, updatePost } = usePostsContext();
  const [values, setValues] = useState({
    title: oldPostTitle || '',
    shortDescription: oldShortDescription || '',
  });
  const [postText, setPostText] = useState(oldPostText || '');

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSavePost = (e) => {
    const { title, shortDescription } = values;
    e.preventDefault();
    if (!title || !postText || postText === '<p><br></p>') {
      alert('One field is missing');
    } else if (isEditing) {
      updatePost({ title, postText, shortDescription, itemID });
      cancelEditItem();
    } else {
      // addNewPost({ title, postText, shortDescription });
      setValues({ title: '', shortDescription: '' });
      setPostText('');
    }
  };

  const cancelEditingForm = () => {
    if (isEditing) {
      cancelEditItem();
    } else {
      setValues({ title: '', shortDescription: '' });
      setPostText('');
    }
  };

  return (
    <div className='mx-auto container mt-5 md:w-3/4 shadow-md border-t-2 border-indigo-400 rounded-t pb-10 mb-24'>
      <div className='bg-white space-y-6'>
        <form className='pb-10 h-full ' onSubmit={handleSavePost}>
          <div className='flex flex-col items-center mt-5'>
            <div className='w-full flex flex-col gap-10 p-10'>
              <div className='grid grid-cols-2'>
                <label className='font-semibold'>Post title</label>
                <input
                  type='text'
                  className=' focus:outline-none focus:text-gray-600'
                  placeholder='Post Title'
                  name='title'
                  value={values.title}
                  onChange={handleChange}
                />
              </div>

              <div className='grid grid-cols-2'>
                <label className='font-semibold'>
                  Short Description (optional)
                </label>
                <div>
                  <textarea
                    name='shortDescription'
                    placeholder='Enter a short description'
                    className='focus:outline-none focus:text-gray-600 w-full'
                    value={values.shortDescription}
                    onChange={handleChange}
                  />
                  <p className='text-sm'>
                    {values.shortDescription.length} / 150 characters
                  </p>
                </div>
              </div>
            </div>

            <ReactQuill
              theme='snow'
              name='postText'
              className=' text-black w-full px-5 py-5'
              placeholder='Write your post'
              value={postText}
              onChange={(value) => {
                setPostText(value);
              }}
            />
          </div>

          <div className='flex justify-end pr-10 pt-5'>
            <div className='flex gap-5'>
              <button className=' bg-green-700 hover:bg-green-500 text-white px-3 py-1 rounded-lg text-lg uppercase'>
                Save
              </button>
              <button
                type='button'
                className=' bg-red-700 hover:bg-red-500 px-4 py-1 rounded-lg text-white'
                onClick={cancelEditingForm}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
