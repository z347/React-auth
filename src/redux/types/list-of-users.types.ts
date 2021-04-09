import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export const LIST_OF_USERS_REQUEST_IS_LOADING = 'LIST_OF_USERS_REQUEST_IS_LOADING';
export const LIST_OF_USERS_DOWNLOAD_IS_SUCCESS = 'LIST_OF_USERS_DOWNLOAD_IS_SUCCESS';
export const LIST_OF_USERS_DOWNLOAD_IS_ERROR = 'LIST_OF_USERS_DOWNLOAD_IS_ERROR';

export type ListType = [
  {
    _id: string;
    name: string;
    email: string;
  },
];

export interface IDefaultState {
  loading: boolean;
  payload: ListType;
  error: boolean;
}

export interface IListIsLoading {
  type: typeof LIST_OF_USERS_REQUEST_IS_LOADING;
  loading: boolean;
}

export interface IListIsSuccess {
  type: typeof LIST_OF_USERS_DOWNLOAD_IS_SUCCESS;
  loading: boolean;
  payload: ListType;
}

export interface IListIsError {
  type: typeof LIST_OF_USERS_DOWNLOAD_IS_ERROR;
  loading: boolean;
  error: boolean;
}

export type ListDispatchTypes = IListIsLoading | IListIsSuccess | IListIsError;

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
