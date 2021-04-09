import { all, call } from 'redux-saga/effects';

import { watchAuth } from './watchers/sign-in.watcher';

export function* rootSaga() {
  yield all([call(watchAuth)]);
}
