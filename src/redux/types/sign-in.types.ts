import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export const AUTH_REQUEST_IS_LOADING = 'AUTH_REQUEST_IS_LOADING';
export const AUTH_REQUEST_IS_SUCCESS = 'AUTH_REQUEST_IS_SUCCESS';
export const AUTH_REQUEST_IS_ERROR = 'AUTH_REQUEST_IS_ERROR';

export const LOGOUT_REQUEST_IS_SUCCESS = 'LOGOUT_REQUEST_IS_SUCCESS';

export interface IDefaultState {
  loading: boolean;
  isAuthenticated: boolean;
  error: boolean;
}

export interface IAuthIsLoading {
  type: typeof AUTH_REQUEST_IS_LOADING;
  loading: boolean;
}

export interface IAuthIsSuccess {
  type: typeof AUTH_REQUEST_IS_SUCCESS;
  loading: boolean;
  isAuthenticated: boolean;
}

export interface IAuthIsError {
  type: typeof AUTH_REQUEST_IS_ERROR;
  loading: boolean;
  error: boolean;
}

export interface ILogoutIsSuccess {
  type: typeof LOGOUT_REQUEST_IS_SUCCESS;
  loading: boolean;
  isAuthenticated: boolean;
}

export type AuthDispatchTypes = IAuthIsLoading | IAuthIsSuccess | IAuthIsError | ILogoutIsSuccess;

/* eslint-disable @typescript-eslint/indent */
export type ThunkActionType = ThunkAction<
  Promise<void>,
  Record<string, never>,
  Record<string, never>,
  AnyAction
>;

export type ThunkDispatchType = ThunkDispatch<
  Record<string, never>,
  Record<string, never>,
  AnyAction
>;
