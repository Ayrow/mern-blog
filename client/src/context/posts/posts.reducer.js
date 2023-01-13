import {
  CREATE_POST_SUCCESS,
  GET_ALL_POSTS_SUCCESS,
  GET_SINGLE_POST_SUCCESS,
} from '../actions';

const postsReducer = (state, action) => {
  switch (action.type) {
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };
    case GET_SINGLE_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
      };
    default:
      throw new Error(`There is no action: ${action.type}`);
  }
};

export default postsReducer;
