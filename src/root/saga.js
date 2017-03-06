import { delay, takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';

import { increment } from './action';

function* tick() {
  const duration = 1 * 1000;

  while (true) {
    yield call(delay, duration);

    yield put(increment());
  }
}

export default [tick];
