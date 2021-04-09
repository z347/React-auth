import { IRegistrationArguments } from 'types/handlers/registration-arguments';
import {
  REGISTRATION_REQUEST_IS_LOADING,
  REGISTRATION_REQUEST_IS_SUCCESS,
  REGISTRATION_REQUEST_IS_ERROR,
  IRegistrationIsLoading,
  IRegistrationIsSuccess,
  IRegistrationIsError,
  ThunkActionType,
  ThunkDispatchType,
} from '../types/sign-up.types';

/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-use-before-define */

function registrationRequest(data: IRegistrationArguments): ThunkActionType {
  return async (dispatch: ThunkDispatchType): Promise<void> => {
    try {
      dispatch(registrationIsLoading());

      const response = await fetch('/api/auth/sign-up', {
        method: 'POST',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(data),
      });

      response.ok ? dispatch(registrationIsSuccess()) : dispatch(registrationIsError());
    } catch (e) {
      dispatch(registrationIsError());
    }
  };
}

/* eslint-enable */

function registrationIsLoading(): IRegistrationIsLoading {
  return {
    type: REGISTRATION_REQUEST_IS_LOADING,
    loading: true,
  };
}

function registrationIsSuccess(): IRegistrationIsSuccess {
  return {
    type: REGISTRATION_REQUEST_IS_SUCCESS,
    loading: false,
    registrationSuccess: true,
  };
}

function registrationIsError(): IRegistrationIsError {
  return {
    type: REGISTRATION_REQUEST_IS_ERROR,
    loading: false,
    error: true,
  };
}

export {
  registrationRequest,
  registrationIsLoading,
  registrationIsSuccess,
  registrationIsError,
};
