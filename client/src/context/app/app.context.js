import { createContext, useContext, useReducer } from 'react';
import appReducer from '../app/app.reducer';

const AppContext = createContext();

const initialAppState = {
  isAlertopen: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialAppState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
