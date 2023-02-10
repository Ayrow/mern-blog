import { createContext, useContext, useReducer } from 'react';
import postsReducer from './posts.reducer';
import axios from 'axios';

import {
  CREATE_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  GET_ALL_POSTS_SUCCESS,
  GET_COMMENTS_POST_SUCCESS,
  GET_SINGLE_POST_SUCCESS,
} from '../actions';
import { useUserContext } from '../user/user.context';

const initialPostsState = {
  posts: [],
  isEditing: false,
  editID: null,
  singlePost: {},
  comments: [],
};

const PostsContext = createContext();

const PostsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postsReducer, initialPostsState);
  const { token } = useUserContext();

  const authFetch = axios.create({
    baseURL: '/api/v1',
  });

  authFetch.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        console.log('error', error);
      }
      return Promise.reject(error);
    }
  );

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

  const getSinglePost = async (id) => {
    try {
      const { data } = await authFetch.get(`/posts/${id}`);
      dispatch({ type: GET_SINGLE_POST_SUCCESS, payload: data.post });
    } catch (error) {
      console.log('error', error);
    }
  };

  const deletePost = async (id) => {
    try {
      await authFetch.delete(`/posts/admin/post/${id}`);
      dispatch({ type: DELETE_POST_SUCCESS, payload: id });
    } catch (error) {
      console.log('error', error);
    }
  };

  const updatePost = async ({ title, postText, shortDescription, itemID }) => {
    try {
      await authFetch.patch(`/posts/admin/post/${itemID}`, {
        title,
        postText,
        shortDescription,
      });
      getAllPosts();
    } catch (error) {
      console.log('error', error);
    }
  };

  const addComment = async ({ postID, commentMessage }) => {
    try {
      const { data } = await authFetch.post('/comments/user', {
        postID,
        commentMessage,
      });
      console.log(data);
    } catch (error) {
      console.log('error', error);
    }
  };

  const getPostComments = async (id) => {
    try {
      const { data } = await authFetch.get(`comments/post/${id}`);
      dispatch({ type: GET_COMMENTS_POST_SUCCESS, payload: data });
    } catch (error) {
      console.log('error', error);
    }
  };

  const getUserComments = async () => {
    try {
    } catch (error) {}
  };

  return (
    <PostsContext.Provider
      value={{
        ...state,
        addNewPost,
        getAllPosts,
        getSinglePost,
        deletePost,
        updatePost,
        addComment,
        getPostComments,
        getUserComments,
      }}>
      {children}
    </PostsContext.Provider>
  );
};

const usePostsContext = () => {
  return useContext(PostsContext);
};

export { PostsProvider, usePostsContext };
