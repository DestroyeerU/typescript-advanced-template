import { persistStore } from 'redux-persist';

import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import persistReducers from './persist/reducers';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSagas';

import { State } from './ducks/mystate_EXAMPLE/types';

export interface ApplicationState {
  mystate: State;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(persistReducers(rootReducer), applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
