import {
  LIST_OF_USERS_REQUEST_IS_LOADING,
  LIST_OF_USERS_DOWNLOAD_IS_SUCCESS,
  LIST_OF_USERS_DOWNLOAD_IS_ERROR,
  ListDispatchTypes,
  IDefaultState,
} from '../types/list-of-users.types';

const initialState: IDefaultState = {
  loading: false,
  payload: [
    {
      _id: 'plug',
      name: 'plug',
      email: 'plug',
    },
  ],
  error: false,
};

function listOfUsersReducer(state = initialState, action: ListDispatchTypes): IDefaultState {
  switch (action.type) {
    case LIST_OF_USERS_REQUEST_IS_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case LIST_OF_USERS_DOWNLOAD_IS_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        payload: action.payload,
      };
    case LIST_OF_USERS_DOWNLOAD_IS_ERROR:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    default:
      return state;
  }
}

export default listOfUsersReducer;
