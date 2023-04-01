export const HANDLE_LOG_IN = "HANDLE_LOG_IN";
export const HANDLE_LOG_OUT = "HANDLE_LOG_OUT";

interface HandleLoginAction {
  type: typeof HANDLE_LOG_IN;
  username: string;
}

interface HandleLogoutAction {
  type: typeof HANDLE_LOG_OUT;
}

export type AppAction = HandleLoginAction | HandleLogoutAction;

interface AppState {
  logged: boolean;
  userName: string;
}

const AppReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case HANDLE_LOG_IN:
      return {
        ...state,
        logged: true,
        userName: action.username,
      };
    case HANDLE_LOG_OUT:
      return {
        ...state,
        logged: false,
        userName: "",
      };
    default:
      return state;
  }
};

export default AppReducer;
