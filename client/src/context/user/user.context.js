import { createContext, useContext, useReducer } from 'react';
import userReducer from './user.reducer';
import {
  SETUP_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  FETCH_ALL_USERS_SUCCESS,
  SAVE_POST_SUCCESS,
  GET_ALL_SAVED_POSTS_SUCCESS,
  HANDLE_CHANGE,
} from '../actions';
import axios from 'axios';
import { useAppContext } from '../app/app.context';

const UserContext = createContext();

const user = localStorage.getItem('user');
const token = localStorage.getItem('token');
const savedPosts = localStorage.getItem('savedPosts');

export const initialUserState = {
  user: user ? JSON.parse(user) : null,
  token: token,
  users: [],
  userRoles: ['admin', 'follower'],
  savedPosts: savedPosts || [],
  userAllSavedPosts: [],
  search: '',
  page: 1,
  numOfPages: 1,
  sort: 'latest',
  totalUsers: 0,
  sortOptions: ['latest', 'oldest', 'a-z'],
  limit: 10,
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);
  const { cancelEditItem } = useAppContext();

  const authFetch = axios.create({
    baseURL: '/api/v1',
  });

  authFetch.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${state.token}`;
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

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const addSavedPostToLocalStorage = (savedPosts) => {
    localStorage.setItem('savedPosts', savedPosts);
  };

  const removeSavedPostFromLocalStorage = () => {
    localStorage.removeItem('savedPosts');
  };

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  const setupUser = async ({ username, password, email, endpoint }) => {
    try {
      const { data } = await authFetch.post(`/auth/${endpoint}`, {
        username,
        email,
        password,
      });
      const { user, token } = data;
      dispatch({ type: SETUP_USER_SUCCESS, payload: { user, token } });
      addUserToLocalStorage({ user, token });
      addSavedPostToLocalStorage(user.savedPosts);
    } catch (error) {
      console.log('error', error);
    }
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER_SUCCESS });
    removeUserFromLocalStorage();
    removeSavedPostFromLocalStorage();
  };

  const fetchAllUsers = async () => {
    const { page, search, sort, limit } = state;
    let url = `/auth/users?page=${page}&sort=${sort}&limit=${limit}`;

    if (search) {
      url = url + `&search=${search}`;
    }
    try {
      const { data } = await authFetch.get(url);
      const { allUsers, numOfPages, totalUsers } = data;
      dispatch({
        type: FETCH_ALL_USERS_SUCCESS,
        payload: { allUsers, numOfPages, totalUsers },
      });
    } catch (error) {
      // logoutUser();
    }
  };

  const updateUserFromAdmin = async ({ id, roleValue, username }) => {
    try {
      await authFetch.patch(`/auth/user/${id}`, { roleValue, username });
      fetchAllUsers();
    } catch (error) {
      console.log('error', error);
    }
    cancelEditItem();
  };

  const deleteUser = async (id, userId) => {
    try {
      await authFetch.delete(`/auth/user/${id}`);

      if (userId === id) {
        logoutUser();
      } else {
        fetchAllUsers();
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const saveOrUnsavePost = async ({ id, save }) => {
    if (save) {
      try {
        const { data } = await authFetch.post('/auth/savedPosts', { id });
        dispatch({ type: SAVE_POST_SUCCESS, payload: data });
        addSavedPostToLocalStorage(data.savedPosts);
      } catch (error) {
        console.log('error', error);
      }
    } else {
      try {
        const { data } = await authFetch.delete(`/auth/savedPosts/${id}`);
        dispatch({ type: SAVE_POST_SUCCESS, payload: data });
        addSavedPostToLocalStorage(data.savedPosts);
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  const getAllSavedPosts = async () => {
    try {
      const { data } = await authFetch.get('/auth/savedPosts');
      const { savedPostsID, posts } = data;
      dispatch({
        type: GET_ALL_SAVED_POSTS_SUCCESS,
        payload: { savedPostsID, posts },
      });
      addSavedPostToLocalStorage(savedPostsID);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        handleChange,
        setupUser,
        logoutUser,
        fetchAllUsers,
        updateUserFromAdmin,
        deleteUser,
        authFetch,
        saveOrUnsavePost,
        getAllSavedPosts,
      }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
