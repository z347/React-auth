import { ILoginArguments } from 'types/handlers/login-arguments';
import {
  AUTH_REQUEST_IS_ERROR,
  AUTH_REQUEST_IS_LOADING,
  AUTH_REQUEST_IS_SUCCESS,
  LOGOUT_REQUEST_IS_SUCCESS,
  IAuthIsLoading,
  IAuthIsSuccess,
  IAuthIsError,
  ILogoutIsSuccess,
  ThunkActionType,
  ThunkDispatchType,
} from '../types/sign-in.types';

/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-use-before-define */

function authRequest(data: ILoginArguments): ThunkActionType {
  return async (dispatch: ThunkDispatchType): Promise<void> => {
    try {
      dispatch(authIsLoading());

      const response = await fetch('/api/auth/sign-in', {
        method: 'POST',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(data),
      });

      response.ok ? dispatch(authIsSuccess()) : dispatch(authIsError());
    } catch (e) {
      dispatch(authIsError());
    }
  };
}

/* eslint-enable */

function authIsLoading(): IAuthIsLoading {
  return {
    type: AUTH_REQUEST_IS_LOADING,
    loading: true,
  };
}

function authIsSuccess(): IAuthIsSuccess {
  return {
    type: AUTH_REQUEST_IS_SUCCESS,
    loading: false,
    isAuthenticated: true,
  };
}

function authIsError(): IAuthIsError {
  return {
    type: AUTH_REQUEST_IS_ERROR,
    loading: false,
    error: true,
  };
}

function logoutIsSuccess(): ILogoutIsSuccess {
  return {
    type: LOGOUT_REQUEST_IS_SUCCESS,
    loading: false,
    isAuthenticated: false,
  };
}

export {
  authRequest,
  authIsLoading,
  authIsSuccess,
  authIsError,
  logoutIsSuccess,
};
