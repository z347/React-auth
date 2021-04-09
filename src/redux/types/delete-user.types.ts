import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export const DELETE_USER_REQUEST_IS_LOADING = 'DELETE_USER_REQUEST_IS_LOADING';
export const DELETE_USER_REQUEST_IS_SUCCESS = 'DELETE_USER_REQUEST_IS_SUCCESS';
export const DELETE_USER_REQUEST_IS_ERROR = 'DELETE_USER_REQUEST_IS_ERROR';

export interface IDefaultState {
  loading: boolean;
  delete: boolean;
  error: boolean;
}

export interface IDeleteUserIsLoading {
  type: typeof DELETE_USER_REQUEST_IS_LOADING;
  loading: boolean;
}

export interface IDeleteUserIsSuccess {
  type: typeof DELETE_USER_REQUEST_IS_SUCCESS;
  loading: boolean;
  delete: boolean;
}

export interface IDeleteUserIsError {
  type: typeof DELETE_USER_REQUEST_IS_ERROR;
  loading: boolean;
  error: boolean;
}

export type DeleteUserDispatchTypes =
  | IDeleteUserIsLoading
  | IDeleteUserIsSuccess
  | IDeleteUserIsError;

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
