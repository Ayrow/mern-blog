import { createContext, useContext, useReducer } from 'react';
import postsReducer from './posts.reducer';
import { authFetch } from '../user/user.context';
import { CREATE_POST_SUCCESS } from '../actions';

const initialPostsState = {
  posts: [],
  isEditing: false,
  editID: null,
};

const PostsContext = createContext();

const PostsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postsReducer, initialPostsState);

  const addNewPost = async ({ title, postText }) => {
    try {
      const { data } = await authFetch.post('/posts/admin', {
        title,
        postText,
      });
      dispatch({ type: CREATE_POST_SUCCESS, payload: data });
    } catch (error) {
      console.log('error', error);
    }
    console.log('state.posts', state.posts);
  };

  return (
    <PostsContext.Provider value={{ ...state, addNewPost }}>
      {children}
    </PostsContext.Provider>
  );
};

const usePostsContext = () => {
  return useContext(PostsContext);
};

export { PostsProvider, usePostsContext };
