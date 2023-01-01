import { createContext, useContext, useReducer } from 'react';
import userReducer from './user.reducer';

const UserContext = createContext();

const initialUserState = {
  user: '',
  token: '',
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  return (
    <UserContext.Provider value={{ ...state }}>{children}</UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
