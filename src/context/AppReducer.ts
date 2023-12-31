export const HANDLE_LOG_IN = "HANDLE_LOG_IN";
export const HANDLE_LOG_OUT = "HANDLE_LOG_OUT";
export const HANDLE_SEARCH_VALUE = 'HANDLE_SEARCH_VALUE';

interface HandleLoginAction {
  type: typeof HANDLE_LOG_IN;
  token: string;
}

interface HandleLogoutAction {
  type: typeof HANDLE_LOG_OUT;
}

interface HandleSearchValueAction {
  type: typeof HANDLE_SEARCH_VALUE;
  search: string;
}

export type AppAction = HandleLoginAction | HandleLogoutAction | HandleSearchValueAction;

interface AppState {
  logged: boolean;
  token: string;
  search: string;
}

const AppReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case HANDLE_LOG_IN:
      return {
        ...state,
        logged: true,
        token: action.token,
      };
    case HANDLE_LOG_OUT:
      return {
        ...state,
        logged: false,
        token: "",
      };
    case HANDLE_SEARCH_VALUE:
      return {
        ...state,
        search: action.search
      }
    default:
      return state;
  }
};

export default AppReducer;
