import React, { createContext, useReducer, ReactNode } from 'react';
import AppReducer, { AppAction, HANDLE_LOG_IN, HANDLE_LOG_OUT, HANDLE_SEARCH_VALUE } from './AppReducer';

interface AppState {
  logged: boolean;
  token: string;
  search: string
}
export interface AppContextType {
  handleLogin: (token: string) => void;
  handleLogout: () => void;
  searchValue: (input: string) => void;
  logged: boolean;
  token: string;
  search: string
}

const user = localStorage.getItem('token');
const initialState: AppState = user
  ? {
      logged: true,
      token: user,
      search: '',
    }
  : {
      logged: false,
      token: '',
      search: '',
    };

export const AppContext = createContext<AppContextType>({
  handleLogin: () => {},
  handleLogout: () => {},
  searchValue: () => {},
  logged: false,
  token: '',
  search: ''
});

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const handleLogin = (token: string) => {
    dispatch({
      type: HANDLE_LOG_IN,
      token,
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
