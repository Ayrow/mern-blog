import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/app/app.context';
import { AddPost } from '../pages/Dashboard/index';
import ConfirmationModal from './ConfirmationModal';
import SingleUserToManage from './SingleUserToManage';

const DashboardSingleItem = ({
  name,
  id,
  isPost,
  role,
  deleteItem,
  updateItem,
  shortDescription,
  postText,
}) => {
  const navigate = useNavigate();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const { editItem, isEditing, itemID, cancelEditItem } = useAppContext();
  const [username, setUsername] = useState(name);

  return (
    <div className='w-full'>
      {showConfirmationModal && (
        <ConfirmationModal
          itemID={id}
          isPost={isPost}
          setShowConfirmationModal={setShowConfirmationModal}
          deleteItem={deleteItem}
          name={name}
        />
      )}

      <SingleUserToManage
        isEditing={isEditing}
        itemID={itemID}
        id={id}
        name={name}
        setUsername={setUsername}
        role={role}
        username={username}
        cancelEditItem={cancelEditItem}
        updateItem={updateItem}
        editItem={editItem}
        setShowConfirmationModal={setShowConfirmationModal}
      />

      <div className='flex gap-5 justify-center'>
        {isPost && (
          <button
            onClick={() => navigate(`/posts/${id}`)}
            className=' bg-blue-400 hover:bg-blue-300 px-4 py-1 rounded-lg'>
            See
          </button>
        )}

        {isPost && isEditing && itemID === id && (
          <div className='w-full'>
            <AddPost
              isEditing={isEditing}
              itemID={itemID}
              oldPostTitle={name}
              oldShortDescription={shortDescription}
              oldPostText={postText}
              cancelEditItem={cancelEditItem}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardSingleItem;
