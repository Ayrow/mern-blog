import { createContext, useContext, useReducer } from 'react';
import postsReducer from './posts.reducer';
import { authFetch } from '../user/user.context';
import { CREATE_POST_SUCCESS, GET_ALL_POSTS_SUCCESS } from '../actions';

const initialPostsState = {
  posts: [],
  isEditing: false,
  editID: null,
};

const PostsContext = createContext();

const PostsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postsReducer, initialPostsState);

  const addNewPost = async ({ title, postText, shortDescription }) => {
    try {
      const { data } = await authFetch.post('/posts/admin', {
        title,
        postText,
        shortDescription,
      });
      dispatch({ type: CREATE_POST_SUCCESS, payload: data });
    } catch (error) {
      console.log('error', error);
    }
  };

  const getAllPosts = async () => {
    try {
      const { data } = await authFetch.get('/posts');
      dispatch({ type: GET_ALL_POSTS_SUCCESS, payload: data });
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <PostsContext.Provider value={{ ...state, addNewPost, getAllPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

const usePostsContext = () => {
  return useContext(PostsContext);
};

export { PostsProvider, usePostsContext };
