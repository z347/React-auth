import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export const REGISTRATION_REQUEST_IS_LOADING = 'REGISTRATION_REQUEST_IS_LOADING';
export const REGISTRATION_REQUEST_IS_SUCCESS = 'REGISTRATION_REQUEST_IS_SUCCESS';
export const REGISTRATION_REQUEST_IS_ERROR = 'REGISTRATION_REQUEST_IS_ERROR';

export interface IDefaultState {
  loading: boolean;
  registrationSuccess: boolean;
  error: boolean;
}

export interface IRegistrationIsLoading {
  type: typeof REGISTRATION_REQUEST_IS_LOADING;
  loading: boolean;
}

export interface IRegistrationIsSuccess {
  type: typeof REGISTRATION_REQUEST_IS_SUCCESS;
  loading: boolean;
  registrationSuccess: boolean;
}

export interface IRegistrationIsError {
  type: typeof REGISTRATION_REQUEST_IS_ERROR;
  loading: boolean;
  error: boolean;
}

export type RegistrationDispatchTypes =
  | IRegistrationIsLoading
  | IRegistrationIsSuccess
  | IRegistrationIsError;

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
