import {
  SETUP_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  FETCH_ALL_USERS_SUCCESS,
  SAVE_POST_SUCCESS,
  GET_ALL_SAVED_POSTS_SUCCESS,
  HANDLE_CHANGE,
} from '../actions';

const userReducer = (state, action) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
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
        users: action.payload.allUsers,
        totalUsers: action.payload.totalUsers,
        numOfPages: action.payload.numOfPages,
      };
    case SAVE_POST_SUCCESS:
      return {
        ...state,
        user: action.payload,
        savedPosts: action.payload.savedPosts,
      };
    case GET_ALL_SAVED_POSTS_SUCCESS:
      return {
        ...state,
        savedPosts: action.payload.savedPostsID,
        userAllSavedPosts: action.payload.posts,
      };

    default:
      throw new Error(`There is no action: ${action.type}`);
  }
};

export default userReducer;
