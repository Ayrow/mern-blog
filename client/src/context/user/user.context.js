import { createContext, useContext, useReducer } from 'react';
import userReducer from './user.reducer';

const UserContext = createContext();

const initialUserState = {
  user: '',
  token: '',
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  const setupUser = () => {};

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
