import {
  DELETE_USER_REQUEST_IS_LOADING,
  DELETE_USER_REQUEST_IS_SUCCESS,
  DELETE_USER_REQUEST_IS_ERROR,
  DeleteUserDispatchTypes,
  IDefaultState,
} from '../types/delete-user.types';

const initialState: IDefaultState = {
  loading: false,
  delete: false,
  error: false,
};

function deleteUserReducer(state = initialState, action: DeleteUserDispatchTypes): IDefaultState {
  switch (action.type) {
    case DELETE_USER_REQUEST_IS_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case DELETE_USER_REQUEST_IS_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        delete: action.delete,
      };
    case DELETE_USER_REQUEST_IS_ERROR:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    default:
      return state;
  }
}

export default deleteUserReducer;
