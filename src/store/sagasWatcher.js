import {all} from 'redux-saga/effects';
import {dogSagaWatcher} from './sagas/dogSaga';
import {randomPicWatcher} from './sagas/randomPicSaga';

export function* sagasWatcher() {
  yield all([dogSagaWatcher(), randomPicWatcher()]);
}
