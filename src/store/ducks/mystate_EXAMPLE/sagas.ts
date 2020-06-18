import { all, takeLatest } from 'redux-saga/effects';

import { StateTypes } from './types';
import { addRequest } from './actions';

function* add({ payload }: ReturnType<typeof addRequest>) {
  // Code here
}

export default all([takeLatest(StateTypes.ADD_REQUEST, add)]);
