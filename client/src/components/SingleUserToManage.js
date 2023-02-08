import React, { useState } from 'react';
import { useUserContext } from '../context/user/user.context';

const SingleUserToManage = ({
  isEditing,
  itemID,
  id,
  name,
  setUsername,
  role,
  username,
  cancelEditItem,
  updateItem,
  editItem,
  setShowConfirmationModal,
}) => {
  const { userRoles } = useUserContext();
  const [roleValue, setRoleValue] = useState(role);

  return (
    <div>
      {isEditing && id === itemID ? (
        <div className='mt-5 border grid grid-cols-3 p-5'>
          <input
            type='text'
            defaultValue={name}
            onChange={(e) => setUsername(e.target.value)}
            className=' mx-2 border border-black '
          />

          <select
            name='role'
            defaultValue={role}
            onChange={(e) => setRoleValue(e.target.value)}
            className='block w-52 py-2 px-3 rounded-md capitalize
                shadow-sm focus:outline-none focus:ring-primary-500
                focus:border-primary-500 border bg-white border-black text-black'>
            {userRoles.map((item, index) => {
              return (
                <option key={index} value={item} className=''>
                  {item}
                </option>
              );
            })}
          </select>

          <div className='flex gap-5 justify-center'>
            <button
              className=' bg-green-400 hover:bg-green-300 px-4 py-1 rounded-lg'
              onClick={() => updateItem({ id, roleValue, username })}>
              Save
            </button>
            <button
              className=' bg-red-400 hover:bg-red-300 px-4 py-1 rounded-lg'
              onClick={cancelEditItem}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className='mt-5 border grid grid-cols-3 p-5'>
          <h3 className=' font-semibold text-center'>{name}</h3>
          <p className='text-lg text-center capitalize'>{role}</p>
          <div className='flex gap-5 justify-center'>
            <button
              className=' bg-green-400 hover:bg-green-300 px-4 py-1 rounded-lg'
              onClick={() => editItem(id)}>
              Edit
            </button>
            <button
              className=' bg-red-400 hover:bg-red-300 px-4 py-1 rounded-lg'
              onClick={() => setShowConfirmationModal(true)}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleUserToManage;
