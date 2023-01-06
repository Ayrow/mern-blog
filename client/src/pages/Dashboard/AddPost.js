import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddPost = () => {
  const [values, setValues] = useState({ title: '', postText: '' });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSavePost = () => {};

  return (
    <div className='h-full mx-auto container mt-5 md:w-3/4 shadow-md border-t-2 border-indigo-400 rounded-t pb-10'>
      <div className='bg-white space-y-6 '>
        <form>
          <div className='flex flex-col items-center mt-5'>
            <input
              type='text'
              className=' focus:outline-none focus:text-gray-600 ml-4'
              placeholder='Post Title'
              onChange={handleChange}
              name='title'
              value={values.title}
            />

            <ReactQuill
              theme='snow'
              name='postText'
              // value={travelDetail}
              className=' text-black w-full px-5 py-5'
              placeholder='Write your post'
              onChange={handleChange}
              value={values.postText}
            />
          </div>

          <div className='flex justify-end pr-10 pt-5'>
            <button className=' bg-green-700 text-white px-3 py-1 rounded-lg text-lg uppercase'>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
