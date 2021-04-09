import {
  DELETE_USER_REQUEST_IS_LOADING,
  DELETE_USER_REQUEST_IS_SUCCESS,
  DELETE_USER_REQUEST_IS_ERROR,
  IDeleteUserIsLoading,
  IDeleteUserIsSuccess,
  IDeleteUserIsError,
  ThunkActionType,
  ThunkDispatchType,
} from '../types/delete-user.types';

/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-use-before-define */

function requestDeleteOneUserFromList(userId: string): ThunkActionType {
  return async (dispatch: ThunkDispatchType): Promise<void> => {
    try {
      dispatch(deleteUserIsLoading());

      const response = await fetch(`/api/user:${userId}`, {
        method: 'DELETE',
        cache: 'no-cache',
      });

      response.ok && response.status === 200
        ? dispatch(deleteUserIsSuccess())
        : dispatch(deleteUserIsError());
    } catch (e) {
      dispatch(deleteUserIsError());
    }
  };
}

/* eslint-enable */

function deleteUserIsLoading(): IDeleteUserIsLoading {
  return {
    type: DELETE_USER_REQUEST_IS_LOADING,
    loading: true,
  };
}

function deleteUserIsSuccess(): IDeleteUserIsSuccess {
  return {
    type: DELETE_USER_REQUEST_IS_SUCCESS,
    loading: false,
    delete: true,
  };
}

function deleteUserIsError(): IDeleteUserIsError {
  return {
    type: DELETE_USER_REQUEST_IS_ERROR,
    loading: false,
    error: true,
  };
}

export {
  requestDeleteOneUserFromList,
  deleteUserIsLoading,
  deleteUserIsSuccess,
  deleteUserIsError,
};
