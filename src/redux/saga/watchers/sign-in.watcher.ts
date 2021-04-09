import { takeEvery, call, all } from 'redux-saga/effects';

import { AUTH_REQUEST_IS_LOADING } from 'redux/types/sign-in.types';
import { authUser } from '../workers/sign-in.worker';

function* watchAuthUser(): any {
  yield takeEvery(AUTH_REQUEST_IS_LOADING, authUser);
}

export function* watchAuth(): any {
  yield all([call(watchAuthUser)]);
}
