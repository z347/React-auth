import {
  REGISTRATION_REQUEST_IS_LOADING,
  REGISTRATION_REQUEST_IS_SUCCESS,
  REGISTRATION_REQUEST_IS_ERROR,
  RegistrationDispatchTypes,
  IDefaultState,
} from '../types/sign-up.types';

const initialState: IDefaultState = {
  loading: false,
  registrationSuccess: false,
  error: false,
};

function signUpReducer(
  state = initialState,
  action: RegistrationDispatchTypes,
): IDefaultState {
  switch (action.type) {
    case REGISTRATION_REQUEST_IS_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case REGISTRATION_REQUEST_IS_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        registrationSuccess: action.registrationSuccess,
      };
    case REGISTRATION_REQUEST_IS_ERROR:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    default:
      return state;
  }
}

export default signUpReducer;
