import { createContext, useContext, useReducer } from 'react';

const initialPostsState = {
  posts: {},
};

const PostsContext = createContext();

const PostsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postsReducer, initialPostsState);

  return <PostsContext.Provider>{children}</PostsContext.Provider>;
};

const usePostsContext = () => {
  return useContext(PostsContext);
};

export { PostsProvider, usePostsContext };
