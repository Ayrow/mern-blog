import {
  SETUP_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  FETCH_ALL_USERS_SUCCESS,
  SAVE_POST_SUCCESS,
} from '../actions';

const userReducer = (state, action) => {
  switch (action.type) {
    case SETUP_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        savedPosts: action.payload.user.savedPosts,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        user: null,
        token: null,
      };
    case FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case SAVE_POST_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };

    default:
      throw new Error(`There is no action: ${action.type}`);
  }
};

export default userReducer;
