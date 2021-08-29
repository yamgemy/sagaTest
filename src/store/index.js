import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {dogReducer} from './reducers/dogReducer';
import {randomPicReducer} from './reducers/randomPicReducer';
import {sagasWatcher} from './sagasWatcher';

export const rootReducer = combineReducers({
  dogReducer,
  randomPicReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagasWatcher);

export let sagaStore = store;
