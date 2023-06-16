import { createContext, useContext, useReducer } from 'react';
import postsReducer from './posts.reducer';
import axios from 'axios';

import {
  CHANGE_PAGE,
  CREATE_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  GET_ALL_POSTS_SUCCESS,
  GET_COMMENTS_SUCCESS,
  GET_POST_COMMENTS_SUCCESS,
  GET_SINGLE_POST_SUCCESS,
  HANDLE_CHANGE,
  TOGGLE_SAVE_BUTTON,
} from '../actions';
import { useUserContext } from '../user/user.context';

const PostsContext = createContext();

const initialPostsState = {
  posts: [],
  isEditing: false,
  editID: null,
  singlePost: {},
  comments: [],
  isPostSaved: false,

  search: '',
  page: 1,
  numOfPages: 1,
  sort: 'latest',
  totalPosts: 0,
  totalComments: 0,
  sortOptions: ['latest', 'oldest', 'a-z'],
  limit: 10,
};

const PostsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postsReducer, initialPostsState);
  const { token, user, savedPosts } = useUserContext();

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

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
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
    const { page, search, sort, limit } = state;
    let url = `/posts?page=${page}&sort=${sort}&limit=${limit}`;

    if (search) {
      url = url + `&search=${search}`;
    }

    try {
      const { data } = await authFetch.get(url);
      const { everyPosts, numOfPages, totalPosts } = data;
      dispatch({
        type: GET_ALL_POSTS_SUCCESS,
        payload: { everyPosts, numOfPages, totalPosts },
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  const checkIfPostIsSaved = (id) => {
    if (user) {
      savedPosts.includes(id)
        ? dispatch({ type: TOGGLE_SAVE_BUTTON, payload: true })
        : dispatch({ type: TOGGLE_SAVE_BUTTON, payload: false });
    } else {
      dispatch({ type: TOGGLE_SAVE_BUTTON, payload: false });
    }
  };

  const getSinglePost = async (id) => {
    try {
      checkIfPostIsSaved(id);
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
      getPostComments(postID);
    } catch (error) {
      console.log('error', error);
    }
  };

  const getPostComments = async (id) => {
    try {
      const { data } = await authFetch.get(`comments/post/${id}`);
      console.log('data', data);
      dispatch({ type: GET_POST_COMMENTS_SUCCESS, payload: data });
    } catch (error) {
      console.log('error', error);
    }
  };

  const getAllComments = async () => {
    const { page, sort, limit } = state;
    let url = `comments?page=${page}&sort=${sort}&limit=${limit}`;

    try {
      const { data } = await authFetch.get(url);
      const { allComments, numOfPages, totalComments } = data;
      dispatch({
        type: GET_COMMENTS_SUCCESS,
        payload: { allComments, numOfPages, totalComments },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getUserComments = async (id) => {
    const { page, sort, limit } = state;
    let url = `comments/user/${id}?page=${page}&sort=${sort}&limit=${limit}`;
    try {
      const { data } = await authFetch.get(url);
      const { allComments, numOfPages, totalComments } = data;
      dispatch({
        type: GET_COMMENTS_SUCCESS,
        payload: { allComments, numOfPages, totalComments },
      });
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

  const changePage = (page) => {
    dispatch({ type: CHANGE_PAGE, payload: page });
  };

  return (
    <PostsContext.Provider
      value={{
        ...state,
        handleChange,
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
        changePage,
      }}>
      {children}
    </PostsContext.Provider>
  );
};

const usePostsContext = () => {
  return useContext(PostsContext);
};

export { PostsProvider, usePostsContext };
