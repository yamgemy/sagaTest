import {takeLatest, call, put} from 'redux-saga/effects';
import axios from 'axios';
import {GET_TEST_DATA, API_CALL_FAILURE} from '../types';
import {some_set_api_TestAction} from '../actions/dogActions';

export function* dogSagaWatcher() {
  yield takeLatest(GET_TEST_DATA, dogSagaWorker);
}

// function that makes the api request and returns a Promise for response
function fetchDog() {
  return axios({
    method: 'get',
    url: 'https://dog.ceo/api/breeds/image/random',
  });
}

//worker is involed upon the listened action being dispatched
function* dogSagaWorker() {
  try {
    const response = yield call(fetchDog);
    const dog = response.data.message;

    // dispatch a success action to the store with the new dog
    yield put(some_set_api_TestAction(dog));
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({type: API_CALL_FAILURE, error});
  }
}
