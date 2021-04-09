import {
  LIST_OF_USERS_REQUEST_IS_LOADING,
  LIST_OF_USERS_DOWNLOAD_IS_SUCCESS,
  LIST_OF_USERS_DOWNLOAD_IS_ERROR,
  IListIsLoading,
  IListIsSuccess,
  IListIsError,
  ListType,
  ThunkActionType,
  ThunkDispatchType,
} from '../types/list-of-users.types';

/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-use-before-define */

function requestGetListWithUsers(): ThunkActionType {
  return async (dispatch: ThunkDispatchType): Promise<void> => {
    try {
      dispatch(listIsLoading());

      const response = await fetch('/api/all-users', {
        method: 'GET',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      });
      const answer: ListType = await response.json();

      response.ok ? dispatch(listIsSuccess(answer)) : dispatch(listIsError());
    } catch (e) {
      dispatch(listIsError());
    }
  };
}

/* eslint-enable */

function listIsLoading(): IListIsLoading {
  return {
    type: LIST_OF_USERS_REQUEST_IS_LOADING,
    loading: true,
  };
}

function listIsSuccess(data: ListType): IListIsSuccess {
  return {
    type: LIST_OF_USERS_DOWNLOAD_IS_SUCCESS,
    loading: false,
    payload: data,
  };
}

function listIsError(): IListIsError {
  return {
    type: LIST_OF_USERS_DOWNLOAD_IS_ERROR,
    loading: false,
    error: true,
  };
}

export {
  requestGetListWithUsers,
  listIsLoading,
  listIsSuccess,
  listIsError,
};
