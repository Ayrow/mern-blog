import { createContext, useContext, useReducer } from 'react';
import { EDIT_ITEM_BEGIN, EDIT_ITEM_CANCEL } from '../actions';
import appReducer from '../app/app.reducer';

const AppContext = createContext();

const initialAppState = {
  isAlertopen: false,
  isEditing: false,
  editID: null,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialAppState);

  const editItem = (id) => {
    dispatch({ type: EDIT_ITEM_BEGIN, payload: id });
  };

  const cancelEditItem = () => {
    dispatch({ type: EDIT_ITEM_CANCEL });
  };

  return (
    <AppContext.Provider value={{ ...state, editItem, cancelEditItem }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
