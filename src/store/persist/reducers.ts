import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import rootReducer from '../ducks/rootReducer';

export default (reducers: typeof rootReducer) => {
  const persistedReducer = persistReducer(
    {
      key: 'appNameKey',
      storage,

      // ducks folder to persist
      whitelist: [],
    },
    reducers
  );

  return persistedReducer;
};
