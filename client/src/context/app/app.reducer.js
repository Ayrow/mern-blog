import { EDIT_ITEM_BEGIN, EDIT_ITEM_CANCEL } from '../actions';

const appReducer = (state, action) => {
  switch (action.type) {
    case EDIT_ITEM_BEGIN:
      return {
        ...state,
        isEditing: true,
        editID: action.payload,
      };
    case EDIT_ITEM_CANCEL:
      return {
        ...state,
        isEditing: false,
        editID: null,
      };
    default:
      throw new Error(`There is no action: ${action.type}`);
  }
};

export default appReducer;
