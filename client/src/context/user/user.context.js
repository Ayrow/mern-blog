import { createContext, useContext } from 'react';

const UserContext = createContext();

const user = localStorage.getItem('user');
const token = localStorage.getItem('token');

const initialUserState = {
  user: user ? JSON.parse(user) : null,
  token: token,
};

const UserProvider = ({ children }) => {
  return <UserContext.Provider> {children}</UserContext.Provider>;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
