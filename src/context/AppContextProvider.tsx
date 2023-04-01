import React, { createContext, useReducer, ReactNode } from 'react';
import AppReducer, { AppAction, HANDLE_LOG_IN, HANDLE_LOG_OUT } from './AppReducer';

interface AppState {
  logged: boolean;
  userName: string;
}

interface AppContextType {
  handleLogin: (username: string) => void;
  handleLogout: () => void;
  logged: boolean;
  userName: string;
}

const user = localStorage.getItem('name');
const initialState: AppState = user
  ? {
      logged: true,
      userName: user,
    }
  : {
      logged: false,
      userName: '',
    };

export const AppContext = createContext<AppContextType>({
  handleLogin: () => {},
  handleLogout: () => {},
  logged: false,
  userName: '',
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

  const contextValue: AppContextType = {
    ...state,
    handleLogin,
    handleLogout,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
