import {
  AUTH_REQUEST_IS_LOADING,
  AUTH_REQUEST_IS_SUCCESS,
  AUTH_REQUEST_IS_ERROR,
  LOGOUT_REQUEST_IS_SUCCESS,
  AuthDispatchTypes,
  IDefaultState,
} from '../types/sign-in.types';

const initialState: IDefaultState = {
  isAuthenticated: false,
  loading: false,
  error: false,
};

function signInReducer(state = initialState, action: AuthDispatchTypes): IDefaultState {
  switch (action.type) {
    case AUTH_REQUEST_IS_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case AUTH_REQUEST_IS_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        isAuthenticated: action.isAuthenticated,
      };
    case AUTH_REQUEST_IS_ERROR:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    case LOGOUT_REQUEST_IS_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        isAuthenticated: action.isAuthenticated,
      };
    default:
      return state;
  }
}

export default signInReducer;
