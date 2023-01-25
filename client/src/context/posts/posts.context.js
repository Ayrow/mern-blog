import { createContext, useContext, useReducer } from 'react';
import postsReducer from './posts.reducer';

import {
  CREATE_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  GET_ALL_POSTS_SUCCESS,
  GET_SINGLE_POST_SUCCESS,
} from '../actions';
import axios from 'axios';
import { useUserContext } from '../user/user.context';

const initialPostsState = {
  posts: [],
  isEditing: false,
  editID: null,
  singlePost: {},
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
      console.log('initialUserState.token', token);
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
      await authFetch.delete(`/posts/admin/${id}`);
      dispatch({ type: DELETE_POST_SUCCESS, payload: id });
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <PostsContext.Provider
      value={{ ...state, addNewPost, getAllPosts, getSinglePost, deletePost }}>
      {children}
    </PostsContext.Provider>
  );
};

const usePostsContext = () => {
  return useContext(PostsContext);
};

export { PostsProvider, usePostsContext };
