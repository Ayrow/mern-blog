import {
  CREATE_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  GET_ALL_POSTS_SUCCESS,
  GET_COMMENTS_SUCCESS,
  GET_POST_COMMENTS_SUCCESS,
  GET_SINGLE_POST_SUCCESS,
  HANDLE_CHANGE,
  TOGGLE_SAVE_BUTTON,
} from '../actions';

const postsReducer = (state, action) => {
  switch (action.type) {
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case HANDLE_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload.everyPosts,
        numOfPages: action.payload.numOfPages,
        totalPosts: action.payload.totalPosts,
      };
    case GET_SINGLE_POST_SUCCESS:
      return {
        ...state,
        singlePost: action.payload,
      };
    case DELETE_POST_SUCCESS:
      let newPostList = state.posts.filter(
        (item) => item._id !== action.payload
      );
      return {
        ...state,
        posts: newPostList,
      };
    case GET_POST_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload.allComments,
        numOfPages: action.payload.numOfPages,
        totalComments: action.payload.totalComments,
      };
    case TOGGLE_SAVE_BUTTON: {
      return {
        ...state,
        isPostSaved: action.payload,
      };
    }
    default:
      throw new Error(`There is no action: ${action.type}`);
  }
};

export default postsReducer;
