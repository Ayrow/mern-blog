import { createContext, useContext, useReducer } from 'react';
import postsReducer from './posts.reducer';
import axios from 'axios';

import {
  CLEAR_SAVED_POSTS,
  CREATE_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  GET_ALL_POSTS_SUCCESS,
  GET_COMMENTS_SUCCESS,
  GET_SINGLE_POST_SUCCESS,
  SAVE_POST_SUCCESS,
} from '../actions';
import { useUserContext } from '../user/user.context';

const PostsContext = createContext();

const savedPosts = localStorage.getItem('savedPosts');

const initialPostsState = {
  posts: [],
  isEditing: false,
  editID: null,
  singlePost: {},
  comments: [],
  savedPosts: savedPosts,
};

const PostsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postsReducer, initialPostsState);
  const { token, user } = useUserContext();

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

  const addSavedPostsToLocalStorage = (savedPosts) => {
    user
      ? localStorage.setItem('savedPosts', savedPosts)
      : localStorage.setItem('savedPosts', []);
  };

  const removeSavedPostsFromLocalStorage = () => {
    localStorage.removeItem('savedPosts');
  };

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

  const checkIfPostSaved = (id) => {
    const isSaved = state.savedPosts.includes(id);
    if (isSaved) {
      {
        /*
    
      dispatch({
        type: TOGGLE_SAVE_BUTTON,
        payload: { color: 'text-red-700', text: 'Unsave' },
      });
    } else {
      dispatch({
        type: TOGGLE_SAVE_BUTTON,
        payload: { color: '', text: 'Save' },
      });
    
    */
      }
    }
  };

  const getSinglePost = async (id) => {
    try {
      const { data } = await authFetch.get(`/posts/${id}`);

      dispatch({
        type: GET_SINGLE_POST_SUCCESS,
        payload: data.post,
      });
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
      await authFetch.post('/comments/user', {
        postID,
        commentMessage,
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  const getPostComments = async (id) => {
    try {
      const { data } = await authFetch.get(`comments/post/${id}`);
      dispatch({ type: GET_COMMENTS_SUCCESS, payload: data });
    } catch (error) {
      console.log('error', error);
    }
  };

  const getAllComments = async () => {
    try {
      const { data } = await authFetch.get('comments');
      console.log(data);
      dispatch({ type: GET_COMMENTS_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const getUserComments = async (id) => {
    try {
      const { data } = await authFetch.get(`comments/user/${id}`);
      dispatch({ type: GET_COMMENTS_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const updateComment = async ({ id, commentText }) => {
    try {
      const { data } = await authFetch.patch(`comments/${id}`, {
        commentText,
      });
      dispatch({ type: GET_COMMENTS_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async (id) => {
    try {
      const { data } = await authFetch.delete(`comments/${id}`);
      dispatch({ type: GET_COMMENTS_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const savePost = async (id) => {
    try {
      const { data } = await authFetch.post('posts/userPosts/saved', { id });
      const { userSavedPosts } = data;
      dispatch({ type: SAVE_POST_SUCCESS, payload: userSavedPosts });
      addSavedPostsToLocalStorage(userSavedPosts);
    } catch (error) {
      console.log('error', error);
    }
  };

  const clearSavedPosts = () => {
    dispatch({ type: CLEAR_SAVED_POSTS });
    removeSavedPostsFromLocalStorage();
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
        updateComment,
        deleteComment,
        getAllComments,
        savePost,
        addSavedPostsToLocalStorage,
        clearSavedPosts,
      }}>
      {children}
    </PostsContext.Provider>
  );
};

const usePostsContext = () => {
  return useContext(PostsContext);
};

export { PostsProvider, usePostsContext };
