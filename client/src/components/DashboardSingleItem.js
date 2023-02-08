import { useState } from 'react';
import { useAppContext } from '../context/app/app.context';

import ConfirmationModal from './ConfirmationModal';
import SinglePostToManage from './SinglePostToManage';
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

      {isPost ? (
        <SinglePostToManage
          isEditing={isEditing}
          itemID={itemID}
          id={id}
          name={name}
          shortDescription={shortDescription}
          postText={postText}
          cancelEditItem={cancelEditItem}
          editItem={editItem}
          setShowConfirmationModal={setShowConfirmationModal}
        />
      ) : (
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
      )}
    </div>
  );
};

export default DashboardSingleItem;
