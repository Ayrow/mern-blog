import { createContext, useContext, useReducer } from 'react';
import axios from 'axios';
import userReducer from './user.reducer';
import { SETUP_USER_SUCCESS } from '../actions';

const UserContext = createContext();

const user = localStorage.getItem('user');
const token = localStorage.getItem('token');

const initialUserState = {
  user: user ? JSON.parse(user) : null,
  token: token,
};

export const authFetch = axios.create({
  baseURL: '/api/v1',
});

//request
authFetch.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${initialUserState.token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//response
authFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // logoutUser
    }
    return Promise.reject(error);
  }
);

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
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
      console.log('error', error);
    }
  };

  return (
    <UserContext.Provider value={{ ...state, setupUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
