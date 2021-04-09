import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from 'redux/reducers/root.reducer';
import { rootSaga } from 'redux/saga/root.saga';
import { logger } from './dev.settings';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk, sagaMiddleware, logger];
const enhancedStore = composeWithDevTools(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, enhancedStore);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
