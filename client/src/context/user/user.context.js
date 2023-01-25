import { createContext, useContext, useReducer } from 'react';
import userReducer from './user.reducer';
import {
  SETUP_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  FETCH_ALL_USERS_SUCCESS,
} from '../actions';
import axios from 'axios';

const UserContext = createContext();

const user = localStorage.getItem('user');
const token = localStorage.getItem('token');

export const initialUserState = {
  user: user ? JSON.parse(user) : null,
  token: token,
  users: [],
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);

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

  const setupUser = async ({ username, password, endpoint }) => {
    try {
      const { data } = await authFetch.post(`/auth/${endpoint}`, {
        username,
        password,
      });
      const { user, token } = data;
      dispatch({ type: SETUP_USER_SUCCESS, payload: { user, token } });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      logoutUser();
    }
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER_SUCCESS });
    removeUserFromLocalStorage();
  };

  const fetchAllUsers = async () => {
    try {
      const { data } = await authFetch.get(`/auth/users`);
      dispatch({ type: FETCH_ALL_USERS_SUCCESS, payload: data });
    } catch (error) {
      logoutUser();
    }
  };

  const updateUser = async () => {
    try {
    } catch (error) {}
  };

  const deleteUser = async () => {
    try {
    } catch (error) {}
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        setupUser,
        logoutUser,
        fetchAllUsers,
        updateUser,
        deleteUser,
        authFetch,
      }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
