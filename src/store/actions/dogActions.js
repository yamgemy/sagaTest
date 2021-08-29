import {GET_TEST_DATA, SET_TEST_DATA, START_GET_DATA} from '../types';

export const start_loading = () => {
  return {
    type: START_GET_DATA,
  };
};

export const some_call_api_TestAction = () => {
  return {
    type: GET_TEST_DATA,
  };
};

export const some_set_api_TestAction = data => {
  return {
    type: SET_TEST_DATA,
    payload: data,
  };
};
