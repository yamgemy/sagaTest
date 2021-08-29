import {takeLatest, call, put} from 'redux-saga/effects';
import {GET_RANDOMPIC} from '../types';
import axios from 'axios';
import {setRandomPic_action} from '../actions/randomPicActions';

export function* randomPicWatcher() {
  yield takeLatest(GET_RANDOMPIC, randomPicWorker);
}

function fetchRandomPic() {
  return axios({
    method: 'get',
    url: 'https://picsum.photos/200',
  });
}

function* randomPicWorker() {
  try {
    const response = yield call(fetchRandomPic);
    console.log('randompic response ', response.request.responseURL);

    yield put(setRandomPic_action(response.request.responseURL));
  } catch (error) {
    //todo
    console.log('error randomWorkerSaga ', error);
  }
}
