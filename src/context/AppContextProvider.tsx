import React, { createContext, useReducer, ReactNode } from 'react';
import AppReducer, { AppAction, HANDLE_LOG_IN, HANDLE_LOG_OUT, HANDLE_SEARCH_VALUE } from './AppReducer';

interface AppState {
  logged: boolean;
  userName: string;
  search: string
}
export interface AppContextType {
  handleLogin: (username: string) => void;
  handleLogout: () => void;
  searchValue: (input: string) => void;
  logged: boolean;
  userName: string;
  search: string
}

const user = localStorage.getItem('name');
const initialState: AppState = user
  ? {
      logged: true,
      userName: user,
      search: '',
    }
  : {
      logged: false,
      userName: '',
      search: '',
    };

export const AppContext = createContext<AppContextType>({
  handleLogin: () => {},
  handleLogout: () => {},
  searchValue: () => {},
  logged: false,
  userName: '',
  search: ''
});

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const handleLogin = (username: string) => {
    dispatch({
      type: HANDLE_LOG_IN,
      username,
    });
  };

  const handleLogout = () => {
    dispatch({ type: HANDLE_LOG_OUT });
  };

  const searchValue = (search: string) => {
    dispatch({
      type: HANDLE_SEARCH_VALUE,
      search
    })
  }

  const contextValue: AppContextType = {
    ...state,
    handleLogin,
    handleLogout,
    searchValue
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
